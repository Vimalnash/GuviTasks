import { AppContext } from "../Context/UserContext"

// Search Input Field Creation
export default function SearchBar() {
    const {searchName, setSearchName} = AppContext();

    return (
        <div className="searchbar">
            <div>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder="NameSearch"/>
            </div>
        </div>
    )
}