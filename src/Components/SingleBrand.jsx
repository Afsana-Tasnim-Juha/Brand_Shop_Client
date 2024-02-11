import { Link } from "react-router-dom";


const SingleBrand = ({ singleBrand }) => {

    const { _id, brand_name, image } = singleBrand;
    return (
        <div >
            <Link to={`/brandShowcase/${_id}`}>
                <div className="card  mt-10 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="font-semibold text-lg text-center">{brand_name}</h2>

                    </div>
                    <figure><img className="w-[300px] h-[300px]" src={image} alt="Shoes" /></figure>
                </div>
            </Link>
        </div>
    );
};

export default SingleBrand;