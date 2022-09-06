import CartContext from './cart-context'
import React, {useReducer} from 'react'

const defaultCartState = {
    items:[],
    totalAmount:0,
}

const cartReducer = (state, action) =>{
    if(action.type === 'ADD-ITEM'){
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if(action.type === 'REMOVE-ITEM')
    return defaultCartState
}


const CartProvider = props =>{
const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item)=>{
        dispatchCartAction({
            type:'ADD-ITEM',
            item:item
        })
    }
    const removeItemFromCartHandler = (id)=>{
        dispatchCartAction({
            type:'REMOVE-ITEM',
            id:id
        })
    }

    const cartContext ={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        additem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
        </CartContext.Provider>
}

export default CartProvider
