import HeroImage from '../assets/hero.jpg';
import { HeroDashboard } from '../components/HeroDashboard'

export const Hero = () => {
    return (
        <section
            className="min-h-screen w-full flex justify-center items-center"
            style={{
                backgroundImage: `url(${HeroImage.src})`,
                backgroundSize: "cover",       // makes image cover the entire section
                backgroundPosition: "center",  // centers the image
                backgroundRepeat: "no-repeat", // prevents tiling
            }}
        >
            {/* Wrapper --- HeroDashboard */}
            <div className="w-full max-w-md mx-4">
                <HeroDashboard />
            </div>
        </section>
    )
}