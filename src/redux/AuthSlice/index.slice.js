import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name:"auth",
    initialState:{
        userData:{}
    },
    reducers:{
        loginAction: (state,action)=>{
            return (
                state={
                    ...state,
                    userData:{...action.payload}
                }
            )
        }
    }
})

export const {
    loginAction
} = authSlice.actions;

export const login = (data)=>async dispatch=>{
    try{
       dispatch(loginAction(data));
    }catch(err){
        console.log(err)
    }
}

export default authSlice.reducer;