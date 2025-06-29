import Hero from '../components/layout/Hero/Hero'
import ShortBio from '../components/layout/ShortBio/ShortBio';
import Showcase from '../components/layout/Showcase/Showcase';
import Testimonials from '../components/layout/Testimonials/Testimonials';
import Frame from "../components/common/Frame/Frame";
import Skills from '../components/layout/Resume/Skills/Skills';
import Contact from './Contact';

function Home() {
    return (
        <div className="Home">
            <Frame className="all">
                <div>
                    <Hero />
                    <ShortBio />
                    <Showcase />
                    <Skills />
                    <Testimonials />
                    <Contact />
                </div>
            </Frame>
        </div>
    );
}

export default Home