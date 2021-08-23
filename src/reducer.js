

export const initialState={
    basket:[]
}
function reducer(state, action){
    console.log(action)
    switch(action.type){
        case "Add_To_basket":
            return{
                ...state,
                basket:[...state.basket, action.item],
            }
    
        case "remove_From_basket":
            let newBasket=[...state.basket];
            const index=state.basket.findIndex(
                (basketItem)=>basketItem.id===action.id)
            if(index>=0){
                newBasket.splice(index,1)
            }else{
                console.log(`cant remove product${action.id}`)
            }
            return{
                ...state,
                basket:newBasket
            }

        break;
        default:
            return state
    }
}

export default reducer;
       