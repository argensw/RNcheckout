import reducer, { applyPromocode, decreaseProductQuantity, increaseProductQuantity } from './ducks';

import PurchaseSummary from './PurchaseSummary';
import { connect } from 'react-redux';

export { reducer };


const mapDispatchToProps = {
    applyPromocode,
    increaseProductQuantity,
    decreaseProductQuantity
};

const mapStateToProps = (state) => ({
    purchaseList: state.purchaseSummary.purchaseList,
    discount: state.purchaseSummary.discount,
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseSummary);
