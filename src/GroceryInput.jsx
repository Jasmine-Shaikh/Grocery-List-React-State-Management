import React from 'react';

function GroceryInput({showList}){
const [item,state] = React.useState("");
    return(
<div id="inputDiv">
    <input type="text" placeholder='Enter item-name to add' value={item} onChange={(e)=> state(e.target.value)}/>
    <button onClick={()=>showList(item)}>Add</button>
</div>
    )
}

export {GroceryInput};