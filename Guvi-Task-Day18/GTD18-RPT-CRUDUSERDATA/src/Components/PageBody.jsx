import Content from "./Content";
import SideBar from "./SideBar";

// Page Body which displays Sidebar and main content
export default function PageBody({children}) {
    return (
        <div className="pagebody">
            <SideBar />
            <Content>{children}</Content>
        </div>
    )
}