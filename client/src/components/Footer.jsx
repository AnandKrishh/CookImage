import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
                <div className="flex flex-col justify-center items-center text-center">
                    {/* Brand Section */}
                    <div className="flex flex-col justify-center items-center text-center">
                        <div className="flex items-center gap-2 mb-2"> {/**/}
                            <img src={assets.logo_icon} alt="" className="w-6 h-6" />
                            <span className="text-lg font-medium">CookImage</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Turn your thoughts into pictures with a single promp.
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="https://github.com/AnandKrishh/CookImage" target="_blank" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition-colors">
                                <img src={assets.github_icon} alt="github" className="w-4 h-4" />
                            </a>
                            <a href="https://www.linkedin.com/in/anand-sanaka/" target="_blank" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition-colors">
                                <img src={assets.linkedin_icon} alt="linkedin" className="w-4 h-4" />
                            </a>
{/*                             <a href="https://www.instagram.com/singh04_ayush/" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition-colors">
                                <img src={assets.instagram_icon} alt="Instagram" className="w-4 h-4" />
                            </a> */}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-4 text-center border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                        © {currentYear} CookImage. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
