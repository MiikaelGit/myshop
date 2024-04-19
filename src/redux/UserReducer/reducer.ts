interface User {
    name: string;
    email: String;
}

interface UserState {
    user: User | null;
}
const inicialState: UserState = {
    user: null,
}

interface UserAction {
    type: string;
    payload?: User;
}

export function userReducer(state = inicialState, action: UserAction): UserState {
    if (action.type === "user/login") {
        return{
            ...state,
            user: action.payload as User,
        };
    } else if (action.type === "user/logout") {
        return {
            ...state, 
            user: null,
        }
    }
    return state;
}