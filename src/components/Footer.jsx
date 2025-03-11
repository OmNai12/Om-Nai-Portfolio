import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:omnayinor442003@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/om-nai-433a09209/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/OmNai12", "_blank");
  };

  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            <button
              onClick={handleGitHubClick}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </button>
            <button
              onClick={handleLinkedInClick}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </button>
            <button
              onClick={handleEmailClick}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6" />
            </button>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Om Nai. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 