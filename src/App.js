import './App.css';
import Layout from './layouts';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';  // Corrected import

// Use React.lazy to lazily load components
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/" exact component={Home} />
          </Suspense>
        </Layout>
      </Router>
    </>
  );
}

export default App;
