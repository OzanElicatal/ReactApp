import {useState} from "react";

const initalFormsValue = { fullname: "", phone_number: "" }
function Form({ contacts, addContact}){
    const [form, setForm] = useState({fullname: "", phone_number: ""});
    
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if(form.fullname === "" || form.phone_number === ""){
            return false;
        };
        addContact([...contacts, form]);
        setForm(initalFormsValue)

    }
    return <form onSubmit={onSubmit}>
        <div>
            <label>Name:</label>
            <input name="fullname" placeholder="Name" value={form.fullname} onChange={onChangeInput} />    
        </div>
        <div>
            <label>Phone Number:</label>
            <input name="phone_number" placeholder="Phone Number" value={form.phone_number} onChange={onChangeInput}/>
        </div>
        <div>
            <button>Add</button>
        </div>
     </form>

    
}

export default Form;