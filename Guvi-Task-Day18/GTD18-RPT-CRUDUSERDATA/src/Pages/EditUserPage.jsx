
import PageHeader from "../Components/PageHeader";
import AddUpdateUserData from "../Components/AddUpdateUser";
import PageBody from "../Components/PageBody";

// Edit User Page Creation
export default function EditUserPage() {
    return (
        <>
            <PageHeader />
            <PageBody>
                <h3 className="content-header">Update Existing User</h3>
                <AddUpdateUserData />
            </PageBody>
        </>
    )
}