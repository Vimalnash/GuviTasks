import Fsd1 from "./FullStackdevelopment/Fsd1";
import CyberSecurity1 from "./CyberSecurity/CyberSecurity1";
import DataScience1 from "./DataScience/DataScience1";
import Career1 from "./Career/Career1";
import { useNavigate } from "react-router-dom";

// Handling Each Topic - Detail View Page
export default function TopicDetailView({topicData}) {
    const navigate = useNavigate();

    function articlecontent(topicData){
        switch (topicData.topic) {
            case "Best Full-Stack Development Project Ideas in 2024":
                return <Fsd1 />
                break;
            case "12 Real-World Data Science Examples: Power Of Data Science":
                return <DataScience1 />
                break;
            case "What is Cybersecurity? Importance and its uses & the growing challenge...":
                return <CyberSecurity1 />
                break;
            case "Zen Class Programme for carrer growth":
                return <Career1 />
                break;
            default:
                return "Article"
                break;
        }
    }
        

    return (
        <div>
            <div className="topicdetails">
                <p className="backhome" onClick={()=>navigate("/")} >
                    &larr; Go Back Home
                </p>
                <div className="page-top">
                    <div>
                        <img className="page-top-image" src={topicData.imageURL} alt="fsd-image" />
                    </div>
                    <div className="page-topic-base">{topicData.topicBase }</div>
                    <h1 className="page-topic">{topicData.topic }</h1>
                    <div className="topic-mentorname"><span className="by">By</span> {topicData.author}</div>
                    <div className="topic-extradetails">
                        <div>{topicData.createddate}</div>
                        <span>|</span>
                        <div>{topicData.readtime}</div>
                        <span>|</span>
                        <div>100views</div>
                    </div>
                </div>
                <div>
                    {articlecontent(topicData)}
                </div>

            </div>
        </div>
    )
}