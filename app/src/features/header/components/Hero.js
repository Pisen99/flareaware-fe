import HeroImage from '../assets/hero.jpg';

export const Hero = () => {
    return (
        <header
            className="min-h-screen w-full flex justify-center items-center"
            style={{
                backgroundImage: `url(${HeroImage.src})`,
                backgroundSize: "cover",       // makes image cover the entire section
                backgroundPosition: "center",  // centers the image
                backgroundRepeat: "no-repeat", // prevents tiling
            }}
        >
        </header>
    )
}