import banner from '../../assets/banner.jpg'

const Banner = () => {
    const backgroundStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',

    };
    return (
        <div style={backgroundStyle} className="text-center gap-4 mt-4">
            <div className="mt-2">
                <h2 className="text-3xl font-poppins font-bold pt-20 text-white">
                    Welcome to Your Tech Store
                </h2>
                <p className='mt-2 text-white text-sm pb-20'>Welcome to Our Tech Store, where innovation meets convenience. Explore cutting-edge gadgets  <br /> and the latest tech trends that seamlessly blend style with functionality. From sleek smartphones to powerful <br /> laptops, we've curated a tech haven to elevate your digital experience.</p>

            </div>
        </div>
    );
};

export default Banner;