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
        },
        updateUserDataAction: (state, action) => {
            return (state = {
              ...state,
              userData: {
                ...state.userData,
                ...action.payload,
              },
            });
          }
    }
})

export const {
    loginAction,
    updateUserDataAction
} = authSlice.actions;

export const login = (data)=>async dispatch=>{
    try{
       dispatch(loginAction(data));
    }catch(err){
        console.log(err)
    }
}

export const updateUserData = (data) => async (dispatch) => {
    try {
      dispatch(updateUserDataAction(data));
    } catch (error) {
      console.log(error);
    }
  };

export const selectUser = (state)=>state.auth.userData;
export default authSlice.reducer;