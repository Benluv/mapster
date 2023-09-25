import reactLogo from '../assets/react.svg';
import { NavProps } from '../router';

const Navbar: React.FC<NavProps> = ({links}) => {
    return (
      <nav className="shadow-md bg-blue-500 py-4 px-4 w-full md:w-auto rounded-lg">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="pe-6">
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <ul className="flex space-x-6 pe-16">
              {links.map((link) => (
                <li key={link.href} className=''>
                  <a href={link.href} className="text-white hover:text-gray-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div></div>
            </div>
            </div>
          </nav>
    );
}

export { Navbar }