import React from 'react';

function GroceryList({data,deleteItem}){

    return(
<div id="listDiv">
  {
  data.map((e)=>{
      return (
          <div id="listItem">
              <p>{e.item}</p>
        <button onClick={()=>{deleteItem(e.id)}}>Delete</button>
          </div>
      )
  })
}
</div>
    )
}

export {GroceryList};