export const actionTypes = {
    UPDATE_TEMPERATURE: 'UPDATE_TEMPERATURE',
    ADD_ICECREAM : 'ADD_ICECREAM',
}

export const MAX_AMOUNT_PER_ICECREAM = 50;

const DEFAULT_STATE = {

    temperature: 5,
    icecreams: {},

}

export const actions = {

    updateTemperature(temperature){
        return {
            type: actionTypes.UPDATE_TEMPERATURE,
            payload: temperature,
        };
    },

    addIceCream(flavor, amount=25){
        return{
            type: actionTypes.ADD_ICECREAM,
            payload: {
                flavor,
                amount,
            }
        };
    },

}

export default function reducer(state=DEFAULT_STATE, action){
    
    switch(action.type){
        case actionTypes.UPDATE_TEMPERATURE:
            return{
                ...state,
                temperature: action.payload
            }
        case actionTypes.ADD_ICECREAM:
            const newAmount=action.payload.amount + (state.icecreams[action.payload.flavor] || 0)
            return{
                ...state,
                icecreams:{
                    ...state.icecreams,
                    [action.payload.flavor] : Math.min(newAmount, MAX_AMOUNT_PER_ICECREAM),
                    }
            }
        default:
            return state;
    }

}