import React from 'react';
import {GroceryList} from "./GroceryList.jsx";
import {GroceryInput} from "./GroceryInput.jsx";
import {v4 as uuidv4} from "uuid";


function Grocery(){
    const [data,inState] = React.useState([]) 

    const showList = (item) => {
    const itemDetails = {
 
        item:item,
        id: uuidv4()
    }; inState([...data,itemDetails])}
    const deleteItem = (itemId)=>{
          data.map((e,i)=>{
              if(e.id === itemId){
                data.splice(i,1);
                const updatedData = [...data];
                inState([...updatedData])
              }
          })
    }
    return (  
        
    <div>
     <div id="header">
       <img src="https://cdn-icons-png.flaticon.com/512/135/135763.png" alt="icon" />
       <h2>Grocery List</h2>
       <img src="https://cdn-icons-png.flaticon.com/512/135/135763.png" alt="icon" />
     </div>
     <div>
        <GroceryInput showList={showList}/>
        <GroceryList deleteItem={deleteItem} data={data}/>   
     </div>
    
    </div>

    )
    

}

export {Grocery}