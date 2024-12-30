import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/Home/index';
import UseRefExample from '../pages/UseRefExample/index';
import UseStateExample from '../pages/UseStateExample/index';
import UseReducerExample from '../pages/UseReducerExample/index';
import UseEffectExample from '../pages/UseEffectExample';
import UseMemoExample from '../pages/UseMemoExample';
import UseCallbackExample from '../pages/UseCallbackExample';
import CustomHooks from '../pages/CustomHooks';
import ReactQuery from '../pages/ReactQuery';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/use-ref" element={<UseRefExample />} />
        <Route path="/use-state" element={<UseStateExample />} />
        <Route path="/use-reducer" element={<UseReducerExample />} />
        <Route path="/use-effect" element={<UseEffectExample />} />
        <Route path="/use-memo" element={<UseMemoExample />} />
        <Route path="/use-callback" element={<UseCallbackExample />} />
        <Route path="/custom-hooks" element={<CustomHooks />} />
        <Route path="/react-query" element={<ReactQuery />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
