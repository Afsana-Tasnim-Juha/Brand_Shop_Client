import { useEffect, useState } from "react";
import SingleBrand from "./SingleBrand";
import { Link } from "react-router-dom";


const Brand = () => {

    const [brand, setBrand] = useState([]);

    useEffect(() => {
        fetch('BrandName.json')
            .then(res => res.json())
            .then(data => setBrand(data))
    }, [])
    return (

        <div>
            <div>
                <h1 className="text-3xl text-center mt-20">Brands</h1>
            </div>
            <Link to="/brandShowcase" className="grid md:grid-cols-2 gap-4">
                {
                    brand.map(singleBrand => <SingleBrand
                        key={singleBrand.id}
                        singleBrand={singleBrand}
                    ></SingleBrand>)
                }
            </Link>
        </div>
    );
};

export default Brand;