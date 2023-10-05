import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";
import RightNav from "../../shared/RightNav/RightNav";


const NewsDetails = () => {
    const allNews = useLoaderData()
    const { id } = useParams()

    const news = allNews?.find(news => news._id === id)
    const { image_url, details, title } = news
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-5">
                <div className="col-span-3">
                    <div className="card card-compact bg-base-100 shadow-xl">
                       
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <figure><img src={image_url} alt="Shoes" /></figure>
                            <p>{details}</p>
                            
                        </div>
                    </div>
                </div>

                <div>
                    <RightNav></RightNav>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;