import {actionTypes as freezerTypes,actions as freezerActions} from "../ducks/freezer";
import {actionTypes as orderTypes,actions as orderActions} from "../ducks/orders";

describe('updateTemperature', () => {

    it('should return the right action type', () => {
        const action = freezerActions.updateTemperature(-1);
        expect(action.type).toEqual(freezerTypes.UPDATE_TEMPERATURE);
    });

    it('should contain the temperature in the payload', () => {
        const action = freezerActions.updateTemperature(-6);
        expect(action.payload).toEqual(-6);
    });

})

describe('addIceCream', () =>{

    it('should contain the right action type', () => {
        const action = freezerActions.addIceCream();
        expect(action.type).toEqual(freezerTypes.ADD_ICECREAM);
    })

    it('should have the flavor in the payload', () => {
        const action = freezerActions.addIceCream('test');
        expect(action.payload.flavor).toEqual('test');
    })

    it('should have the amount in the payload', () => {
        const action = freezerActions.addIceCream('test', 20);
        expect(action.payload.amount).toEqual(20);
    })
})

describe('placeOrder', () => {

    it('should have the right action', () => {
        const action = orderActions.placeOrder();
        expect(action.type).toEqual(orderTypes.PLACE_ORDER);
    })
})