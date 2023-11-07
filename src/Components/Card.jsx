

const Card = ({ card }) => {
    const { name, brandName, type, price, photo, rating } = card;
    return (
        <div className="card card-side bg-gray-200 shadow-xl">
            <figure><img className="w-[300px] h-[400px]" src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{brandName}</p>
                <p>{type}</p>
                <p>{price}</p>
                <p>{rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default Card;