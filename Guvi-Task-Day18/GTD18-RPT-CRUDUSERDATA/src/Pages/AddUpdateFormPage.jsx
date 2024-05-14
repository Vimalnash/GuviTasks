
import PageHeader from "../Components/PageHeader";
import AddUpdateUserData from "../Components/AddUpdateUser";
import PageBody from "../Components/PageBody";

// Add User Form Page
export default function AddUpdateFormPage () {
 
    return (
        <>
            <PageHeader />
            <PageBody>
                <h3 className="content-header">New User Creation</h3>
                <div>
                    <AddUpdateUserData />
                </div>
            </PageBody>
        </>
    )
}