import './App.css';
import CustomLayout from './containers/CustomLayout';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CustomLink from './containers/CustomLink';
import FeedContainer from './containers/FeedContainer';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FeedContainer />}/>
          <Route path="search" element={<CustomLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
