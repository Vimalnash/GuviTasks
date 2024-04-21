
// Creation of Todo Card contents and its funcionalities
export default function ToDoCards({setEditId, setName, setDescription, objdata, setShow}) {
    function populateData() {
        // console.log("populatedData")
        setName(objdata.todoname)
        setDescription(objdata.tododescription)
    }
  
    //Hanlding Todo Edit Button Click event 
    function editBtnClick(e) {
        e.preventDefault();
        setShow(false);
        const editContentId = e.target.id
        const parent = e.target.parentNode.parentNode.parentNode;
        setEditId(editContentId)
        populateData();
    }

    //Hanlding Todo Delet Button Click event
    function delBtnClick(e) {
        e.preventDefault();
        const delId = e.target.id
        const parent = e.target.parentNode.parentNode.parentNode;
        const deleteConfirm = confirm("Confirm Delete?");
        if (deleteConfirm) {
          fetch (`https://6604ddfa2ca9478ea17ea44d.mockapi.io/inter/${delId}`, {
            method:"DELETE",
            },)
            .then((res) => res.json())
            .then((deletedData) => {
            // console.log(deletedData);
            if(deletedData) {
                parent.remove();
            }
            })
            .catch((error) => console.log(error)) 
        }
    }

    // Each Todo Status Update
    function taskStatusUpdate(objdata, statusUpdateId, statusUpdateValue) {
      const updateData = {
        todoname: objdata.name,
        tododescription: objdata.description,
        todostatus : statusUpdateValue
      }

      fetch (`https://6604ddfa2ca9478ea17ea44d.mockapi.io/inter/${statusUpdateId}`, {
        method: "PUT",
        body: JSON.stringify(updateData),
        headers: {
          "content-type": "application/json"
        }
      })
      .then((res) => res.json())
      .then((updateddata) => {
        // console.log(updateddata);
        if(updateddata) {
          location.reload();
        }
      })
      .catch((error) => console.log(error)) 
    }

    // Hanlding Status Change event in Todo card
    function todoStatusChange (e) {
      e.preventDefault();
      const statusUpdateId = e.target.id;
      const statusUpdateValue = e.target.value;
      const statusUpdate = confirm("Do you want to update the status?")
      if(statusUpdate) {
        taskStatusUpdate(objdata, statusUpdateId, statusUpdateValue)
      } else {
        location.reload();
      }
    }
  
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <div className="card-top">
              <div className="card-main-desc">
                <div><span className="card-caption">Name : </span><span className="card-value">{objdata.todoname}</span></div>
                <div><span className="card-caption">Description : </span><span className="card-value">{objdata.tododescription}</span></div>
              </div>
              <div className="card-status">
                  <span className="card-caption">Status : </span>
                  {objdata.todostatus == "NotCompleted" ? 
                    (
                    <select id={objdata.id} className="status-nc" onChange={todoStatusChange}>
                      <option>NotCompleted</option>
                      <option>Completed</option>
                    </select>
                    ) 
                    : 
                    (
                    <select id={objdata.id} className="status-c" onChange={todoStatusChange}>
                      <option>Completed</option>
                      <option>NotCompleted</option>
                    </select>
                    )
                }
              </div>
            </div>
          </div>
          <div className="card-btn-group">
            <button className="btn btn-edit" id={objdata.id} onClick={editBtnClick}>Edit</button>
            <button className="btn btn-del" id={objdata.id} onClick={delBtnClick}>Delete</button>
          </div>
        </div>
      </div>
    )
  }