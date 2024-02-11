

import aa1 from '../assets/aa1.jpg';
import aa2 from '../assets/aa2.jpg';
import aa3 from '../assets/aa3.jpg';



const BrandShowcase = () => {



    return (
        <div>

            <div className="carousel w-full h-[400px] ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={aa1} className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={aa2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={aa3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
            <h2 className="text-2xl font-bold mb-4 text-center m-y-24">Featured Products</h2>

            <div className='grid md:grid-cols-2 gap-4 mt-20 ' >



            </div>

        </div>
    );
};

export default BrandShowcase;