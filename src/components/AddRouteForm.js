import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addRoute } from '../actions/route';


export default function AddRouteForm(props){
   
const dispatch=useDispatch();
   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */

const initialFormState = {
   id:0,
   routeFrom:'',
   routeTo:'',
   distance:0

}
 
const [route,setRoute]=useState(initialFormState);
//a function which is universal for all changes 
//id ,name ,brand , price
//when is handleInputChange 
//when you are changing the name of the product
//      event.target.name =name
//event.target.value ='mouse'



const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setRoute({...route,[name]:value});
}
 
/*
const handleIdChange =(event)=>{
   setId(event.target.value)
}

const handleNameChange = (event)=>{
   setName(event.target.value)
}

const handleBrandChange=(event)=>{
   setBrand(event.target.value)
}

const handlePriceChange=(event)=>{
   setPrice(event.target.value)
}*/

const submitHandler=(event)=>{event.preventDefault();
if( !route.routeFrom || !route.routeTo || 
    !route.distance) return;
 console.log(route+'from addrouteform')
props.addRoute(route);
dispatch(addRoute(route));
setRoute(initialFormState);

}
return (<>

   <form onSubmit={submitHandler}>

<label>Id</label>
<input 
type='number'
name='id'
value={route.id}
onChange={handleInputChange}/>

<label>routeFrom</label>
<input 
type='text'
name='routeFrom'
value={route.routeFrom}
onChange={handleInputChange}/>

<label>routeTo</label>
<input 
type='text'
name='routeTo'
value={route.routeTo}
onChange={handleInputChange}/>

<label>distance</label>
<input 
type='number'
name='distance'
value={route.distance}
onChange={handleInputChange}/>

<button>Add New Route</button>

</form>


</>
)


}