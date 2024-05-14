
import { UseAppContext } from "../Context/AppContex"

export default function SearchBox() {
    const {search, setSearch} = UseAppContext();

    return (
        <>
            <div >
                <input 
                    className="p-2 rounded-lg hover:ring hover:ring-orange-500" 
                    type="search" 
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </>
    )
}