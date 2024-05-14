import { useNavigate } from "react-router-dom"
import { UseAppContext } from "../Context/AppContex";

// MenuBar design and functionality
export default function MenuBar({children}) {
    const navigate = useNavigate();
    const {setShowBtnUpdate, setBooksFormInitialData, setShowAuthorBtnUpdate, setAuthorFormInitialData, setSearch} = UseAppContext();
    
    return (
        <>
        <div className="mx-auto flex w-full items-center justify-center rounded-lg bg-orange-100 border-2 border-orange-300 shadow-inner shadow-orange-300 sticky top-0">
            <div className="bg-white px-4 py-2 rounded-lg">
                <button onClick={() => navigate("/")}>Home</button>
            </div>
            <div className="group relative cursor-pointer p-1">
                <div className="flex items-center justify-between space-x-5 bg-white px-4 rounded-lg">
                    <a className="menu-hover my-1 py-1 text-base font-medium text-black lg:mx-4 " onClick={()=>""}>
                        Books
                    </a>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </div>
                <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                    <a onClick={() => {navigate("/books/dashboard"); setSearch("")}} className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                        DashBoard
                    </a>
                    <a onClick={() => {
                        navigate("/books/addnew")
                        // console.log("bookaddbtnclick");
                        setShowBtnUpdate(false);
                        setBooksFormInitialData ({
                            title : "",
                            author : "",
                            isbn : "",
                            publication_date : ""
                        });
                        }} 
                        className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                        AddNew
                    </a>
                </div>
            </div>
            <div className="group relative cursor-pointer p-1">
                <div className="flex items-center justify-between space-x-5 bg-white px-4 rounded-lg">
                    <a className="menu-hover my-1 py-1 text-base font-medium text-black lg:mx-4" onClick={()=>""}>
                        Authors
                    </a>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </div>
                <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                    <a onClick={() => {navigate("/authors/dashboard");  setSearch("")}} 
                        className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                        >
                        DashBoard
                    </a>
                    <a onClick={() => {
                        navigate("/authors/addnew");
                        // console.log("authoraddbtnclick");
                        setShowAuthorBtnUpdate(false);
                        setAuthorFormInitialData ({
                            author_name : "",
                            author_birthdate : "",
                            author_biography : ""
                        });
                        }}
                        className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                        >
                        AddNew
                    </a>
                </div>
            </div>
            {children}
        </div>

        </>
    )
}   