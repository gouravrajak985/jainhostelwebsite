import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';
import { Facilities } from './pages/Facilities';
import { Photos } from './pages/Photos';
import { Contact } from './pages/Contact';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
      <Toaster />
    </Router>
  );
}

export default App;