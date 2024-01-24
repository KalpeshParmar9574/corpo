import './App.css';
import Layout from './layouts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';  // Corrected import

// Use React.lazy to lazily load components
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
        </Routes>
      </Suspense>
    </Router>
  </>
  );
}

export default App;
