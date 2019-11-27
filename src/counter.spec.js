import {increaseCount, reducer, store} from './Counter';

describe('reducer', () => {

    it('should return a state', () => {
        const result = reducer({count:0});
        expect(result.count).not.toBeUndefined();
    });

    it('should add amount', () => {
        const result = reducer({count:1}, increaseCount(2));
        expect(result.count).toBe(3);
    });
});

describe('store', () => {

    it('should return default state', () => {
        const state = store.getState();
        expect(state.count).toEqual(0);
    })

    it('should dispatch actions and update the state', () => {
        const action1 = increaseCount();
        const action2 = increaseCount(3);
        store.dispatch(action1);
        expect(store.getState().count).toBe(1);
        store.dispatch(action2);
        expect(store.getState().count).toBe(4);
    })

    it('should call the listener when the state data changes', () => {
        const listener = jest.fn();
        store.subscribe(listener);
        const action = increaseCount();
        store.dispatch(action);
        expect(listener).toHaveBeenCalled();
    })
})