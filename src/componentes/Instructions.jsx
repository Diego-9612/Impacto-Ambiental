import { FaListCheck } from "react-icons/fa6";
import { PiArrowCircleRight } from "react-icons/pi";
export default function Instructions(){
    return(
        <section className="flex flex-col font-sans w-full p-5 justify-center items-center gap-5">
            <h3 className="text-3xl font-sans font-bold text-dark-green-900 flex gap-3 items-center">
            Instrucciones de Uso<FaListCheck />
            </h3>
            <ul className="flex flex-col items-center justify-center gap-3">
                <li className="text-xl font-sans font-light text-dark-green-900 text-center"><p className="flex items-center gap-2"> <PiArrowCircleRight />  Seleccione el tipo de proyecto que desea analizar.</p></li>
                <li className="text-xl font-sans font-light text-dark-green-900 text-center"><p className="flex items-center gap-2"> <PiArrowCircleRight />  Se desplegara una lista de items especificos para cada tipo proyecto.</p></li>
                <li className="text-xl font-sans font-light text-dark-green-900 text-center"><p className="flex items-center gap-2"> <PiArrowCircleRight />  Asigne una puntuacion de 1 a 10 a cada uno de los items.</p></li>
                <li className="text-xl font-sans font-light text-dark-green-900 text-center"><p className="flex items-center gap-2"> <PiArrowCircleRight />  Compare y analice el resultado.</p></li>
            </ul>
            
                
            
        </section>
    );
}