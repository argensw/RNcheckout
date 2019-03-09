import { combineReducers } from 'redux';
import { reducer } from '@screens/purchaseSummary';

const rootReducer = combineReducers({
    purchaseSummary: reducer,
});

export default rootReducer;
