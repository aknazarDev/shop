import {
    ADD_TO_BASKET,
    ADD_TO_FAVORITES,
    CHOOSE_THE_CURRENCY,
    DECREASE_QUANTITY,
    DELETE_FROM_BASKET, INCREASE_QUANTITY
} from "./Actiontypes";


/** BASKET ACTIONS **/
export const addToBasket = (product) => {
    let basket = JSON.parse(localStorage.getItem('basket')) || []
    basket = [...basket, {...product, quantity: 1}]
    localStorage.setItem('basket', JSON.stringify(basket))
    return {type: ADD_TO_BASKET, payload: product}
}

export const decreaseQuantity = (product) => {
    let basket = JSON.parse(localStorage.getItem('basket')) || []
    basket = basket.map(el => {
        if (el.id === product.id) {
            if (el.quantity > 1) {
                return {...el, quantity: el.quantity - 1}
            } else return el
        } else return el
    })
    localStorage.setItem('basket', JSON.stringify(basket))
    return {type: DECREASE_QUANTITY, payload: product}
}

export const increaseQuantity = (id) => {
    let basket = JSON.parse(localStorage.getItem('basket')) || []
    basket = basket.map(el => {
        if (el.id === id) {
            return {...el, quantity: el.quantity + 1}
        } else return el
    })
    localStorage.setItem('basket', JSON.stringify(basket))
    return {type: INCREASE_QUANTITY, payload: id}
}

export const deleteFromBasket = (id) => {
    let basket = JSON.parse(localStorage.getItem('basket')) || []
    basket = basket.filter(el => el.id !== id)
    localStorage.setItem('basket', JSON.stringify(basket))
    return {type: DELETE_FROM_BASKET, payload: id}
}

/** FAVORITES ACTIONS **/

export const addToFavorite = (product) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const found = favorites.find(el => el.id === product.id)
    if (found) {
        favorites = favorites.filter(el => el.id !== product.id)
    } else {
        favorites = [...favorites, {...product, isLiked: true}]
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
    return {type: ADD_TO_FAVORITES, payload: product}
}

/** CURRENCY ACTIONS **/

export const chooseCurrency = (e) => {
    let optionValue = e.target.value
    localStorage.setItem('currency', optionValue)
    return {type: CHOOSE_THE_CURRENCY, payload: e}
}















