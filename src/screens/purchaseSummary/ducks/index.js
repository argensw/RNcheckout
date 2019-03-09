import productData from '@constants/mockData';

// Actions
const UPDATE_PURCHASE_LIST   = 'walmart/wipurchaseSummarydgets/UPDATE_PURCHASE_LIST';
const UPDATE_DISCOUNT = 'walmart/purchaseSummary/UPDATE_DISCOUNT';

// initial schema state
const initState = {
    purchaseList: productData,
    discount: null
};

// Reducer
export default function reducer(state = initState, action = {}) {
    switch (action.type) {
        case UPDATE_PURCHASE_LIST: 
            return {
                ...state,
                purchaseList: action.payload
            };
        case UPDATE_DISCOUNT: 
            return {
                ...state,
                discount: action.payload
            };
        default: return state;
    }
};

const increaseProductQuntityBy = ({ productList, productId, increaseBy }) => {
    
    const indexToUpdate = productList.findIndex((item) => item.id === productId);
    const product = productList[indexToUpdate];

    return [...productList.slice(0, indexToUpdate), Object.assign({}, product, { quantity: product.quantity + increaseBy }), ...productList.slice(indexToUpdate + 1)];
};

// Action Creators
export function updatePurchaseList(updatedPurchaseList) {
    return { type: UPDATE_PURCHASE_LIST, payload: updatedPurchaseList };
}

export function applyPromocode(percent) {
    return { type: UPDATE_DISCOUNT, payload: percent };
}

// Operations
export const increaseProductQuantity = (productId) => (dispatch, getState) => {
    const { purchaseList } = getState().purchaseSummary;
    const updatedPurchaseList = increaseProductQuntityBy({ productList: purchaseList, productId, increaseBy: 1 });

    dispatch(updatePurchaseList(updatedPurchaseList));
};

export const decreaseProductQuantity = (productId) => (dispatch, getState) => {
    const { purchaseList } = getState().purchaseSummary;
    const updatedPurchaseList = increaseProductQuntityBy({ productList: purchaseList, productId, increaseBy: -1 });

    dispatch(updatePurchaseList(updatedPurchaseList));
};
