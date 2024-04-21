import NavBar from "../Components/NavBar";
import MainContents from "../Components/MainContents";
import PageHeader from "../Components/PageHeader";
import CardTopic from "../Components/CardTopic";
import { topicDataArr } from "../Components/TopicDataArr";

export default function FullStackDevelopment() {
    return (
        <div>
            <PageHeader />
            <NavBar />
            <MainContents>
                <h2 className="main-content-header">Topics - FullStackDevelopment </h2>
                <div className="main-content-body">
                {
                    topicDataArr.filter((val) => val.topicBase=="FSD").map((topicData, idx) => {
                        return <CardTopic key={idx} topicData={topicData}/>
                    })
                }
                </div>
            </MainContents>
        </div>

    )
}