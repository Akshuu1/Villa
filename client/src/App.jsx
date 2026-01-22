import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import Villas from './pages/Villas';
import About from './pages/About';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations';
import Legal from './pages/Legal';

const NotFound = () => <div className="pt-32 px-4 text-center"><h1 className="text-4xl font-serif">404</h1><p>Page Not Found</p></div>;

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/villas" element={<Villas />} />
            <Route path="/villas/:id" element={<Villas />} /> {/* Reusing Villas list for now or separate Detail page if needed */}
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/terms" element={<Legal title="Terms & Conditions" />} />
            <Route path="/privacy" element={<Legal title="Privacy Policy" />} />
            <Route path="/cancellation" element={<Legal title="Cancellation Policy" />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
