import MenuBar from "../Components/MenuBar";
import PageBody from "../Components/PageBody";
import PageHeader from "../Components/PageHeader";

// Welcome Page View - Default Landing Page
export default function LandingPage() {
    return (
        <>
            <PageHeader />
            <MenuBar />
            <PageBody> 
                <>
                <div className="flex flex-col gap-12 p-14 text-semibold rounded-lg border-2 border-orange-300 shadow-inner shadow-orange-300">
                    <h1 className="p-8 text-center text-4xl text-semibold rounded-lg border-2 border-orange-300 shadow-inner shadow-orange-300">
                        Welcome to Library Management System
                    </h1>
                    <ul className="m-auto list-disc text-2xl">
                        <li>Use Menu Bar to Navigate - Available in All Pages which Sticks to Top while Scrolling</li>
                        <li>Books
                            <ul className="list-disc list-inside">
                                <li>AddNew - To Add new Book Details</li>
                                <li>DashBoard - To View Books Available Data
                                    <ul className="list-disc list-inside list-decimal">
                                        <li>Use Search Input - To Search by Book Title</li>
                                        <li>Use Edit in details view - To Correct the Data</li>
                                        <li>Use Del in details view - To Delete the Data</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>Authors
                            <ul className="list-disc list-inside">
                                <li>AddNew - To Add new Author Details</li>
                                <li>DashBoard - To View List of Available Author Data
                                    <ul className="list-disc list-inside list-decimal">
                                        <li>Use Search Input - To Search by Author Name</li>
                                        <li>Use Edit in details view - To Correct the Data</li>
                                        <li>Use Del in details view - To Delete the Data</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                </>
            </PageBody>
        </>

    )
}