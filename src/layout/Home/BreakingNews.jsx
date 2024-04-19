import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="mb-6 flex items-center">
            <button className="btn btn-secondary text-white"> Breaking News</button>
            <Link>
                <Marquee speed={100} pauseOnHover={true}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </Link>
        </div>
    );
};

export default BreakingNews;