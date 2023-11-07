import { Link } from "react-router-dom";


const Card = ({ card }) => {
    const { id, name, brandName, type, price, photo, rating } = card;
    return (
        <div className="card card-side bg-gray-200 shadow-xl">
            <figure><img className="w-[300px] h-[400px]" src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p><span className="font-semibold">Brand Name</span>:{brandName}</p>
                <p><span className="font-semibold">Type</span>:{type}</p>
                <p><span className="font-semibold">Price</span>:{price}</p>
                <p><span className="font-semibold">Rating</span>:{rating}</p>
                <div className="card-actions ">
                    <Link to={`/productDetails/${card._id}`}><button className="btn btn-primary">Details</button></Link>
                    <button className="btn btn-primary">Update</button>
                </div>
            </div>
        </div >
    );
};

export default Card;