import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Navbar from "../shared/Navbar/Navbar";

const News = () => {
    const {id}= useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <p>news details here</p>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;