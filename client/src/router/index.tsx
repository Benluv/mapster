import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Todo from '../pages/Todo';

const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Todo', href: '/todo'}
  ]

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/todo' element={<Todo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
export { links };