"use client";

const ObraSelector = ({ setTypeWork }) => {
    const obras = ["Infraestructura", "Procesos Industriales", "Agricultura"];

    return (
        <main className="flex flex-col font-sans w-2/3 py-20 justify-center items-center gap-8 bg-aqua-green-200 rounded-xl shadow-xl m-10">
            <label className="block text-dark-green-900 font-bold font-sans text-3xl">
                Seleccione el tipo de Proyecto
            </label>
            <select
                id="proyecto"
                name="proyecto"
                onChange={(e) => setTypeWork(e.target.value)} 
                className="py-3 text-center rounded-xl w-2/3 border border-dark-green-900 appearance-none"
            >
                <option className="text-white" value="">Selecciona una de las opciones</option>
                {obras.map((obra) => (
                    <option className="bg-dark-green-900 text-mint-green-100" key={obra} value={obra}>
                        {obra}
                    </option>
                ))}
                
            </select>
        </main>
    );
};

export default ObraSelector;


