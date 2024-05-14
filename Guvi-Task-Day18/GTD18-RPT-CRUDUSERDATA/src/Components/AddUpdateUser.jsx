import { useState } from "react"
import { AppContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

// Handling Add and Update User
export default function AddUpdateUserData () {
    const navigate = useNavigate();

    const { userData, setUserData, show, setShow, editId, editidx,
            name, setName, userName, setUserName, email, setEmail,
            addressStreet, setAddressStreet, addressSuite, setAddressSuite, 
            addressCity, setAddressCity, addressZipcode, setAddressZipcode,
            phone, setPhone, website, setWebsite , companyname, setCompanyName,
            companycatchPhrase, setCompanycatchPhrase, companybs, setCompanyBs
        } = AppContext();

    const [successMessage, setSuccessMessage] = useState("")
    const [failureMessage, setFailureMessage] = useState("")
    
    // New UserData Object Creation
    const inputUserData = {
        name,
        username : userName,
        email,
        address : {
            street	: addressStreet,
            suite	: addressSuite,
            city	: addressCity,
            zipcode	: addressZipcode
        },
        phone,
        website,
        company : {
            name : companyname,
            catchPhrase : companycatchPhrase,
            bs : companybs
        }
    }

    // Clear data in input fields after adding or updating
    function clearform() {
        setName(""),
        setUserName(""),
        setEmail(""),
        setAddressStreet(""),
        setAddressSuite(""), 
        setAddressCity(""),
        setAddressZipcode(""),
        setPhone(""),
        setWebsite(""),
        setCompanyName(""),
        setCompanycatchPhrase(""),
        setCompanyBs("")
    }
    
    // Add New UserData upload Functionality
    function AddData(e, inputUserData) {
        e.preventDefault();
        if ( name !== "" &&
            userName !== "" &&
            email !== "" &&
            addressStreet !== "" &&
            addressCity !== "" &&
            addressZipcode !== "" &&
            phone !== "") 
        {
            setSuccessMessage("Loading Please Wait...");
            fetch("https://6604ddfa2ca9478ea17ea44d.mockapi.io/users", {
                method : "POST",
                body : JSON.stringify(inputUserData),
                headers: {
                    "content-type" : "application/json"
                }
            })
            .then((res) => res.json())
            .then((addedData) => {
                // console.log(addedData);
                const newuserdata = [...userData, addedData]
                setUserData(newuserdata)
                setSuccessMessage("New UserData Added Successfully")
                clearform();
            })
            .catch((error)=> {
                console.log(error);
                setFailureMessage("Failed to Save");
            })
        } else {
            alert("Enter Required Fields marked by ' * '"); 
        }
    }

    // Update Existing UserData upload Functionality
    function UpdateData(e, editId, inputUserData) {
        e.preventDefault();
        setSuccessMessage("Loading Please Wait...");
        fetch(`https://6604ddfa2ca9478ea17ea44d.mockapi.io/users/${editId}`, {
            method : "PUT",
            body : JSON.stringify(inputUserData),
            headers : {
                "content-type" : "application/json"
            }
        })
        .then((res) => res.json())
        .then((editedData) => {
            // console.log(editedData);
            if(editedData) {
                setShow(false);
                userData[editidx] = editedData;
                setSuccessMessage("UserData Updated Successfully");
                clearform();
                navigate("/")
            }
        })
        .catch((error)=> {
            console.log(error);
            setFailureMessage("Failed to Save");
        }
        )
    }

    return (
        <div className="userform">
            <form className="addupdateuserform">
            <div>
                <label><span>*</span>Name : </label>
                <input required type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            </div>
            <div>
                <label><span>*</span>UserName : </label>
                <input required type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="userName" />
            </div>
            <div>
                <label><span>*</span>Email : </label>
                <input required type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
            </div>
            <div>
                <label><span>*</span>Street : </label>
                <input required type="text" value={addressStreet} onChange={(e) => setAddressStreet(e.target.value)} placeholder="addressStreet" />
            </div>
            <div>
                <label>Suite : </label>
                <input required  type="text" value={addressSuite} onChange={(e) => setAddressSuite(e.target.value)} placeholder="addressSuite" />
            </div>
            <div>
                <label><span>*</span>City : </label>
                <input required type="text" value={addressCity} onChange={(e) => setAddressCity(e.target.value)} placeholder="addressCity" />
            </div>
            <div>
                <label><span>*</span>Zipcode : </label>
                <input required type="text" value={addressZipcode} onChange={(e) => setAddressZipcode(e.target.value)} placeholder="addressZipcode" />
            </div>
            <div>
                <label><span>*</span>Phone : </label>
                <input required type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="phone" />
            </div>
            <div>
                <label>Website : </label>
                <input required type="text" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="website" />
            </div>
            <div>
                <label>Company Name : </label>
                <input required type="text" value={companyname} onChange={(e) => setCompanyName(e.target.value)} placeholder="companyname" />
            </div>
            <div>
                <label>Company CatchPhrae : </label>
                <input required type="text" value={companycatchPhrase} onChange={(e) => setCompanycatchPhrase(e.target.value)} placeholder="companycatchPhrase" />
            </div>
            <div>
                <label>Company BS : </label>
                <input required type="text" value={companybs} onChange={(e) => setCompanyBs(e.target.value)} placeholder="companybs" />
            </div>

            {show ?
            (<button className="btn btn-add" type="submit" onClick={(e) => AddData(e, inputUserData)}>Add</button>)
            :
            (<button className="btn btn-update" type="submit" onClick={(e) => UpdateData(e, editId,inputUserData)}>Update</button>)
            }
            </form>
            {
                successMessage ?
                (<div className="message-success">{successMessage}</div>) : ("")
            }
            {
                failureMessage ?
                (<div>{failureMessage}</div>) : ("")
            }
        </div>
    )
}