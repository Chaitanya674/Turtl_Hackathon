import { BrowserRouter , Routes , Route } from 'react-router-dom' 
import Navbar from './Components/Navbar';
import Home from './pages/Home'
import Events from './pages/Events'
import Feed from './pages/Feed'
import Store from './pages/Store'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

      <div className='pages'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Events />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
