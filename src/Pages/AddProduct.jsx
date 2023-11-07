import Swal from 'sweetalert2'
import NavBar from '../Components/Shared/NavBar';
import Banner from './../Components/Shared/Banner';

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;

        const rating = form.rating.value;
        const photo = form.photo.value;

        const newProduct = { name, brandName, type, price, shortDescription, photo, rating }

        console.log(newProduct);

        //send data to the server

        fetch('http://localhost:5000/product', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "success!!",
                        text: "Product added successfully",
                        confirmButtonText: "Cool",
                    });
                }
            })


    }
    return (

        <div>

            <div className="bg-red-50">
                <div className=" p-24">

                    <h2 className="text-[#374151] text-3xl text-center mb-8 font-extrabold">Add New Product</h2>
                    <form onSubmit={handleAddProduct} className="mt-4">

                        <div className=" md:flex gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label font-bold ">
                                    <span className="label-text ">Name</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label font-bold">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/*Supplier and Taste*/}
                        <div className="flex gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label font-bold">
                                    <span className="label-text">Type</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="type" placeholder="Type" className=" input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label font-bold">
                                    <span className="label-text">Price </span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="price" placeholder="Price " className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/*Category and Details*/}
                        <div className="flex gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label font-bold">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="shortDescription" placeholder="Short Description" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label font-bold">
                                    <span className="label-text">Rating</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                                </label>
                            </div>

                        </div>
                        <div className="form-control md:w-full ">
                            <label className="label font-bold">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="photo" placeholder="Photo url" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <input type="submit" value="Add Product" className="btn btn-block mt-4 bg-sky-950 text-white hover:text-black" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;