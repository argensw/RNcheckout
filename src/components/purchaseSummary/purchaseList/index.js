import Divider from '@components/common/divider';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import PurchaseItem from './../purchaseItem';
import React from 'react';

const propTypes = {
    purchaseList: PropTypes.array.isRequired,
    increaseProductQuantity: PropTypes.func.isRequired,
    decreaseProductQuantity: PropTypes.func.isRequired
};

const PurchaseList = (props) => {
    keyExtractor = (item) => `${item.id}`;

    renderItem = ({item}) => (
        <PurchaseItem
            description={item.description}
            imageSource={item.imageSource}
            quantity={item.quantity}
            price={item.price}
            priceAfterSavings={item.price - item.pickupPriceSavings}
            id={item.id}
            increaseProductQuantity={props.increaseProductQuantity}
            decreaseProductQuantity={props.decreaseProductQuantity}
        />
    );

    return (
        <FlatList
            data={props.purchaseList}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    );
}


PurchaseList.propTypes = propTypes;

export default PurchaseList;


