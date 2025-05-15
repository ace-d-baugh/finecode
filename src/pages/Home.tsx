import Benefits from '../components/Benefits/Benefits';
import Hero from '../components/Hero/Hero'
import ShortBio from '../components/ShortBio/ShortBio';
import Showcase from '../components/Showcase/Showcase';
import Solutions from '../components/Solutions/Solutions';
import Testimonials from '../components/Testimonials/Testimonials';
import Frame from "../components/Frame/Frame";

function Home() {
    return (
        <div className="Home">
            <Frame className="all">
                <div>
                    <Hero />
                    <Solutions />
                    <Benefits />
                    <Testimonials />
                    <Showcase />
                    <ShortBio />
                </div>
            </Frame>
        </div>
    );
}

export default Home