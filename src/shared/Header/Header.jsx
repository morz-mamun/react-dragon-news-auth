import logo from "../../assets/logo.png"
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
       <div>
         <div className="text-center space-y-2">
           
           <img className="mx-auto" src={logo} alt="" />
           
           <h1 className="text-lg">Journalism Without Fear or Favour</h1>
           <p className="text-xl font-medium">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
        <div className="flex border-1 bg-slate-100 solid shadow-lg p-3 rounded-lg my-5">
            <button className="btn btn-secondary">Breaking News</button>
        <Marquee speed={100} className="text-red-500 font-bold" >
        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Marquee>

        </div>
       </div>
    );
};

export default Header;