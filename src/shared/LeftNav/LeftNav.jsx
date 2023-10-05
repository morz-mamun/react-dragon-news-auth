import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNav = () => {

    const [Categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className="p-4 space-y-4">
            <h1 className="text-xl font-bold">All Category</h1>
            <div className="text-center">
                {
                    Categories.map(category => <NavLink 
                        key={category.id}
                        to={`/category/${category.id}`}
                        className="block rounded-lg shadow-sm hover:bg-[#E7E7E7] p-4"
                    >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNav;