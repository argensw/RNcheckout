import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    label: {
        fontSize: 20,
        flex: 0.7
    },
    labelPressable: {
        textDecorationLine: 'underline'
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    discountPrice: {
        color: 'red'
    },
    total: {
        fontSize: 26,
        fontWeight: 'bold'
    }
});
