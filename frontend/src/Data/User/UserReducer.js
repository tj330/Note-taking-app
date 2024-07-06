import { details } from "../data";

const initialState={
    isLogged:false,
    user:details.user
}

const userReducer=(state=initialState,action)=>{
    console.log(state)
    switch(action.type){
        case "USER-FETCH":
            return {
                ...state,
                isLogged:true,
                user:{
                    username:action.username,
                    profile:action.profile
                }
            }
        case "USER-LOGOUT":
            console.log(state)
            return{
                ...state,
                isLogged:false,
                user:{
                    ...state.user,
                    username:"",
                    profile:""
                },
            }
        default:
            return state
    }
}

export default userReducer