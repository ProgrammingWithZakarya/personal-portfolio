import CaseStudies from './components/case-studies';
import Header from './components/header';
import HeroSection from './components/hero-section';
import Testimonials from './components/testimonials';

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
