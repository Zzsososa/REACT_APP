import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Calculator, Languages, Table, Video } from 'lucide-react';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Inicio', icon: Home },
        { path: '/sumadora', label: 'Sumadora', icon: Calculator },
        { path: '/traductor', label: 'Traductor', icon: Languages },
        { path: '/tabla', label: 'Tabla', icon: Table },
        { path: '/experiencia', label: 'Experiencia', icon: Video },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Navbar */}
            <nav className="bg-blue-600 text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex-shrink-0 font-bold text-xl">
                            Mi App Móvil
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition-colors ${location.pathname === item.path ? 'bg-blue-700' : ''
                                        }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <item.icon size={18} />
                                        {item.label}
                                    </span>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white hover:text-gray-200 focus:outline-none"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden bg-blue-600 pb-4">
                        <div className="px-2 pt-2 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 ${location.pathname === item.path ? 'bg-blue-700' : ''
                                        }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <item.icon size={18} />
                                        {item.label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Content */}
            <main className="flex-grow max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 text-center text-sm">
                <p>© 2026 Victor - Desarrollo de Aplicaciones Móviles</p>
            </footer>
        </div>
    );
};

export default Layout;
