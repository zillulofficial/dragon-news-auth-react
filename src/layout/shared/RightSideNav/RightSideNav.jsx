import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"
const RightSideNav = () => {
    return (
        <div className="p-4">
            <div className="mb-8">
                <h2 className="text-2xl mb-4">Login with</h2>
                <button className="btn-outline flex gap-3 items-center w-full justify-center p-3 rounded-lg mb-2">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn-outline flex gap-3 items-center w-full justify-center p-3 rounded-lg">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>
            <div className="mb-5">
                <h2 className="text-2xl mb-4">Find Us On</h2>
                <a className="flex gap-3 items-center w-full text-xl p-3 rounded-lg mb-2 border rounded-t-lg" href="">
                    <FaFacebook className="text-2xl"></FaFacebook>
                    Facebook
                </a>
                <a className="flex gap-3 items-center w-full text-xl p-3 rounded-lg mb-2 border rounded-t-lg" href="">
                    <FaTwitter className="text-2xl"></FaTwitter>
                    Twitter
                </a>
                <a className="flex gap-3 items-center w-full text-xl p-3 rounded-lg mb-2 border rounded-t-lg" href="">
                    <FaInstagram className="text-2xl"></FaInstagram>
                    Instagram
                </a>
            </div>
            <div className="bg-[#F3F3F3]">
                <h2 className="text-2xl mb-4 pt-3 pl-2">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>

        </div>
    );
};

export default RightSideNav;