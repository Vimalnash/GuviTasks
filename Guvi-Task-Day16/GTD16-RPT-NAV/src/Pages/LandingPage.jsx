import NavBar from "../Components/NavBar";
import MainContents from "../Components/MainContents";
import PageHeader from "../Components/PageHeader";
import { topicDataArr } from "../Components/TopicDataArr";
import CardTopic from "../Components/CardTopic";

// Hanlding Landing Page which shows all topics
export default function LandingPage() {
    return (
        <div>
            <PageHeader />
            <NavBar />
            <MainContents>
                <h2 className="main-content-header">All Topics Mixed</h2>
                <div className="main-content-body">
                {
                    topicDataArr.filter((val) => val).map((topicData, idx) => {
                        return <CardTopic key={idx} topicData={topicData}/>
                    })
                }
                </div>
            </MainContents>
        </div>

    )
}