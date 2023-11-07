import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {

    const details = useLoaderData();
    //const { name, brandName, type, price, shortDescription, photo, rating } = details;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl w-1/2 ml-80">
            <figure className="w-1/2"><img className="w-[400px] h-[400px] p-4" src={details.photo} alt="Album" /></figure>
            <div className="card-body w-1/2">
                <h2 className="card-title"><span className="font-bold">Name:</span>{details.name}</h2>
                <h3><span className="font-bold">Brand Name</span>{details.brandName}</h3>
                <p>{details.shortDescription}</p>
                <p><span className="font-bold">Price</span>{details.price}</p>


                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;