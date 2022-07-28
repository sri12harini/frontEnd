import http from "../http-common";
const getAll = () => {
  return http.get(`/`);
};
const get = routeId => {
  return http.get(`/${routeId}`);
};
const create = data => {
  return http.post("/", data);
};
const update = (routeId, data) => {
  return http.put(`/${routeId}`, data);
};
const remove = routeId => {
  return http.delete(`/${routeId}`);
};
/* any other service or queries or sorting or features which you want to add
const removeAll = () => {
  return http.delete(`/tutorials`);
};
const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};*/
const RouteService = {
  getAll,
  get,
  create,
  update,
  remove,
  //removeAll,
  //findByTitle
  //you can add more actions here
};
export default RouteService;