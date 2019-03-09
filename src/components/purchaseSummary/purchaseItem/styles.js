import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 25
    },
    image: {
        width: 100,
        height: 100
    },
    descriptionContainer: {
        flex: 0.8
    },
    imageContainer: {
        marginRight: 10
    },
    text: {
        color: 'black',
        fontSize: 15,
    },
    price: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: 'black',
        fontSize: 15,
    }
});
