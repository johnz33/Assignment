import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./actionTypes"
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux'; 
import { RootState } from "../reducers/reducers";

export const fetchData =():ThunkAction<void, RootState, unknown, AnyAction> =>{
   return async(dispatch:any)=>{
    dispatch({type:FETCH_DATA_REQUEST})
    try{
        const response=await fetch("https://fakestoreapi.com/products");
        const data =await response.json;
        dispatch({type:FETCH_DATA_SUCCESS,payload:data});
    }
    catch(error:any){
        dispatch({type:FETCH_DATA_FAILURE,payload:error.message})
    }
   }
}