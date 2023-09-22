import { Link } from "react-router-dom";

const Button: React.FC = () => {
    return (
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Click me
        </button>
    );
}

const NavBar = () => {
    return (
        <nav>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <Button />
        </ul>
        </nav>
    );
}

export default NavBar;