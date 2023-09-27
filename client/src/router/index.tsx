import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Todo from '../pages/Todo';
import GraphQL from '../pages/GraphQL';

interface NavProps {
    links: Array<{
        label: string
        href: string
    }>
}

const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Todo', href: '/todo'},
    { label: 'GraphQL', href: '/graphql'},
  ]

const todoSubLinks = [
    { label: 'Todo', href: '/todo'},
    { label: 'Favorites', href: '/favorites'}
]

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/todo' element={<Todo />} />
                <Route path='/graphql' element={<GraphQL />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
export { links, todoSubLinks }
export type { NavProps }