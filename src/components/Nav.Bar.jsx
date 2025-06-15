import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <div>
            <div className="bg-blue-800 w-[800px] mx-auto mt-6 px-16 py-2 rounded-t-2xl flex items-center justify-between">
                <span className="text-white text-xl font-bold">La Academia "Sergio el Bailador"</span>
                <span className="text-white text-md">Soy ese: Leandro Marcell Alanes Oña</span>
            </div>

            <nav className="bg-slate-700 h-16 w-[800px] mx-auto px-16 rounded-b-2xl flex items-center justify-center">
                <div className="flex w-full justify-between">
                    <Link to="/" className="text-lg font-bold text-white ">
                        Inicio
                    </Link>
                    <Link to="/ofertas" className="text-lg font-bold text-white ">
                        Ofertas de Cursos
                    </Link>
                </div>
            </nav>
        </div>
    );
}