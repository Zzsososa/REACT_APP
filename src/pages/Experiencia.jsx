import React from 'react';

const Experiencia = () => {
    // Replace this ID with your actual YouTube video ID
    const videoId = "dQw4w9WgXcQ";

    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Experiencia Personal</h1>

            <div className="aspect-w-16 aspect-h-9 bg-gray-900 rounded-lg overflow-hidden shadow-xl mb-6">
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
                <h3 className="text-xl font-semibold mb-2">Reflexión sobre la tarea</h3>
                <p>
                    En este video explico mi experiencia desarrollando esta aplicación con React.
                    Hablo sobre los desafíos que enfrenté al implementar la lógica del traductor de números
                    y cómo utilicé componentes funcionales y hooks como useState.
                </p>
                <p className="mt-4 text-sm text-gray-500 italic">
                    (Nota: Asegúrate de reemplazar el ID del video en el código con tu propio video).
                </p>
            </div>
        </div>
    );
};

export default Experiencia;
