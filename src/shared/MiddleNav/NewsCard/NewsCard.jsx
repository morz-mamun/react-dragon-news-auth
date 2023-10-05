import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
    console.log(news);

    const {image_url, details, title, _id} = news
    return (
        <div className="card card-compact  bg-base-100 shadow-xl mb-10">
        
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <figure><img src={image_url} alt="Shoes" /></figure>
         {
            details.length > 200 ? <p>{details.slice(0, 200)} <Link to = {`/news/${_id}`} className="text-blue-500 font-bold"> See More...</Link></p> 
            : <p>{details}</p>
         }
          
        </div>
      </div>
    );
};

export default NewsCard;