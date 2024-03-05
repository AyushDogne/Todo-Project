import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from "react"


export default function AlertDialog(props)
{
  const [open, setOpen] = React.useState(false);
  const [todo, setTodo] = React.useState([])


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
 


  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add todos

      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
         <input type="text" placeholder="Enter todo here" id="todoInput" className="todo-Input"></input>
      <button className="add-Todo-Button" onClick={() => addTodo()}> <h4>Add Todo</h4></button>
      <Button onClick={handleClose}>Closs</Button>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose} autoFocus>
            
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}