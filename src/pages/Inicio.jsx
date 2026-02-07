import React from 'react';
import { User, Mail } from 'lucide-react';

const Inicio = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden border-4 border-blue-500 shadow-md">
                    <img
                        src="/foto_perfil.jpg"
                        alt="Foto Personal Victor"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    <User size={64} className="text-gray-400 hidden" />
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mb-2">Victor Lorenzo Hernandez Sosa</h1>
                <p className="text-gray-500 mb-4">Int. al Desarrollo de Aplicaciones Móviles</p>

                <div className="border-t pt-4">
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                        <Mail size={18} />
                        <span>20220693@itla.edu.do</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inicio;
