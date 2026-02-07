import React from 'react';

const Experiencia = () => {
    // ID de un video tutorial de React como placeholder (puedes cambiarlo luego)
    const videoId = "SqcY0GlETPk";

    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Experiencia Personal</h2>

            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-xl mb-6">
                <iframe
                    className="w-full h-[400px]"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="prose max-w-none text-gray-700">
                <h3 className="text-xl font-semibold mb-2">Reflexión sobre el Proyecto</h3>
                <p>
                    En este video detallo mi proceso de aprendizaje con React, desde la instalación inicial hasta la implementación de algoritmos complejos para la conversión de números a letras.
                </p>
                <p className="mt-4 font-bold text-blue-800">
                    Estudiante: Victor Lorenzo Hernandez Sosa
                </p>
                <p className="text-sm text-gray-500 italic">
                    Materia: Introducción al Desarrollo de Aplicaciones Móviles - Facilitador: Amadís Suárez Genao.
                </p>
            </div>
        </div>
    );
};

export default Experiencia;
