import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <hr className="border-gray-300 my-8" />
      <footer className="py-12 bg-gray-800 text-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4 mb-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300 p-2">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white rounded-full bg-blue-400 hover:bg-blue-500 transition duration-300 p-2">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white rounded-full bg-gradient-to-br from-pink-600 to-red-600 hover:bg-gradient-to-br hover:from-pink-700 hover:to-red-700 transition duration-300 p-2">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white rounded-full bg-blue-800 hover:bg-blue-900 transition duration-300 p-2">
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <div className="border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Made with ❤️ by Saksham</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
