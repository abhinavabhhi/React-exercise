import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./ActionType"

const initialstate = {
    loading: true,
    userlist: [],
    userobj: {},
    errmessage: ''
}

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }
        case GET_USER_LIST:
            return {
                loading: false,
                errmessage: '',
                userlist:action.payload,
                userobj:{}
            }
            case DELETE_USER:
                const _filterdata = state.userlist.filter((data) => {
                    return data.id !== action.payload
                })
            return{
                ...state,
                userlist: _filterdata,
                loading:false
            }
            case ADD_USER:
                const _inputdata = { ...action.payload };
                const _maxid = Math.max(...state.userlist.map(o => o.id));
                _inputdata.id = _maxid + 1;
                return{
                ...state,
                userlist: [...state.userlist, _inputdata],
                loading:false
            }
            case UPDATE_USER:
                const _data = { ...action.payload };
            const _finaldata = state.userlist.map(item => {
                return item.id === _data.id ? _data : item
            });
            return{
                ...state,
                userlist: _finaldata,
                loading:false
            }
            case GET_USER_OBJ:return{
                ...state,
                loading:false,
                userobj:action.payload
            }
        default: return state
    }
}