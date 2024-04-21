import { useEffect } from "react";
import ToDoCards from "./ToDoCards";

// Creation of Container with todo Status filter and Card components
export default function ToDoCardsContainer({taskStatusFilter, setTaskStatusFilter, setEditId, setName, setDescription, data, setData, setShow}) {
    useEffect(() => {
      fetch ("https://6604ddfa2ca9478ea17ea44d.mockapi.io/inter", {method:"GET"},)
      .then((res) => res.json())
      .then((recdata) => {
        // console.log(recdata);
        setData(recdata)
      })
      .catch((error) => console.log(error)) 
    }, [])

    // Handling Todo Status Filter change event
    function selectChanged(e) {
      e.preventDefault();
      setTaskStatusFilter(e.target.value)
    }
  
    return (
      <div>
        <div className="todo-report-header">
          <div className="todo-report-title">My Todos</div>
          <div className="todo-report-filter">
            <span className="filter-caption">StatusFilter : </span>
            <select onChange={selectChanged}>
              <option>All</option>
              <option>NotCompleted</option>
              <option>Completed</option>
            </select>
          </div>
        </div>
        <div className="card-container">
          {
            data
            .filter((val) => {
              if (taskStatusFilter === "Completed" || taskStatusFilter === "NotCompleted") {
                return val.todostatus==taskStatusFilter
              } else if (taskStatusFilter === "All") {return val}
            })
            .map((val, idx) => {
              return <ToDoCards key={idx} id={idx} objdata={val} setEditId={setEditId} setName={setName} setDescription={setDescription} setShow={setShow} />
            })
          }
        </div>
      </div>
    )
  }
  