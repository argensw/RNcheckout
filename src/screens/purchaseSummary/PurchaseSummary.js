import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { PureComponent } from 'react';

import Collapsible from '@components/common/collapsible';
import Divider from '@components/common/divider';
import PriceRow from '@components/common/priceRow';
import Promocode from '@components/purchaseSummary/promocode';
import { PropTypes } from 'prop-types';
import PurchaseList from '@components/purchaseSummary/purchaseList';
import { TAX_PERCENTAGE } from '@constants/common';

const propTypes = {
    applyPromocode: PropTypes.func.isRequired,
    discount: PropTypes.object.isRequired,
    purchaseList: PropTypes.array.isRequired,
    increaseProductQuantity: PropTypes.func.isRequired,
    decreaseProductQuantity: PropTypes.func.isRequired,
};

class PurchaseSummary extends PureComponent {
    calculateSumOf(property) {
        const sum = this.props.purchaseList.reduce((accumulator, product) => {
            return accumulator + product.quantity * product[property];
        }, 0);

        return sum;
    }

    handlePressPickupSaving = () => {
        Alert.alert(
            'Pickup savings',
            'Pickup your order in the stores helps cut costs, and we pass the savings on to you.',
            [
                {text: 'OK' }
            ],
            { cancelable: true }
        );
    }

    renderEstimationTotal (totalPrice) {
        const { discount } =  this.props;
        if (discount) {
            const totalPriceWithDiscount = totalPrice - (totalPrice * discount.percent / 100);
            
            return (
                <React.Fragment>
                    <View style={styles.discountInfoContainer}>
                        <Text style={styles.discountLabel}>
                            {discount.percent}% discount applied.
                        </Text>
                        <Text style={styles.priceBeforeDiscount}>
                            ${totalPrice.toFixed(2)}
                        </Text>
                    </View>

                    <PriceRow
                        label="Est. total" 
                        price={totalPriceWithDiscount}
                        isTotal
                    />
                </React.Fragment>
            );
        }

        return (
            <PriceRow
                label="Est. total" 
                price={totalPrice}
                isTotal
            />
        );
    }

    render() {
        const subtotalValue = this.calculateSumOf('price');
        const pickupSavings = -this.calculateSumOf('pickupPriceSavings');
        const tax = (subtotalValue * TAX_PERCENTAGE / 100);
        const total = (pickupSavings + subtotalValue + tax);

        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}
            >
                <PriceRow
                    label="Subtotal"
                    price={subtotalValue}
                />
                <PriceRow
                    label="Pickup savings"
                    onPress={this.handlePressPickupSaving}
                    price={pickupSavings}
                />
                <PriceRow
                    label="Est. taxes & fees (Based on 94085)" 
                    price={tax}
                />
                <Divider marginVertical={10}/>
                {this.renderEstimationTotal(total)}
                <Collapsible
                    titleToOpenCollapse="See details"
                    titleToCloseCollapse="Hide details"
                >
                    <PurchaseList
                        purchaseList={this.props.purchaseList}
                        increaseProductQuantity={this.props.increaseProductQuantity}
                        decreaseProductQuantity={this.props.decreaseProductQuantity}
                    />
                </Collapsible>
                <Divider marginVertical={10}/>
                <Collapsible
                    titleToOpenCollapse="Apply promo code"
                    titleToCloseCollapse="Hide promo code"
                >
                    <Promocode
                        applyPromocode={this.props.applyPromocode}
                        discount={this.props.discount}
                    />
                </Collapsible>
            </ScrollView>
        );
    }
}

PurchaseSummary.propTypes = propTypes;

export default PurchaseSummary;

  
const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        marginHorizontal: 40,
    },
    discountInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    discountLabel: {
        fontSize: 20,
        flex: 0.7
    },
    priceBeforeDiscount: {
        fontSize: 26,
        fontWeight: 'bold',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    }
});
