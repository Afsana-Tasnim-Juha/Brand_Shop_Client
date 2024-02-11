import { useEffect, useState } from "react";
import SingleBrand from "./SingleBrand";



const Brand = () => {

    const [brand, setBrand] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setBrand(data))
    }, [])
    return (

        <div>
            <div>
                <h1 className="text-3xl font-bold text-center mt-20">Brands</h1>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    brand.map(singleBrand => <SingleBrand
                        key={singleBrand.id}
                        singleBrand={singleBrand}
                    ></SingleBrand>)
                }
            </div>
        </div>
    );
};

export default Brand;