import { Text, TouchableWithoutFeedback, View } from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const propTypes = {
    label: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onPress: PropTypes.func,
    isTotal: PropTypes.bool
};

const defaultProps = {
    onPress: null,
    isTotal: false
};

const formatValue = (value, unit = '$') => {
    if (value < 0) {
        return `-${unit}${Math.abs(value).toFixed(2)}`;
    }

    return `${unit}${value.toFixed(2)}`;
};

const PriceRow = ({ label, price, onPress, isTotal }) => (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onPress}>
            <Text style={[styles.label, onPress && styles.labelPressable, isTotal && styles.total]}>
                {label}
            </Text>
        </TouchableWithoutFeedback>
        <Text style={[styles.price, price < 0 && styles.discountPrice, isTotal && styles.total]}> {formatValue(price)} </Text>
    </View>
);

PriceRow.propTypes = propTypes;
PriceRow.defaultProps = defaultProps;

export default PriceRow;
