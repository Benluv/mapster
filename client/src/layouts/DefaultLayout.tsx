import { Navbar, Footer } from '../components';
import { links } from '../router';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar links={links}/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;