import Background from './Background';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full">
      <Background />
      {/* <Navbar /> */}
      <main className="relative">
        {children}
      </main>
    </div>
  );
};

export default Layout; 