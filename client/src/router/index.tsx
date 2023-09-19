import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import MapContainer from '../pages/MapContainer';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/map' element={<MapContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;