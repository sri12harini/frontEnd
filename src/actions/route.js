import {
    ADD_ROUTE,
  RETRIEVE_ROUTE,
  UPDATE_ROUTE,
  DELETE_ROUTE,
  
} from "./types";
import  RouteService from "../services/RouteService";
//we are creating action objects so that they can be dispatched to the store
//addProduct --dispatch object from where -
// when we  bindActionCreators -- destructured object of diff vars and functions and to that we are tying the dispatch
//useDispatch hook , which will give us the constant of dispatch

export const addRoute = ({routeFrom,routeTo,distance}) => async (dispatch) => {
  try {
    //first the call to back end server is happening
    //data of product type and we receive server response

    const res = await RouteService.create({ routeFrom,routeTo,distance });
    dispatch({
      type: ADD_ROUTE,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveRoute = () => async (dispatch) => {
  try {
    const res = await RouteService.getAll();
    dispatch({
      type: RETRIEVE_ROUTE,
      payload:res.data,
    });
   
  
}
catch(err){return Promise.reject(err);}};


export const updateRoute = (routeId, data) => async (dispatch) => {
  try {
    const res = await RouteService.update(routeId, data);
    dispatch({
      type: UPDATE_ROUTE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const  deleteRoute = (routeId) => async (dispatch) => {
  try {
    await RouteService.remove(routeId);
    dispatch({
      type: DELETE_ROUTE,
      payload: { routeId },
    });
  } catch (err) {
    console.log(err);
  }
};
