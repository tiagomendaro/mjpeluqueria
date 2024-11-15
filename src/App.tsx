import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>    
      <Router basename="/mjpeluqueria">
        <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre-nosotros" element={<AboutUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      <WhatsAppButton />
    </>
  );
}

export default App;
