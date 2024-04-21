import { useState } from 'react';
import './App.css'
import ToDoForm from './components/ToDoForm';
import ToDoCardsContainer from './components/ToDoCardsContainer';

// Main App
export default function App() {
  const [show, setShow] = useState(true)
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [taskStatusFilter, setTaskStatusFilter] = useState("All");
  const [editId, setEditId] = useState();

  return (
    <>
      <h2 className="page-title">React Project - ToDo App</h2>
      <hr />
      <ToDoForm 
        editId={editId}
        name={name} setName={setName} 
        description={description} setDescription={setDescription} 
        data={data} setData={setData} 
        show={show} setShow={setShow} 
      />
      <hr />
      <ToDoCardsContainer 
        taskStatusFilter={taskStatusFilter} setTaskStatusFilter={setTaskStatusFilter} 
        setEditId={setEditId} 
        setName={setName} 
        setDescription={setDescription} 
        data={data} setData={setData} 
        setShow={setShow} 
      />
    </>
  )
}
