import {GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAIL} from "../constants/constants"

export const GetDataReducer = (state={pokemonData:[]} , {type , payload})=>{
        switch (type) {
            case GET_DATA_REQUEST : return {...state}
            case GET_DATA_SUCCESS : return {...state , pokemonData:payload }
            case GET_DATA_FAIL : return {pokemonData:payload }
            
            default: return state
               
        }
}