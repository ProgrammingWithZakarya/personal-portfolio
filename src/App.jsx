import CaseStudies from './components/Case-Studies';
import Header from './components/header';
import HeroSection from './components/hero-section';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="page">
      <Header />
      <HeroSection />
      <CaseStudies />
      <Testimonials />
    </div>
  );
}

export default App;
