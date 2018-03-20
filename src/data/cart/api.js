
const saveToLocalStorage = (cart) =>{
   localStorage.setItem('cart', JSON.stringify(cart));
}
const getFromLocalStorage = () =>{
    const emptyCart = {items: []};
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart || emptyCart;
}
// saveToLocalStorage({
//     items:[
//         {producId:'3', quantity: 3},
//     ]
// })
export const fetchCart = async () => getFromLocalStorage();
export