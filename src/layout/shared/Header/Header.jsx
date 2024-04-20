import moment from "moment";
import icon from "../../../assets/logo.png"
const Header = () => {
    return (
        <div className="text-center mb-12 mt-8">
            <img className="mx-auto mb-4" src={icon} alt="" />
            <p className=" mb-4">Journalism Without Fear or Favour</p>
            <p className="text-xl mb-4">{moment().format("dddd, MMMM D YYYY")}</p>
        </div>
    );
};

export default Header;