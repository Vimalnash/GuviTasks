
import { useNavigate } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import { AppContext } from "../Context/UserContext"
import PageBody from "../Components/PageBody";
import SearchBar from "../Components/Search";

export default function UserCardsPage() {
    return (
        <>
            <PageHeader><SearchBar /></PageHeader>
            <PageBody>
                <h3 className="content-header">Dashboard - Users Data</h3>
                <div>
                    <UserCardsRender />
                </div>
            </PageBody>
            
        </>
    )
}

// UserCard Container and Cards appending
function UserCardsRender () {
    const {userData, searchName} = AppContext();
    // console.log(searchName.length);
    // userData
    //     .map((val, idx) => {
    //         console.log(val.name.toLowerCase().substr(0,searchName.length));
    // })

    return (
        <div className="container">
            {
                searchName ?
                (
                userData.filter((val, idx) => val.name.toLowerCase().substr(0,searchName.length) === searchName.toLowerCase()) .map((val, idx) => {
                    return <UserCard key={idx} val={val} idx={idx} />
                })
                )
                :
                (        
                userData.map((val, idx) => {
                    return <UserCard key={idx} val={val} idx={idx} />
                })
                )
            }
        </div>
    )
}

// UserCard Creation with Edit and Delete Functionality
function UserCard({val, idx}) {
    const navigate = useNavigate();

    const { setShow, editId, setEditId, editidx, setEditIdx, userData, setUserData,
        setName, setUserName, setEmail, setAddressStreet, setAddressSuite, 
        setAddressCity, setAddressZipcode,
        setPhone, setWebsite, setCompanyName, setCompanycatchPhrase, setCompanyBs
    } = AppContext();

    // Delete a User Data
    function deleteuser(e, id) {
        e.preventDefault();
        const parent = e.target.parentNode.parentNode;
        // console.log("delete", id, parent);

        const confirmDelete = confirm("Confirm Delete?")
        confirmDelete ?
        (
        fetch(`https://6604ddfa2ca9478ea17ea44d.mockapi.io/users/${id}`, {method:"DELETE"})
        .then((res) => res.json())
        .then((deletedData) => {
            console.log(deletedData);
            if(deletedData) {
                parent.remove();
            }
        })
        )
        :
        (alert("Not deleted"))
    }

    // Populate the user data in the editing form
    function editdatapopulate(val) {
        // console.log(editId)
        setName(val.name)
        setUserName(val.username)
        setEmail(val.email)
        setAddressStreet(val.address.street) 
        setAddressSuite(val.address.suite)
        setAddressCity(val.address.city)
        setAddressZipcode(val.address.zipcode)
        setPhone(val.phone)
        setWebsite(val.website)
        setCompanyName(val.company.name)
        setCompanycatchPhrase(val.company.catchPhrase)
        setCompanyBs(val.company.bs)
    }

    // Edit User Button functionality
    function edituser(e, val, id, idx) {
        e.preventDefault();
        // console.log("edit", id, idx)
        // console.log(val)
        navigate("/edituser")
        setShow(false);
        setEditId(id);
        setEditIdx(idx);
        editdatapopulate(val);
    }

    return (
        <div className="card">
            <div className="card-top">
                <div><span className="cardcaption">Name :  </span> <span className="cardvalue">{val.name}</span></div>
                <div><span className="cardcaption">UserName : </span> <span className="cardvalue">{val.username}</span></div>
                <div><span className="cardcaption">Email : </span> <span className="cardvalue">{val.email}</span></div>
                <div><span className="cardcaption">Street : </span> <span className="cardvalue">{val.address.street}</span></div>
                <div><span className="cardcaption">Suite : </span> <span className="cardvalue">{val.address.suite}</span></div>
                <div><span className="cardcaption">City : </span> <span className="cardvalue">{val.address.city}</span></div>
                <div><span className="cardcaption">ZipCode : </span> <span className="cardvalue">{val.address.zipcode}</span></div>
                <div><span className="cardcaption">Phone : </span> <span className="cardvalue">{val.phone}</span></div>
                <div><span className="cardcaption">Website : </span> <span className="cardvalue">{val.website}</span></div>
                <div><span className="cardcaption">Comp.Name : </span> <span className="cardvalue">{val.company.name}</span></div>
                <div><span className="cardcaption">Catch Phrase : </span> <span className="cardvalue">{val.company.catchPhrase}</span></div>
                <div><span className="cardcaption">Comp.bs : </span> <span className="cardvalue">{val.company.bs}</span></div>
            </div>
            <div className="card-bottom">
                <button onClick={(e) => edituser(e, val, val.id, idx)} className="btn btn-edit">Edit</button>
                <button onClick={(e) => deleteuser(e, val.id)} className="btn btn-del">Delete</button>
            </div>
        </div>
    )
}