// import "./styles.css";
import { useState } from "react";
import React from "react";

function List({contacts}){
    const [filterText, setFilterText] = useState("");

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        })
    })

    return <div>
        <input placeholder="Filter Contact" value={filterText} onChange={(e) => setFilterText(e.target.value)}/>
        <ul>
            <label id="contactList">Contact List</label>
            <hr/>
            {
            filtered.map((c,i) => 
                <li  key={i}>
                    <span>{c.fullname}</span>
                    <span>{c.phone_number}</span>
                </li>
            )
            }
        
        </ul>
    </div>
        
    
}

export default List;