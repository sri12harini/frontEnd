import React ,{useState,useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link, Route} from 'react-router-dom'

import {
    retrieveRoute,

}from '../actions/route'
export default function RouteList(props){
  //we have dispatched the actioncreator retrieveProducts
  //in the component loading time once only
    const dispatch=useDispatch();
    
    
    const [currentRoute,setCurrentRoute]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    //this products array will hold the state of products 
    const routes = useSelector((state)=>state.route);
     

    useEffect(()=>{
        dispatch(retrieveRoute());
      },[]);

    
    const refreshData=()=>{
        setCurrentRoute(null);
        setCurrentIndex(-1);
    }
 

    const setActiveRoute= (route,index)=>{
        setCurrentRoute(route);
        setCurrentIndex(index);

    }

    //any other method
    //for sorting
    //for searching 


return(
<table>
    <thead>
        <tr>
            <th>routeId</th>
            <th>routeFrom</th>
            <th>routeTo</th>
            <th>distance</th>
        </tr>
    </thead>
    <tbody>
{/*  {props?.productData?.length >0 ?(
        props.productData.map((product)=>(
   */}

  {props.routeData?.length > 0 ? (
    props.routeData.map((route)=>(
    <tr key={route.routeId}>
        <td>{route.routeId}</td>
        <td>{route.routeFrom}</td>
        <td>{route.routeTo}</td>
        <td>{route.distance}</td>
        <td><button 
         onClick={()=>{props.editRoute(route)}}
        className="button muted-button">Edit</button></td>
        <td><button 
        onClick={()=>props.deleteRoute(route.routeId)}
        className="button muted-button">Delete</button></td>
        
     </tr>))):(
        <tr>
            <td colSpan={6}>No routes</td>
        </tr>
     )}

    </tbody>
</table>




)




}