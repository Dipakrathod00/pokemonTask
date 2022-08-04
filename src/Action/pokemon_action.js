import {GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAIL} from "../constants/constants"
import axios from "axios"

export const GetDataAction = ()=>async(dispatch)=>{
        try {
                dispatch({type:GET_DATA_REQUEST})
                const pagesize = 10
                const pageNo = 1
                const {data} = await axios.get(`https://api.pokemontcg.io/v2/cards?page=${pageNo}&pageSize=${pagesize}`)
                console.log(data.data.length);
                //  const pageNo =Math.ceil(data.data.length/pagesize)+1 
                console.log(data.data );
        dispatch({type:GET_DATA_SUCCESS , payload:data})
        } catch (error) {
                dispatch({type:GET_DATA_FAIL , payload:error.message})
                
        }
}