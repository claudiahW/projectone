import { useState } from "react";

export default function Form() {
    const [name, setName] = useState({ firstName: "", lastName: "" });
   
    return (
    <div>
        {name.firstName} - {name.lastName}
        <form>
           <input type="text"  onChange={(e) => setName({ ...name,firstName: e.target.value })}  
           value={name.firstName}
            />
           <input type="text" onChange={(e) => setName({...name, lastName: e.target.value }) } value={name.lastName} />
           <button>Add</button>
        </form>
    </div>
    );
}