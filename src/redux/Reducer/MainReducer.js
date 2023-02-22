import {
    ADD_TO_BASKET,
    ADD_TO_FAVORITES, CHOOSE_CURRENCY, CHOOSE_THE_CURRENCY,
    DECREASE_QUANTITY,
    DELETE_FROM_BASKET,
    GET_PRODUCTS, INCREASE_QUANTITY
} from "../Actiontypes";

const initialState = {
    products: [
        {
            id: 1,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 4000,
            countInStock: 2,
            rating: 4,
            image:
                'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg',
        },
        {
            id: 2,
            title: 'The Select Moscow ',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 2300,
            countInStock: 2,
            rating: 3,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW1AUK0_5586039_1_v1.jpeg',
        },
        {
            id: 3,
            title: 'A-A Awesome Apparel ',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 9000,
            countInStock: 2,
            rating: 5,
            image:
                'https://a.lmcdn.ru/img600x866/M/P/MP002XW0472M_12786127_1_v1_2x.jpg',
        },
        {
            id: 4,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 2,
            image:
                'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg',
        },
        {
            id: 5,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 1,
            image:
                'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg',
        },
        {
            id: 6,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 3,
            image:
                'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg',
        },
    ],
    defaultCurrency: localStorage.getItem('currency') ||  'SOM',
    allCurrencies: {
        SOM: 1,
        RUB: 0.8,
        $: 0.012,
        TENGE: 5.41,
        SUM:8.23
    },
}

export const MainReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PRODUCTS : {
            return state
        }

        case CHOOSE_THE_CURRENCY : {
            return {...state, defaultCurrency: action.payload.target.value}
        }

        default :
            return state
    }
}