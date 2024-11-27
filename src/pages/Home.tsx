import Benefits from '../components/Benefits/Benefits';
import Hero from '../components/Hero/Hero'
import ShortBio from '../components/ShortBio/ShortBio';
import Showcase from '../components/Showcase/Showcase';
import Solutions from '../components/Solutions/Solutions';
import Testimonials from '../components/Testimonials/Testimonials';

function Home() {
    return (
        <div>
            <Hero />
            <Solutions />
            <Benefits />
            <Testimonials />
            <Showcase />
            <ShortBio />
        </div>
    );
}

export default Home