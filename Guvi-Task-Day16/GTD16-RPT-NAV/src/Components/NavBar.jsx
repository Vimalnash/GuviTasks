import {useNavigate} from 'react-router-dom';

// Navigation bar which triggers routes in app.jsx
export default function NavBar() {
    const navigate = useNavigate();
    return (
        <div className="nav-bar">
            <div><button onClick={() => {navigate("/"); this.focus()}}><span>ALL</span></button></div>
            <div><button onClick={() => navigate("/fullstackdevelopment")}>FULL STACK DEVELOPMENT</button></div>
            <div><button onClick={() => navigate("/datascience")}>DATA SCIENCE</button></div>
            <div><button onClick={() => navigate("/cybersecurity")}>CYBER SECURITY</button></div>
            <div><button onClick={() => navigate("/career")}>CAREER</button></div>
        </div>
    )
}