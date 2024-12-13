import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:id" element={<DynamicPage />} />
        {/* ...more routes, ensuring correct path order and specificity */}
      </Routes>
    </BrowserRouter>
  );
}

function DynamicPage() {
  let { id } = useParams();
  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>ID: {id}</p>
    </div>
  );
}

// Home, About, and Contact components...