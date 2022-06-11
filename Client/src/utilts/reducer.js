// export const initialState = {
//     basket: [],
//     user: null,
// };

// export const getBasketTotal = (basket) =>
//     basket?.reduce((amount, item) => item.price + amount, 0);


// const reducer = (state, action) => {
//     console.log(action);
//     switch (action.type) {
//         case "Add_To_Basket":
//             console.log(typeof state)
//             return {
//                 ...state,
//                 basket: [...state.basket, action.item]
//             };
//         case "Remove_From_Basket":
//             let newBasket = [...state.basket];
//             const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
//             if (index >= 0) {
//                 newBasket.splice(index, 1);
//             }
//             else {
                
//                 console.warn(
//                     `cant remove (id:${action.id}) as its`
//                 );
//             }
//             return {   
//                 ...state,
//                 basket: newBasket
//             }
//         case "SET_USER": {
//             return {
//                 ...state,
//                 user: action.user
//             }
//         };

//         default:
//             return state;

//     }
// };
// export default reducer;