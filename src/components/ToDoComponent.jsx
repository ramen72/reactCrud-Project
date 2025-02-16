import React, { Fragment, useState } from 'react';
import '../assets/css/style.css'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRotateLeft } from "react-icons/fa6";

const ToDoComponent = () => {
    let [taskText, setTaskText] = useState("")
    let [tasks, setTasks] = useState([]);
    let [isUpdate, setIsUpdate] = useState(false);
    let [index, setIndex] = useState(null);

    let handleInputChange = (e)=>{
        setTaskText(e.target.value)
        console.log(taskText)
    }

    let handleAddTodo = ()=>{
        setTasks([...tasks, taskText])
        setTaskText("")
        console.log(tasks)
    }

    let handleDelete = (index)=>{
        let newTask = [...tasks];
        newTask.splice(index,1)
        setTasks(newTask)
        setTaskText("")
        setIsUpdate(false)
        console.log(newTask)
    }
    
    let handleEdit = (item,index)=>{
        setIsUpdate(true)
        setTaskText(item)
        setIndex(index)
    }
    
    let handelUpdate = ()=>{
        let updateTasks = [...tasks];
        updateTasks[index] = taskText;
        setTasks(updateTasks);
        setIsUpdate(false)
        setTaskText("")
        console.log(index)
    }

    
    return (
        <Fragment>
            <main className="main">
            <h1 className="heading">ToDo List</h1>
            <div className="form-control py-2 mb-4">
                <input onChange={handleInputChange} value={taskText} type="text" name="item" id="newItemText" placeholder="Write you task"/>
                {
                    isUpdate
                    ?
                    <button onClick={handelUpdate} className="updateItemBtn" type="submit">Update</button>
                    :
                    <button  onClick={handleAddTodo} className="addNewItemBtn" type="submit">Add</button>                    
                }
            </div>
            <div className="content">
                <div className="pending">
                    <h2 className="itemHead">Pending Items Details</h2>
                    <ul className="pendingListItemHolder">
                        {
                            tasks.map((item,index)=>(
                                <li key={index} className="statusPending">
                                    <span className="taskItem">{item}</span>
                                    <div className="buttonsWrapper">
                                        <button className="editBtn" onClick={()=>handleEdit(item,index)}>
                                            <FaEdit/>
                                        </button>
                                        <button className="doneBtn">
                                            <FaCheck/>
                                        </button>
                                        <button onClick={()=>{handleDelete(index)}} className="pendingDeleteBtn">
                                            <RiDeleteBin5Line/>
                                        </button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="done">
                    <h2 className="itemHead">Completed Items Details</h2>
                    <ul className="completedListItemHolder">
                        <li className="statusPending">
                            <span className="taskItem">Done</span>
                            <div className="buttonsWrapper">
                                <button className="completeRestoreBtn">
                                    <FaRotateLeft/>
                                </button>
                                <button className="completeDeleteBtn">
                                    <RiDeleteBin5Line/>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
        </Fragment>
    );
};

export default ToDoComponent;