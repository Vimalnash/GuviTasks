import NavBar from "../Components/NavBar";
import MainContents from "../Components/MainContents";
import PageHeader from "../Components/PageHeader";
import { topicDataArr } from "../Components/TopicDataArr";
import CardTopic from "../Components/CardTopic";

// Hanlding CyberSecurity Page which shows all topics related to CyberSecurity
export default function CyberSecurity() {
    return (
        <div>
            <PageHeader />
            <NavBar />
            <MainContents>
                <h2 className="main-content-header">Topics - CyberSecurity</h2>
                <div className="main-content-body">
                {
                    topicDataArr.filter((val) => val.topicBase=="CyberSecurity").map((topicData, idx) => {
                        return <CardTopic key={idx} topicData={topicData}/>
                    })
                }
                </div>
            </MainContents>
        </div>

    )
}