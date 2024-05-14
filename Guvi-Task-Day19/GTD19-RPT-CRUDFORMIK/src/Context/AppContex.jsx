import { createContext, useContext, useState } from "react";

const AppCtx = createContext(null);

// App Context function handling
export default function AppContext({children}) {
    //Books States
    const [booksData, setBooksData] = useState([]);
    const [booksFormInitialData, setBooksFormInitialData] = useState({
        title : "",
        author : "",
        isbn : "",
        publication_date : ""
    });
    const [showBtnUpdate, setShowBtnUpdate] = useState(false)
    const [editId, setEditId] = useState()
    const [editIdx, setEditIdx] = useState()
    
    // Authors States
    const [authorsData, setAuthorsData] = useState();
    const [authorFormInitialData, setAuthorFormInitialData] = useState({
        author_name : "",
        author_birthdate : "",
        author_biography : ""
    });
    const [showAuthorBtnUpdate, setShowAuthorBtnUpdate] = useState(false)
    const [authorEditId, setAuthorEditId] = useState()
    const [authorEditIdx, setAuthorEditIdx] = useState()

    // Applying Search in Dashboards
    const [search, setSearch] = useState("");

    return (
        <>
            <AppCtx.Provider value={{
                booksData, setBooksData, authorsData, setAuthorsData, 
                booksFormInitialData, setBooksFormInitialData, showBtnUpdate, setShowBtnUpdate,
                editId, setEditId, editIdx, setEditIdx,
                authorFormInitialData, setAuthorFormInitialData,
                showAuthorBtnUpdate, setShowAuthorBtnUpdate,
                authorEditId, setAuthorEditId, authorEditIdx, setAuthorEditIdx,
                search, setSearch
            }}>
                {children}
            </AppCtx.Provider>
        </>
    )
}

export function UseAppContext() {
    return useContext(AppCtx);
}