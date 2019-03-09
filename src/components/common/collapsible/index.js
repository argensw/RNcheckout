import React, { PureComponent } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles';

const propTypes = {
    titleToOpenCollapse: PropTypes.string.isRequired,
    titleToCloseCollapse: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

class Collapsible extends PureComponent {
    state = { isOpen: false };

    toggleCollapsible = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.toggleCollapsible}>
                    <Text style={styles.title}>
                        {this.state.isOpen ? `${this.props.titleToCloseCollapse} -` : `${this.props.titleToOpenCollapse} +`}
                    </Text>
                </TouchableWithoutFeedback>
                <View>
                    {this.state.isOpen && this.props.children}
                </View>
            </View>
        );
    }
}


Collapsible.propTypes = propTypes;

export default Collapsible;
