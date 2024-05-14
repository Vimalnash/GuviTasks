import { useNavigate } from "react-router-dom";
import MenuBar from "../Components/MenuBar";
import PageBody from "../Components/PageBody";
import PageHeader from "../Components/PageHeader";
import { UseAppContext } from "../Context/AppContex";

// Books Dashboard view
export default function BooksDashboardPage() {
    const {search, setSearch} = UseAppContext();

    return (
        <>
            <PageHeader />
            <MenuBar>
                <div >
                    <input 
                        className="p-2 rounded-lg border-2 border-orange-200 hover:ring hover:ring-orange-400 focus:outline-none focus:ring focus:ring-orange-400" 
                        type="search" 
                        placeholder="Search Title"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </MenuBar>
            <PageBody>
                <BooksDetailsRender />
            </PageBody>
        </>
    )
}

// Books Details card creation view
function BooksDetailsRender() {
    const {booksData, search} = UseAppContext();
    // console.log(booksData);

    return (
        <>
            <div className="p-2 rounded-lg text-center text-xl text-orange-500 font-bold border-2 border-orange-300 shadow-inner shadow-orange-300">
                Books Dashboard
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-4 p-4 rounded-lg border-2 border-orange-300 shadow-inner shadow-orange-300">
                
                {
                    search ?
                    (
                        booksData.filter((val, idx) => val.title.toLowerCase().substr(0, search.length) == search.toLowerCase() ).map((val, idx) => {
                            return <BookDataCards key={idx} val={val} idx={idx}/>
                        })
                    )
                    :
                    (
                        booksData.map((val, idx) => {
                            return <BookDataCards key={idx} val={val} idx={idx}/>
                        })
                    )
                }
            </div>
        </>

    )
}

//Creating data cards for book- title, authorname, ISBN number, and publication date.
function BookDataCards({val, idx}) {
    const navigate = useNavigate();
    const {setBooksFormInitialData, setShowBtnUpdate, setEditId, setEditIdx} = UseAppContext();

    // Edit Button handle
    function btnEditClick() {
        // console.log("edit_Click");
        navigate("/books/edit");
        setShowBtnUpdate(true);
        setEditId(val.id);
        setEditIdx(idx);
        setBooksFormInitialData({
            title : val.title,
            author : val.author,
            isbn : val.isbn,
            publication_date : val.publication_date
        });
    };

    // Delete Button Handle
    function btnDeleteClick(e, id, idx) {
        e.preventDefault();
        const parent = e.target.parentNode.parentNode.parentNode.parentNode;
        // console.log("delete_Click", id, idx, parent)
        const delUrl = `https://6604ddfa2ca9478ea17ea44d.mockapi.io/inter/${id}`;
        const delConfirm = confirm("Confirm Delete?");
        if (delConfirm) {
            fetch(delUrl, {method : "DELETE"})
            .then((res) => res.json())
            .then((deletedData) => {
                // console.log(deletedData);
                if(deletedData) {
                    parent.remove();
                }
            })
            .catch((error) => console.log(error));
        }
    };

    return (
        <div className="break-words flex flex-col rounded-3xl bg-orange-50 shadow-xl ring-1 ring-black/10">
            <div className="p-8 sm:p-10">
                <div className="break-words mt-4 flex items-baseline text-3xl font-semibold tracking-tight text-gray-900">
                    {val.title}
                </div>
            </div>
            <div className="flex flex-1 flex-col p-2">
                <div className="flex flex-1 flex-col justify-between rounded-2xl bg-orange-100 p-6 sm:p-8">
                    <ul role="list" className="space-y-6">
                        <li className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 28 28" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5">
                                    </path>
                                </svg>
                            </div>
                            <p className="ml-3 text-base leading-6 text-gray-600"><span className="font-semibold">AuthorName : </span>{val.author}</p>
                        </li>

                        <li className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 28 28" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5">
                                    </path>
                                </svg>
                            </div>
                            <p className="ml-3 text-base leading-6 text-gray-600"><span className="font-semibold">ISBN-No : </span>{val.isbn}</p>
                        </li>
                        <li className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 28 28" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5">
                                    </path>
                                </svg>
                            </div>
                            <p className="ml-3 text-base leading-6 text-gray-600"><span className="font-semibold">PublicationDate : </span>{val.publication_date}</p>
                        </li>
                        
                    </ul>
                    <div className="flex flex-row flex-wrap gap-1 justify-center mt-8">
                        <button
                            className="inline-block rounded-lg bg-green-900 px-4 py-2 text-center text-sm font-semibold leading-5 text-white shadow-md hover:text-gray-200 hover:ring-green-600 hover:ring"
                            aria-describedby="tier-team"
                            onClick={btnEditClick}
                        >
                                Edit
                        </button>
                        <button
                            className="inline-block rounded-lg bg-rose-900 px-4 py-2 text-center text-sm font-semibold leading-5 text-white shadow-md hover:text-gray-200 hover:ring-rose-600 hover:ring"
                            aria-describedby="tier-team"
                            onClick={(e) => btnDeleteClick(e, val.id, idx)}
                        >
                                Del
                        </button>
                        {/* <a href="/login"
                            className="inline-block rounded-lg bg-gray-900 px-4 py-4 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-white hover:text-gray-900 hover:ring-gray-900 hover:ring"
                            aria-describedby="tier-team">Edit</a>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}