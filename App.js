import React, { PureComponent } from 'react';

import { Provider } from 'react-redux';
import PurchaseSummary from '@screens/purchaseSummary';
import { View } from 'react-native';
import store from '@redux/store';

export default class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <View>
                    <PurchaseSummary />
                </View>
            </Provider>
        );
    }
}
