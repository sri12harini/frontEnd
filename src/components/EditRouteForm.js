import React , {useContext, useEffect, useState} from 'react'
import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'

export default function EditRouteForm(props){
     const [route,setRoute] =useState(props.currentRoute)

    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setRoute({...route,[name]:value});
     }


     const submitHandler=(event)=>{event.preventDefault();
       props.updateRoute(route.routeId,route);
    }


   

     return (
      <Card style={{ backgroundColor: "lightGrey" ,width: '30rem' }}>
      <ListGroup variant="flush">
        <form onSubmit={submitHandler}>
         
<label>routeId</label>
<h1>{props.currentRoute.routeId}</h1>

<label>routeFrom</label>
<input 
type='text'
name='routeFrom'
value={route.routeFrom}
onChange={handleInputChange}/><br/>
<br/>

<label>routeTo</label>
<input 
type='text'
name='routeTo'
value={route.routeTo}
onChange={handleInputChange}/><br/>
<br/>

<label>distance</label>
<input 
type='number'
name='distance'
value={route.distance}
onChange={handleInputChange}/><br/>
<br/>

<button>Update Route</button>
<button onClick={()=>props.setEditing(false)} 
className="button muted-button">Cancel</button></form>

</ListGroup>
    </Card>

   )


  


}