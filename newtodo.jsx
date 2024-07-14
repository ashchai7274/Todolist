import { useState } from "react";

const NewTodo = () => {
    let[search,setSearch]= useState()
    let [todo,updateTodo] = useState([
        {
            id:1,
            task:"web"
        },
        {
            id:2,
            task:"java"
        },
        {
            id:3,
            task:"sql"
        }
    ])

    let incre = 3
    let addTodo = ()=>{
        if(search === ""){
            alert("add todo")
        }
        else{
            let newtodos = [
               ...todo,
               {
                id:incre,
                task:search
               }
            ]
            updateTodo(newtodos)
            setSearch("")
           
        }
    }

    let deleteHandler = (indexValue)=>{
        let newtodos = todo.filter((todo,index) => index !== indexValue)
        updateTodo(newtodos)
        updateTodo(newtodos.slice(0,-1)) 
    }
    let time = new Date().toLocaleTimeString()
    let [state,setState] = useState(time)

    setInterval(()=>{
        let time = new Date().toLocaleTimeString()
        setState(time)
       },1000)  
 
    return ( 
        <div className="container mt-5 w-50">
            <div className="input-group">
                <input type="text"  className="form-control" value={search} onChange={e=>setSearch(e.target.value)}/>
                <button className="btn btn-primary" onClick={addTodo}>Add todo</button>
            </div>

            <ol className="list-group mt-5">
                {
                    todo.map(i=>{
                        return(
                            <div key={i.id}>
                                 <li className="list-group-item d-flex justify-content-between">
                                    <p>{i.task}</p>
                                    <button className="btn " onClick={deleteHandler}>delete</button>
                                    {/* <h5>{state}</h5> */}
                                </li>
                          
                            </div>
                        )
                    })
                }

            </ol>
           

        </div>
     );
}
 
export default NewTodo;