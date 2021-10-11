export const clearItemFromCart = (cartItems, cartItemToDelete) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToDelete.id);
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    const sizeVal = cartItemToAdd.size ? cartItemToAdd.size : 'N/A';
    const colorVal = cartItemToAdd.color ? cartItemToAdd.color : 'Regal-purple';

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem 
        )
    }
    return cartItemToAdd.quantity ? [...cartItems, {...cartItemToAdd}] : [...cartItems, {...cartItemToAdd, size: sizeVal, color: colorVal, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
    
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    
    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem 
    )
};