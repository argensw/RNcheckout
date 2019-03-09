import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

const propTypes = {
    marginVertical: PropTypes.number
};

const defaultProps = {
    marginVertical: 0
};

const Divider = ({ marginVertical }) => {
    const style = {
        borderBottomColor: '#bebebe',
        borderBottomWidth: 1,
        marginVertical
    };

    return (
        <View style={style}>
            {null}
        </View>
    );
};

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default Divider;
