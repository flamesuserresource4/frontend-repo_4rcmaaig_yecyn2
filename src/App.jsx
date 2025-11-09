import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisionMission from './components/VisionMission';
import Goals from './components/Goals';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <VisionMission />
        <Goals />
      </main>
      <Footer />
    </div>
  );
}

export default App;
