import { useState } from "react";
export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input style={{
          padding:20,
          margin:10
        }} onChange={(e) => {
            const value = e.target.value;
            setTitle(value);
        }} 
        type="text" placeholder="title" /> <br />
        <input style={{
            padding:10,
            margin: 10
        }} onChange={(e) => {
            const value = e.target.value;
            setDescription(value);
        }} 
        type="text" placeholder="description" /><br />

        <button style={{
            padding:10,
            margin: 10
        }}  
        onClick={() => {
            fetch("hthp://localhost:3000/todo",{
                method: "POST",
                body:  JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(async (res) => {
                    const json = await res.json();
                    alert("todo added")
                })
        }}>Add a Todo</button>
    </div>
}

