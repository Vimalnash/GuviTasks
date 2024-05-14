import {useNavigate} from 'react-router-dom';
import { AppContext } from '../Context/UserContext';

// Side Bar Creation and Hanling buttons
export default function SideBar() {
    const navigate = useNavigate();
    const {setShow, setName,setUserName,setEmail,
    setAddressStreet,setAddressSuite,setAddressCity,setAddressZipcode,
    setPhone,setWebsite,setCompanyName,setCompanycatchPhrase,
    setCompanyBs} = AppContext();
    
    // Clear AddForm when Navigate button clicked
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
    return (
        <div className="sidebar">
            <button onClick={() => navigate("/")} className="btn">Dashboard</button>
            <button onClick={() => {navigate("/adduser"); setShow(true); clearform()}} className="btn">AddUser</button>
        </div>
    )
}