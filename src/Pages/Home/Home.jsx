import Header from "../../shared/Header/Header";
import LeftNav from "../../shared/LeftNav/LeftNav";
import MiddleNav from "../../shared/MiddleNav/MiddleNav";
import Navbar from "../../shared/Navbar/Navbar";
import RightNav from "../../shared/RightNav/RightNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-6">
                <div>
                    <LeftNav></LeftNav>
                </div>
                <div className="col-span-2">
                    <MiddleNav></MiddleNav>
                </div>
                <div>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;