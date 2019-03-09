import { Alert, Button, TextInput, View } from 'react-native';
import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import styles from './styles';

const propTypes = {
    applyPromocode: PropTypes.func.isRequired,
    discount: PropTypes.object.isRequired
};

class Promocode extends PureComponent {
    state = { promocode: '' };

    handleChangeInput = (promocode) => {
        this.setState({ promocode });
    }

    handleApplyPromocode = () => {
        if (this.state.promocode === 'DISCOUNT') {
            this.handleChangeInput('');
            this.props.applyPromocode({ percent: 10 });
        } else {
            Alert.alert(
                'Warning',
                'You have entered invalid promocode, please try again',
                [
                    {text: 'OK' }
                ],
                { cancelable: true }
            );
        }
    }

    handleResetPromocode = () => {
        this.props.applyPromocode(null);
    }

    render() {
        return (
            <View style={styles.container}>
                { this.props.discount
                    ? <Button
                        onPress={this.handleResetPromocode}
                        title="Reset promocode"
                        color="#cf6060"
                    />
                    : <React.Fragment>
                        <TextInput
                        style={{ height: 40, borderColor: '#41e37a', borderWidth: 1 }}
                        onChangeText={this.handleChangeInput}
                        value={this.state.promocode}
                        />
                        <Button
                            disabled={this.state.promocode.length === 0}
                            onPress={this.handleApplyPromocode}
                            title="Apply"
                            color="#41e37a"
                        />
                    </React.Fragment>
                }    
            </View>
        );
    }
}

Promocode.propTypes = propTypes;

export default Promocode;
