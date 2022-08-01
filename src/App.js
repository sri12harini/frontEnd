import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import RouteList from './components/RouteList';
import { useState,useEffect } from 'react';
import apiClient from './http-common'
import {BrowserRouter, Routes ,Route ,  Link ,useNavigate } from 'react-router-dom'
import AddRouteForm from './components/AddRouteForm';
import EditRouteForm from './components/EditRouteForm';


function App() {
  
const [routeData,setRoute]=useState([]);

    //when App component gets loaded , a call to api will render the products list as a response
    //which we are setting to the products
    useEffect(()=>{apiClient.get('/').then((response)=>{
      setRoute(response.data);
    })},[])

    
const [editing,setEditing]=useState(false);

const initialFormState = {
  routeId:0,
  routeFrom:'',
  routeTo:'',
  distance:''

}
const [currentRoute,setCurrentroute] 
     =useState(initialFormState);

   //child component --AddProductForm child -App is parent ,product object in the form of input fields form 
   //brand price name on submission  
async function addRoute(route){
  try{
  const response=await apiClient.post('/',route);
    setRoute([...routeData,response.data]);
    console.log(route);
    
  }catch(err){
    console.log(err)
  }
  
}



async function deleteRoute(routeId){
  await apiClient.delete(`/${routeId}`);
    setRoute(routeData.filter((route)=>routeData.routeId !== routeId));
  }
  
  const editRoute=(route)=>{

    setEditing(true);
      setCurrentroute
      ({routeId:route.routeId,routeFrom:route.routeFrom,
        routeTo:route.routeTo,distance:route.distance})
     
  }
  
  const updateRoute = (routeId,updatedRoute)=>{
  
    setEditing(false);
    apiClient.put(`/${routeId}`,updatedRoute).then((response)=>
    {
  
      console.log('route updated');
      setRoute(routeData.map((route)=>
    (route.routeId === routeId ? updatedRoute : route)));
    })
    
  }
  
  
  return (<div>
    <div className='container'>
    <h1>Search for bus routes!!</h1>
    <div className='flex-row'>
      <div className='flex-large'>
        
        {editing ? (
        <div>
          <h2>Edit Route Form </h2>
          <EditRouteForm
           setEditing={setEditing}
           currentRoute={currentRoute}
           updateRoute={updateRoute}
           />
           </div>):(

    <BrowserRouter>
    
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/route" className="navbar-brand">
          React App
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/route"} className="nav-link">
              Route
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addRoute"} className="nav-link">
              Add Route
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
        <Route path='/' element={<RouteList 
    routeData={routeData} 
         editRoute={editRoute}
         deleteRoute={deleteRoute} />} ></Route>
          <Route exact path="addRoute" element={<AddRouteForm addRoute={addRoute}/>} />
         
         <Route path='/route' element={<RouteList 
    routeData={routeData} 
         editRoute={editRoute}
         deleteRoute={deleteRoute} />}>

         </Route>
         <Route path="/route/:routeId" element={<EditRouteForm /> }></Route>
        </Routes>
      </div>
      
    </BrowserRouter>
    )}</div></div></div></div>
)}

export default App;