const initialState={
    isLogged:false,
    user:{},
    token:""
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case "USER-FETCH":
            return {
                ...state,
                isLogged:true,
                user:{
                    username:action.payload.username,
                },
                token:action.payload.token
            }
        case "USER-LOGOUT":
            console.log(state)
            return{
                ...state,
                isLogged:false,
                user:{
                    ...state.user,
                    username:"",
                },
            }
        default:
            return state
    }
}

export default userReducer