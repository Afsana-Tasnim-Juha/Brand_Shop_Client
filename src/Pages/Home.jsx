import Brand from "../Components/Brand";




const Home = () => {
    return (
        <div>

            <Brand></Brand>
            <div className="mt-20">
                <h2 className="font-bold text-3xl text-center">Latest Releases  </h2>

                <div className="grid md:grid-cols-3 gap-4 mt-10">
                    <div className="card w-96 bg-base-100 shadow-xl image-full">

                        <div className="card-body">
                            <h2 className="card-title">Introducing QuantumLeap Processor V2.0 </h2>
                            <p>Unleash unparalleled speed and efficiency with our latest quantum processor upgrade. Experience computing like never before as we redefine the boundaries of technology.</p>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">

                        <div className="card-body">
                            <h2 className="card-title">Firmware Overhaul: TechHub OS 3.0 </h2>
                            <p>Experience a smoother, faster interface with our TechHub OS 3.0 update. We've fine-tuned the user experience and introduced exciting new features for a tech-savvy lifestyle.</p>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">

                        <div className="card-body">
                            <h2 className="card-title">SmartConnect 5G Integration </h2>
                            <p>Say hello to the future of connectivity! Our SmartConnect now seamlessly integrates with lightning-fast 5G networks, ensuring you stay connected at the speed of life.</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <h2 className="font-bold text-3xl text-center">Top-Rated Products</h2>
                <p className="text-center text-sm mt-6">Discover the best in technology with our top-rated products,  curated based on user reviews and industry experts. These are the  <br />innovations that are winning hearts and setting new standards.</p>
                <div className="grid md:grid-cols-3 gap-4 mt-10">
                    <div className="card w-96 bg-base-100 shadow-xl image-full">

                        <div className="card-body">
                            <h2 className="card-title">QuantumLeap Processor V2.0 </h2>
                            <p>Unleash the power of quantum computing with our top-rated processor. Users rave about its lightning-fast  performance and revolutionary capabilities. Upgrade your computing experience today!</p>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">

                        <div className="card-body">
                            <h2 className="card-title">SmartConnect 5G </h2>
                            <p>Rated the best in connectivity, SmartConnect 5G ensures you're always at the forefront of speed. Users love the seamless integration and reliability. Stay connected like never before.</p>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">

                        <div className="card-body">
                            <h2 className="card-title">echHub OS 3.0 Operating System </h2>
                            <p>Upgrade your digital experience with TechHub OS 3.0. Users celebrate its intuitive design and enhanced features. Join the ranks of those enjoying a seamless and efficient computing environment.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;