import { useNavigate } from "react-router-dom"

// Creating Topic based Cards
export default function CardTopic({topicData}) {
    const navigate = useNavigate();
    return (
        <div>
            <div className="card" onClick={() => navigate(`${topicData.navigate}`)}>
                <div className="card-top">
                    <img className="card-image" src={topicData.imageURL} alt="fsd-image" />
                </div>
                <div className="card-middle">
                    <h3 className="card-topic">{topicData.topic }</h3>
                    <div className="card-mentorname"><span className="by">By</span> {topicData.author}</div>
                </div>
                <div className="card-bottom">
                    <div>{topicData.createddate}</div>
                    <div>{topicData.readtime}</div>
                </div>
            </div>
        </div>
    )
}


        // [
        //     {
        //         navigate : "/fullstackdevelopment/fsd1",
        //         imageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6KSNGt_JbxCKKa9mMsgHSTlvLK9wm3dzt_KtrZDTLw&s",
        //         topic : "Best Full-Stack Development Project Ideas in 2024 ",
        //         author : "Mentor 1",
        //         createddate : "21 Mar, 2024",
        //         readtime : "5 Min Read",
        //         topicBase : "FSD",
        //         id: 1
        //     },
        //     {
        //         navigate : "/fullstackdevelopment/fsd1",
        //         imageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6KSNGt_JbxCKKa9mMsgHSTlvLK9wm3dzt_KtrZDTLw&s",
        //         topic : "Best Full-Stack Development Project Ideas in 2024 ",
        //         author : "Mentor 1",
        //         createddate : "21 Mar, 2024",
        //         readtime : "5 Min Read",
        //         topicBase : "FSD",
        //         id: 2
        //     },
        //     {
        //         navigate : "/fullstackdevelopment/fsd1",
        //         imageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6KSNGt_JbxCKKa9mMsgHSTlvLK9wm3dzt_KtrZDTLw&s",
        //         topic : "Best Full-Stack Development Project Ideas in 2024 ",
        //         author : "Mentor 1",
        //         createddate : "21 Mar, 2024",
        //         readtime : "5 Min Read",
        //         topicBase : "FSD",
        //         id: 3
        //     }
        // ]