import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import QZone from "../../assets/qZone1.png"
import QZone1 from "../../assets/qZone2.png"
import QZone2 from "../../assets/qZone3.png"

const RightNav = () => {
    return (
        <div className='space-y-10' >
            <div className='space-y-3'>
                <h1 className="text-lg font-bold">Login With</h1>
                <div>
                    <button className="btn w-full text-blue-600">
                        <FaGoogle></FaGoogle>
                        Login With Google
                    </button>
                </div>
                <div>
                    <button className="btn w-full">
                        <FaGithub></FaGithub>
                        Login With Github
                    </button>
                </div>
            </div>

            {/* Find us on */}

            <div>
                <h1 className='text-lg font-bold mb-4'>Find Us on</h1>
                <Link className='flex items-center gap-2 border p-4 rounded-t-lg'>
                    <FaFacebook></FaFacebook>
                    Facebook
                </Link>
                <Link className='flex items-center gap-2 border p-4'>
                    <FaTwitter></FaTwitter>
                    Twitter
                </Link>
                <Link className='flex items-center gap-2 border p-4 rounded-b-lg'>
                    <FaInstagram></FaInstagram>
                    Facebook
                </Link>
            </div>

            {/* Q zone */}

            <div className='text-lg font-bold mb-4 space-y-3'>
                <h1>Q-Zone</h1>
                <div>
                    <img src={QZone} alt="" />
                </div>
                <div>
                    <img src={QZone1} alt="" />
                </div>
                <div>
                    <img src={QZone2} alt="" />
                </div>
                
                
            </div>

        </div>
    );
};

export default RightNav;