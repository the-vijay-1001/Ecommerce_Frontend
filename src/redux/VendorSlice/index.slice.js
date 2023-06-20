import { createSlice } from "@reduxjs/toolkit";

export const vendoreSlice = createSlice({
    name : "vendor",
    initialState:{
        vendorData : {},
    },
    reducers:{
        vendorLoginAction:(state,action)=>{
            return (
                state = {
                    ...state,
                    vendorData : {...action.payload}
                }
            )
        }
    }
})


export const {vendorLoginAction} = vendoreSlice.actions;

export const vendorLoginRedux = (data) => async dispatch=>{
    try {
        dispatch(vendorLoginAction(data));
    } catch (error) {
        console.log(error);
    }
}

export default vendoreSlice.reducer;