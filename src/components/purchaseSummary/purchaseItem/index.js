import { Button, Image, Text, TouchableWithoutFeedback, View } from 'react-native';

import Divider from '@components/common/divider';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const propTypes = {
    id: PropTypes.number.isRequired,
    imageSource: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceAfterSavings: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    increaseProductQuantity: PropTypes.func.isRequired,
    decreaseProductQuantity: PropTypes.func.isRequired
};

const PurchaseItem = (props) => {
    const increaseProductQuantity = () => {
        props.increaseProductQuantity(props.id);
    };

    const decreaseProductQuantity = () => {
        props.decreaseProductQuantity(props.id);
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: props.imageSource }}
                />
                <Button
                    onPress={increaseProductQuantity}
                    title="+"
                    color="#41e37a"
                />
                <Button
                    disabled={props.quantity === 0}
                    onPress={decreaseProductQuantity}
                    title="-"
                    color="#cf6060"
                />
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.text}>
                    {props.description}
                </Text>
                <Divider marginVertical={5} />
                <Text style={styles.text}>
                    Qty :{props.quantity}
                </Text>
                <Text style={styles.text}>
                    ${props.priceAfterSavings * props.quantity}
                </Text>
                <Text style={styles.price}>
                    ${props.price * props.quantity}
                </Text>
            </View>
        </View>
    );
}


PurchaseItem.propTypes = propTypes;

export default PurchaseItem;


