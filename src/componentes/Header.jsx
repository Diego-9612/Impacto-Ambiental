import { MdWifiProtectedSetup } from "react-icons/md";
function Header() {

    return (
        <header className="flex flex-col mx-10">
            <section className='flex items-center justify-between'>
                <figure className="flex items-center">
                <img src="/logo2.png" alt="logo impacto ambiental" className='w-18' />
                <h2 className="text-2xl font-sans font-extrabold text-dark-green-900 uppercase">EcoMetric</h2>
                </figure>
                <nav className="w-1/3">
                    <ul className="flex justify-between text-jungle-green-700 font-sans text-base">
                        <li className="py-2 px-4 rounded-xl duration-400 hover:bg-jungle-green-700 hover:text-mint-green-100">
                            <a>Inicio</a>
                        </li>
                        <li className="py-2 px-4 rounded-xl duration-400 hover:bg-jungle-green-700 hover:text-mint-green-100">
                            <a>Instrucciones</a>
                        </li>
                        <li className="py-2 px-4 rounded-xl duration-400 hover:bg-jungle-green-700 hover:text-mint-green-100">
                            <a>Calcular</a>
                        </li>
                    </ul>
                </nav>
            </section>
            <section className='flex flex-col items-center justify-center p-20 gap-5'>
                <h1 className='text-5xl font-sans font-extrabold text-dark-green-900 text-center flex gap-3'> <MdWifiProtectedSetup/> Bienvenido a Ecometric</h1>
                <p className='text-xl font-sans font-light text-dark-green-900 text-center w-2/3'>Ecometric es una plataforma integral diseñada para evaluar el impacto ambiental de una amplia variedad de proyectos, desde construcción e infraestructura hasta desarrollo agrícola e industrial.</p>  
                <p className='text-xl font-sans font-light text-dark-green-900 text-center w-2/3'>Su objetivo es proporcionar a ingenieros, arquitectos, agricultores y otros profesionales las herramientas necesarias para medir y analizar la huella ecológica de sus proyectos, facilitando la toma de decisiones.</p>  
                <img src="logo2.png" className="w-1/4" alt="" />    
            </section>
        </header>

    );

}

export { Header };