import { useState } from "react";
import morenadaImg from "../assets/danza1.jpg";
import tobasImg from "../assets/danza2.jpg";
import caporalesImg from "../assets/danza3.jpg";

const cursos = [
    {
        nombre: "Morenada",
        imagen: morenadaImg,
        descripcion: "Aprende la tradicional Morenada, danza emblemática del altiplano paceño.",
        precio: "Bs. 120"
    },
    {
        nombre: "Tobas",
        imagen: tobasImg,
        descripcion: "Descubre la energía de la danza Tobas, originaria de la Amazonía boliviana.",
        precio: "Bs. 120"
    },
    {
        nombre: "Caporales",
        imagen: caporalesImg,
        descripcion: "Baila Caporales, una de las danzas más populares en festivales bolivianos.",
        precio: "Bs. 110"
    }
];

export function OfertasCursos() {
    const [modal, setModal] = useState({ open: false, precio: "", nombre: "" });

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex flex-col items-center justify-center flex-1">
                <h1 className="text-4xl font-bold mb-8">Ofertas de Cursos</h1>
                <div className="flex flex-col md:flex-row gap-8">
                    {cursos.map((curso) => (
                        <div key={curso.nombre} className="bg-blue-500 rounded-lg shadow-lg flex flex-col md:flex-row items-center w-80 md:w-96">
                            <img
                                src={curso.imagen}
                                alt={curso.nombre}
                                className="w-full md:w-40 h-40 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                            />
                            <div className="p-4 flex flex-col flex-1">
                                <h2 className="text-xl font-bold mb-2">{curso.nombre}</h2>
                                <p className="mb-4">{curso.descripcion}</p>
                                <button
                                    className="bg-blue-700 text-white px-4 py-2 rounded mt-auto"
                                    onClick={() => setModal({ open: true, precio: curso.precio, nombre: curso.nombre })}
                                >
                                    Ver precio
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                {modal.open && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                        <div className="bg-blue-400 rounded-lg p-8 shadow-lg text-center">
                            <h3 className="text-2xl font-bold mb-4">{modal.nombre}</h3>
                            <p className="text-lg mb-6">Precio del curso: <span className="font-semibold">{modal.precio}</span></p>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded "
                                onClick={() => setModal({ open: false, precio: "", nombre: "" })}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                )}
            </main>
            <footer className="bg-blue-800 text-white text-center py-4 rounded-t-xl mt-8">
                ╚ 2025 La Academia / Leandro Marcell Alanes Oña
            </footer>
        </div>
    );
}