import { useId } from "react";

const danzas = [
    {
        nombre: "Morenada",
        imagen: "public/danza1.jpg",
    },
    {
        nombre: "Tobas",
        imagen: "public/danza2.jpg",
    },
    {
        nombre: "Caporales",
        imagen: "public/danza3.jpg",
    },
    {
        nombre: "Cueca",
        imagen: "public/danza4.1.jpg",
    },
    {
        nombre: "Tinku",
        imagen: "public/danza5.jpg",
    }
];

export function Home() {
    const groupName = useId();

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex flex-col items-center flex-1 py-8">
                <h1 className="text-4xl font-bold mb-4">Página de Inicio</h1>
                <section className="w-full max-w-md mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Danzas de Bolivia</h2>
                    <div className="join join-vertical bg-base-100">
                        {danzas.map((danza, idx) => (
                            <div key={danza.nombre} className="collapse collapse-arrow join-item border-base-300 border">
                                <input type="radio" name={groupName} defaultChecked={idx === 0} />
                                <div className="collapse-title font-semibold">{danza.nombre}</div>
                                <div className="collapse-content flex justify-center">
                                    <img
                                        src={danza.imagen}
                                        alt={danza.nombre}
                                        className="w-full h-48 object-cover rounded"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <footer className="bg-blue-800 text-white text-center py-4 rounded-t-xl">
                ╚ 2025 La Academia / Leandro Marcell Alanes Oña
            </footer>
        </div>
    );
}