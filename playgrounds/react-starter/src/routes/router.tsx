import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/Home/index';
import UseRefExample from '../pages/UseRefExample/index';
import UseStateExample from '../pages/UseStateExample/index';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/use-ref" element={<UseRefExample />} />
        <Route path="/use-state" element={<UseStateExample />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
