

const SingleBrand = ({ singleBrand }) => {

    const { id, brand, image } = singleBrand
    return (
        <div >
            <div className="card  mt-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="font-semibold text-lg text-center">{brand}</h2>

                </div>
                <figure><img className="w-[300px] h-[300px]" src={image} alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default SingleBrand;