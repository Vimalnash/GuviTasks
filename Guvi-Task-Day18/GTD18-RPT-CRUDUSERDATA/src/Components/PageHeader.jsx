

// Page Header which displays in all pages
export default function PageHeader({children}) {
return(
    <>
        <div className="pageheader">
            <h2>User Data Management</h2>
            {children}
        </div>
    </>
    )
}