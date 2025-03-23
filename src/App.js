import './App.css';
import { Route, Routes } from 'react-router-dom';

import Waitlist from './pages/Waitlist';
import Layout from './pages/Layout';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Waitlist />} >
        <Route index element={<Waitlist />} /> 
          <Route path="waitlist" element={<Waitlist />} />
        </Route>
    </Routes>
    </>
  );
}

export default App;