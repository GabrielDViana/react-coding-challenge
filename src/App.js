import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import FeedContainer from './containers/FeedContainer';
import AuthorGalleryContainer from './containers/AuthorGalleryContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FeedContainer />}/>
          <Route path="/gallery" element={<AuthorGalleryContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
