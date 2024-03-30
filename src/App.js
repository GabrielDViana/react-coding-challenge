import './App.css';
import CustomLayout from './containers/CustomLayout';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CustomLayout />}/>
          <Route path="search" element={<CustomLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
