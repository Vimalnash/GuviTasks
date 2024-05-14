import AuthorsAddUpdateForm from "../Components/AuthorsAddUpdateForm";
import MenuBar from "../Components/MenuBar";
import PageBody from "../Components/PageBody";
import PageHeader from "../Components/PageHeader";

// Authors Add New Data Page View
export default function AuthorsAddPage() {
    return (
        <>
            <PageHeader />
            <MenuBar />
            <PageBody>
                <AuthorsAddUpdateForm>
                    <div className="p-2 rounded-lg text-center text-xl text-orange-500 font-bold border-2 border-orange-300 shadow-inner shadow-orange-300">
                        Add Author Data
                    </div>
                </AuthorsAddUpdateForm>
            </PageBody>
        </>
    )
}