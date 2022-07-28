import {
    ADD_ROUTE,
  RETRIEVE_ROUTE,
  UPDATE_ROUTE,
  DELETE_ROUTE,
  } from "../actions/types";
  const initialState = [];
  function routeReducer(route = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case ADD_ROUTE:
        return [...route, payload];
      case RETRIEVE_ROUTE:
        return payload;
      case UPDATE_ROUTE:
        return route.map((Route) => {
          if (route.id === payload.id) {
            return {
              ...route,
              ...payload,
            };
          } else {
            return route;
          }
        });
      case DELETE_ROUTE:
        return route.filter(({ id }) => id !== payload.id);
      
      default:
        return route;
    }
  };
  export default routeReducer;