import NavBar from "../Components/NavBar";
import MainContents from "../Components/MainContents";
import PageHeader from "../Components/PageHeader";
import { topicDataArr } from "../Components/TopicDataArr";
import CardTopic from "../Components/CardTopic";

// Hanlding DataScience Page which shows all topics related to Datascience
export default function DataScience() {
    return (
        <div>
            <PageHeader />
            <NavBar />
            <MainContents>
                <h2 className="main-content-header">Topics - DataScience</h2>
                <div className="main-content-body">
                {
                    topicDataArr.filter((val) => val.topicBase=="DataScience").map((topicData, idx) => {
                        return <CardTopic key={idx} topicData={topicData}/>
                    })
                }
                </div>
            </MainContents>
        </div>

    )
}