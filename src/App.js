import { useEffect, useState } from "react"
import "../src/App.css"


const App = () => {

  const [todo, setTodo] = useState([])
  const [editingFlage, setEditing] = useState(-1)

  function addTodo() {
    console.log("-----Addtodo---")
    let tempTodo = document.getElementById("todoInput").value
    console.log("tempTodo: " + tempTodo)

    if (tempTodo === "") {
      alert("Please add your Todos :")
    }

    else {
      console.log("addTodos in array")
      fetch("/addtodo?title=" + tempTodo)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "Success") {
            setTodo(data.todoList)
            document.getElementById("todoInput").value = ""
          }
          else {
            alert(data.message)
          }
        })
    }
    // if (todo.length>0)
    // {
    //   addToArray(todo[todo.length-1].id+1,tempTodo,false)
    // }
    // else
    
    // { 
    //   addToArray(0,tempTodo,false)
    // }

  }

  useEffect(() => {
    console.log("testing")
    fetch("/getAllTodos")
      .then((res) => res.json())
      .then((data) => setTodo(data.todoList))
  }, [])

  // function mock()
  // { 
  //   if (todo.length>0)
  //   {

  //     addToArray(todo[todo.length-1].id+1,"Todo 1",true)
  //     addToArray(todo[todo.length-1].id+1,"Todo 2",false)
  //     addToArray(todo[todo.length-1].id+1,"Todo 3",true)
  //   }
  //   else
  //   {
  //      addToArray(0,"Todo 1",false)
  //      addToArray(todo[todo.length-1].id+1,"Todo 2",true)
  //      addToArray(todo[todo.length-1].id+1,"Todo 3",false)
  //      addToArray(todo[todo.length-1].id+1,"Todo 4",true)
  //   }
  // }


  function addToArray(id, text, completed) {
    // let tempTodoObject = {
    //   id: id,
    //   text: text,
    //   completed: completed
    // }
    // todo.push(tempTodoObject)
    // console.log("After push")
    // console.log(todo)
    // setTodo([...todo])
  }

  function deleteTodo(id) {
    todo.map(element => {
      if (element.id === id) {
        fetch('/deleteTodo?id=' + id)
          .then((res) => res.json())
          .then((data) => {
            console.log("befor if condition part", data.status)

            if (data.status === 'Success') {
              console.log("if condition part", data.status)
              setTodo(data.todoList)
            }
            else {
              console.log("else condition part")
              alert(data.message)
            }
          })
        return element.id === id
      }
    })
    // console.log(tempTodo)
    // setTodo([...tempTodo])
  }

  function checkListener(id) {
    console.log("----Checklistener--")
    todo.map(element => {
      if (element.id === id) {
        // element.completed = !element.completed
        fetch('/compeleteTodo?id=' + element.id + "&status=" + !element.status)
          .then((res) => res.json())
          .then((data) => {
            // console.log("data", data)
            if (data.status === "Success") {
              setTodo([...data.todoList])
            }
            else {
              alert(data.message)
            }
          })
      }
      return element

    })
    // console.log(todo)
  }

  function editTodo(id) {
    console.log("-----------editTodo-----")
    console.log("id: " + id)
    setEditing(id)

    console.log(todo)
    setTodo([...todo])

  }

  function updateTodo() {
    console.log("-------Update todo-----")
    console.log("editingFlage: " + editingFlage)

    let tempTodo = todo.map(element => {
      if (element.id === editingFlage) {
        // element.text = document.getElementById("editTodo").value
        fetch('/editTodo?id=' + element.id + "&title=" + document.getElementById("editTodo").value)
          .then((res) => res.json())
          .then((data) => {
            // console.log("data",data)
            if (data.status === "Success") {
              setEditing(-1)
              setTodo([...data.todoList])
            }
            else {
              alert(data.message)
            }
          })
      }
      return element
    })
  }


  return (
    <div className="main-body">
      <h1 className="todoHeading">To-Do Application</h1>
      <input type="text" placeholder="Enter todo here" id="todoInput" className="todo-Input"></input>
      <button className="add-icon" onClick={() => addTodo()}> <h4>Add Todo</h4></button>

<h3 style={{margin:"20px"}}>Completed Todo</h3>
      <div style={{margin:"50px"}}>
        {
          todo.map(element => {
            return <div>
              {
                element.status ?
                   
                  <div className="compelete-todo">
                    <div className="compelet-todo-text"><s>{element.title + " "}</s></div>
                    <div><input type="checkbox" onChange={() => checkListener(element.id)} true  className="compelete-check"/></div>
                  </div>:
                  (element.id === editingFlage ?
                    <div className="last">
                     <div className="after-edit"><input type="text" defaultValue={element.title}  id="editTodo" /></div>
                     <div>
                       {/* <input type="checkbox" onChange={() => checkListener(element.id)} ></input> */}
                      <button onClick={() => deleteTodo(element.id)} className="after-edit-delete" >Delete</button>
                      <button onClick={() => updateTodo()} className="after-edit-seveTodo">Save Todo</button></div>
                    </div>
                    :   
                    <div className="last"> 
                      <div className="text-todo"> {element.title + " "}</div>                    
                      <div>                   
                        <input type="checkbox" onChange={() => checkListener(element.id)} className="check-icon" ></input>
                        <button onClick={() => deleteTodo(element.id)} className="delete-edit" >Delete</button>
                        <button onClick={() => editTodo(element.id)} className="delete-edit">Edite</button>
                      </div>
                    </div>
                  )

              }
            </div>
          })
        }
      </div>
    </div>
  )
}
export default App;











//react aartitacture
//mvc
//mvvm
//icons8.com