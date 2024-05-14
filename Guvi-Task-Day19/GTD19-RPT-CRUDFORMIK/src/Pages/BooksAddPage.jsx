import MenuBar from "../Components/MenuBar";
import PageBody from "../Components/PageBody";
import PageHeader from "../Components/PageHeader";
import BooksAddUpdateForm from "../Components/BooksAddUpdateForm";


// Add Book Data Page View
export default function BooksAddPage() {
    return (
        <>
            <PageHeader />
            <MenuBar />
            <PageBody>
                <BooksAddUpdateForm>
                    <div className="p-2 rounded-lg text-center text-xl text-orange-500 font-bold border-2 border-orange-300 shadow-inner shadow-orange-300">
                        Add Book Data
                    </div>
                </BooksAddUpdateForm>
            </PageBody>
        </>
    )
}

