import './index.css';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import HookUseStateView from './Views/HookUseStateView';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HookUseRefView from './Views/HookUseRefView';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  
  <Router>
    <Routes>
      <Route path='/hookusestate' element={<HookUseStateView />} />
      <Route path='/hookuseref' element={<HookUseRefView />} />
    </Routes>
 </Router>
);

reportWebVitals();
