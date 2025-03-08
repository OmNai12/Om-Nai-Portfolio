const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-sm border-b border-gray-100">
      <div className="text-xl font-bold text-gray-800">Om Nai</div>
      <div className="flex space-x-6">
        <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
        <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar; 