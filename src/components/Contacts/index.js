import {useEffect, useState} from "react";
import Form from "./Form";
import List from "./List";
import "./styles.css"

function Contacts() {
    const [contacts, setContacts] = useState([
        {fullname: "Ozan Eliçatal", phone_number: "5531170050"},
        {fullname: "Fulya Luna", phone_number: "6666666666"},
        {fullname: "İzmir Low", phone_number: "1235869555"},
        {fullname: "Evren Tatlı", phone_number: "1123456789"},
    ]);

    return (
        <div id="container">
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts;