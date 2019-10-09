import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/carActions'
const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    store: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export function carReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FEATURE:

            let car = { ...state.car };
            car.features.push(action.payload);
            car.price = car.price + action.payload.price

            return {
                ...state,
                car: car
            };
        case REMOVE_FEATURE:

            let carToRemove = { ...state.car };
            carToRemove.features = carToRemove.features.filter(feature => {
                return feature.id !== action.payload.id
            })
            carToRemove.price = carToRemove.price - action.payload.price


            return {
                ...state,
                car: carToRemove
            };


        default:
            return state;
    }
}