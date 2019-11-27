export const actionTypes = {
    PLACE_ORDER: 'PLACE_ORDER',
    FULFILL_ORDER: 'FULFILL_ORDER',
    PAY_FOR_ORDER: 'PAY_FOR_ORDER',
    CANCEL_ORDER: 'CANCEL_ORDER',
}

const DEFAULT_STATE = {

    orders: [],

}

export const actions = {
    placeOrder({customer, createdAt=Date.now(), cone=true, scoops}){
        return {
            type: actionTypes.PLACE_ORDER,
            payload: {customer, createdAt, cone, scoops},
        }
    },

    fulfillOrder(id){
        return{
            type: actionTypes.FULFILL_ORDER,
            payload: id,
        }
    },
    payOrder(id){
        return{
            type: actionTypes.PAY_FOR_ORDER,
            payload: id,
        }
    },
    cancelOrder(id){
        return{
            type: actionTypes.CANCEL_ORDER,
            payload:id,
        }
    }

}

export default function reducer(state=DEFAULT_STATE, action){
    switch(action.type){
        case actionTypes.PLACE_ORDER:
            return{
                ...state,
                orders:[...state.orders, action.payload]
            }
        case actionTypes.FULFILL_ORDER:
            return state.map((order, index)=>{
                if(action.payload===index){
                    return{
                        ...order,
                        status: 'fulfilled',
                    }
                }
            });
        case actionTypes.PAY_FOR_ORDER:
            return state.map((order, index)=>{
                if(action.payload===index){
                    return{
                        ...order,
                        status: 'paid',
                    }
                }
            });
        case actionTypes.CANCEL_ORDER:
            return state.filter((order, index)=>{
                if(action.payload===index){ 
                    return false;
                }
            });  
        default:
            return state;
    }
}