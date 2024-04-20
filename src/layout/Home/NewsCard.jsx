import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";

const NewsCard = ({ news }) => {
    return (
        <div className='border mb-8 rounded-t-md'>
            <div className="bg-[#F3F3F3] p-5 flex items-center justify-between">
                <div className='flex  items-center gap-4'>
                    <div>
                        <img className="w-8 rounded-full" src={news.author.img} alt="" />
                    </div>
                    <div>
                        <h2 className='text-black font-semibold'>{news.author.name}</h2>
                        <p>{news.author.published_date}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <CiBookmark className='text-2xl'></CiBookmark>
                    <IoShareSocialOutline className='text-2xl'></IoShareSocialOutline>
                </div>
            </div>
            <div className='p-5'>
                <p className='mb-5'>{news.title}</p>
                <img src={news.image_url} alt="" />
                {
                    news.details.length > 200 ? <p>{news.details.slice(0, 200)} <Link className='text-[#FF8C47]' to="/readMore">Read More</Link></p> : <p>{news.details}</p>
                }
            </div>
            <div>
                <div className='flex gap-2'>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default NewsCard;
NewsCard.propTypes = {
    news: PropTypes.object
}