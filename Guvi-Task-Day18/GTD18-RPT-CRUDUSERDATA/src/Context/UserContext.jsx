import { createContext, useContext, useState } from "react";

const UserCtx = createContext(null);

// App Context creation
export default function UserContext({children}) {
    const [userData, setUserData] = useState([]);
    const [show, setShow] = useState(true);
    const [editId, setEditId] = useState(0);
    const [editidx, setEditIdx] = useState(0);
    const [searchName, setSearchName] = useState("");
    
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [addressStreet, setAddressStreet] = useState("");
    const [addressSuite, setAddressSuite] = useState("");
    const [addressCity, setAddressCity] = useState("");
    const [addressZipcode, setAddressZipcode] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [companyname, setCompanyName] = useState("");
    const [companycatchPhrase, setCompanycatchPhrase] = useState("");
    const [companybs, setCompanyBs] = useState("");
    return (
        <UserCtx.Provider value={{
            userData, setUserData, show, setShow, editId, setEditId, editidx, setEditIdx,
            searchName, setSearchName,
            name, setName, userName, setUserName, email, setEmail,
            addressStreet, setAddressStreet, addressSuite, setAddressSuite, 
            addressCity, setAddressCity, addressZipcode, setAddressZipcode,
            phone, setPhone, website, setWebsite , companyname, setCompanyName,
            companycatchPhrase, setCompanycatchPhrase, companybs, setCompanyBs
            }}>
            {children}
        </UserCtx.Provider>
    )
}

export function AppContext() {
    return useContext(UserCtx)
}