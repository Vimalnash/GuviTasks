
// Form for creation and updating a Todos
export default function ToDoForm({editId, name, setName, description, setDescription, data, setData, show, setShow}) {
  // New input data to object
  const inputData = {
      todoname: name,
      tododescription: description,
      todostatus : "NotCompleted"
    }

    // New Data Add
    function todoAdd(inputData) {
      fetch ("https://6604ddfa2ca9478ea17ea44d.mockapi.io/inter", {
        method: "POST",
        body: JSON.stringify(inputData),
        headers: {
          "Content-Type": "application/json",
        },
      },)
      .then((res) => res.json())
      .then((addeddata) => {
        console.log(addeddata);
        if(addeddata) {
          const newData = [...data, addeddata]
          setData(newData)
        }
      })
      .catch((error) => console.log(error)) 
    }

    // Update Data
    function todoUpdate(editId, updateData) {
      fetch (`https://6604ddfa2ca9478ea17ea44d.mockapi.io/inter/${editId}`, {
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


    // Add Button Click
    function addBtnClick(e) {
      e.preventDefault();
      todoAdd(inputData);
    }

    // Update Button Click
    function updateBtnClick(e) {
      e.preventDefault();
      setShow(true)
      todoUpdate(editId, inputData);
    }
  
    return (
      <div className="todoform-container">
        <form className="todoform">
          <input required type="text" maxLength="50" placeholder="Enter Todo Name" 
            className="input-field" 
            id="input-name" 
            value={name} 
            onChange={(e) => { setName(e.target.value); }} 
          />
          <input required type="text" maxLength="250" placeholder='Enter Todo Description' 
            className="input-field" 
            id="input-description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          {show ?
            (<button onClick={addBtnClick} className="btn btn-add">Add</button>)
            :
            (<button onClick={updateBtnClick} className="btn btn-update">update</button>)
          }
        </form>
      </div>
    )
  }