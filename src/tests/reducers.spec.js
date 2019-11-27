import reducer, {actions, MAX_AMOUNT_PER_ICECREAM} from "../ducks/freezer";
import { isTSAnyKeyword } from "@babel/types";
import * as flavors from  "../constants/icecream_flavors";

describe('Freezer reducer', () => {

    it('should store the temperature in the state',()=>{
        const newState = reducer(undefined,actions.updateTemperature(5));
        expect(newState.temperature).toEqual(5);
    });
    it('should store the icecream in the state',()=>{
        const newState=reducer(undefined,actions.addIceCream(flavors.FABADA,33));
        expect(newState.icecreams[flavors.FABADA]).toEqual(33);
    })
    it('should add the amount to an icecream if it already exists',()=>{
        const previousState = {
            icecreams: {
                [flavors.CHOCOLATE]:3
            }
        }
        const newState=reducer(previousState,actions.addIceCream(flavors.CHOCOLATE,22));
        expect(newState.icecreams[flavors.CHOCOLATE]).toEqual(25);
        
    })
    it('should limit the amount to a maximum value', ()=>{
        const previousState={
            icecreams:{
                [flavors.CHOCOLATE]:7
            }
        }
        const newState=reducer(previousState,actions.addIceCream(flavors.CHOCOLATE,66));
        expect(newState.icecreams[flavors.CHOCOLATE]).toEqual(MAX_AMOUNT_PER_ICECREAM);
    })
});