import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/Home/index';
import UseRefExample from '../pages/UseRefExample/index';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/use-ref" element={<UseRefExample />} />
        {/* // <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
