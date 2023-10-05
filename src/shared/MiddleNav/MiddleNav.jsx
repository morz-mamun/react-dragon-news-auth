import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard/NewsCard";


const MiddleNav = () => {

    const allNews = useLoaderData()
    console.log(allNews);
    return (
        <div>
           
            {
              allNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)  
            }
        </div>
    );
};

export default MiddleNav;