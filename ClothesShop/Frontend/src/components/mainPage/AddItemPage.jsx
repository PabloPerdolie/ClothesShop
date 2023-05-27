import React from "react";
import Nav from "./Nav";
import AddItem from "./catalog/AddItem";

function AddItemPage(){
    return(
        <div className="add-item-page">
            {<Nav/>}
            {<AddItem/>}
        </div>
    )
}

export default AddItemPage;