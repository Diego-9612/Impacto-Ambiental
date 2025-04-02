"use client";
import { useState, useEffect } from "react";

function ImpactForm({ typework }) {
    const [impact, setImpact] = useState({});

    useEffect(() => {
        if (typework === "Infraestructura") {
            setImpact({
                wastewater: 0,
                solidWaste: 0,
                erosion: 0,
                deforestation: 0,
                airQuality: 0,
                noise: 0,
            });
        } else if (typework === "Procesos Industriales") {
            setImpact({
                wastewater: 0,
                solidWaste: 0,
                chemicals: 0,
                airQuality: 0,
                recycling: 0,
            });
        } else if (typework === "Agricultura") {
            setImpact({
                deforestation: 0,
                overexploitationSoils: 0,
                agrochemicals: 0,
                organicWaste: 0,
                erosion: 0,
            });
        }
    }, [typework]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setImpact((prev) => ({
            ...prev,
            [name]: parseInt(value, 10),
        }));
    };

    const calculateAverageImpact = () => {
        const total = Object.values(impact).reduce((acc, curr) => acc + curr, 0);
        return (total / Object.values(impact).length).toFixed(2);
    };

    let formContent = null;
    if (typework === "Infraestructura") {
        formContent = (
            <>
                <span className="flex py-5 items-center w-80 justify-between gap-2">
                    <label className="text-base text-center  w-full">Generación de aguas residuales</label>
                    <input className="border-2 rounded-xl border-dark-green-900 py-1 px-2 text-center"
                        type="number"
                        name="wastewater"
                        value={impact.wastewater || ""}
                        onChange={handleChange}
                        min="1"
                        max="10" />
                </span>

                <span className="flex py-5 items-center w-80 justify-between gap-2">
                    <label className="text-base text-center w-full">Generación de residuos sólidos</label>
                    <input className="border-2 rounded-xl border-dark-green-900 py-1 px-2 text-center"
                        type="number"
                        name="solidWaste"
                        value={impact.solidWaste || ""}
                        onChange={handleChange}
                        min="1"
                        max="10"
                    />
                </span>
                <span className="flex py-5 items-center w-80 justify-between gap-2">
                    <label className="text-base text-center w-full">Exposición de suelos</label>
                    <input className="border-2 rounded-xl border-dark-green-900 py-1 px-2 text-center"
                        type="number"
                        name="erosion"
                        value={impact.erosion || ""}
                        onChange={handleChange}
                        min="1"
                        max="10"
                    />
                </span>
                <span className="flex py-5 items-center w-80 justify-between gap-2">
                    <label className="text-base text-center w-full">Nivel de deforestación</label>
                    <input className="border-2 rounded-xl border-dark-green-900 py-1 px-2 text-center"
                        type="number"
                        name="deforestation"
                        value={impact.deforestation || ""}
                        onChange={handleChange}
                        min="1"
                        max="10"
                    />
                </span>
                <span className="flex py-5 items-center w-80 justify-between gap-2">
                    <label className="text-base text-center w-full">Generación de material particulado</label>
                    <input className="border-2 rounded-xl border-dark-green-900 py-1 px-2 text-center"
                        type="number"
                        name="airQuality"
                        value={impact.airQuality || ""}
                        onChange={handleChange}
                        min="1"
                        max="10"
                    />
                </span>
                <span className="flex py-5 items-center w-80 justify-between gap-2">
                    <label className="text-base text-center w-full">Niveles de ruido</label>
                    <input className="border-2 rounded-xl border-dark-green-900 py-1 px-2 text-center"
                        type="number"
                        name="noise"
                        value={impact.noise || ""}
                        onChange={handleChange}
                        min="1"
                        max="10"
                    />
                </span>
            </>
        );
    } else if (typework === "Procesos Industriales") {
        formContent = (
            <>

                <span className="flex py-5 items-center w-80 justify-between gap-2">
                    <label className="text-base text-center  w-full">Generación de aguas residuales</label>
                    <input className="border-2 rounded-xl border-dark-green-900 py-1 px-2 text-center"
                        type="number"
                        name="wastewater"
                        value={impact.wastewater || ""}
                        onChange={handleChange}
                        min="1"
                        max="10"
                    />
                </span>
                <span className="flex py-5 items-center w-80 justify-between gap-2">
                    <label className="text-base text-center  w-full">Generación de residuos sólidos</label>
                    <input className="border-2 rounded-xl border-dark-green-900 py-1 px-2 text-center"
                        type="number"
                        name="solidWaste"
                        value={impact.solidWaste || ""}
                        onChange={handleChange}
                        min="1"
                        max="10"
                    />
                </span>
                <span className="flex py-5 items-center w-80 justify-between gap-2">
                    <label className="text-base text-center  w-full">Uso y disposición final de químicos peligrosos</label>
                    <input className="border-2 rounded-xl border-dark-green-900 py-1 px-2 text-center"
                        type="number"
                        name="chemicals"
                        value={impact.chemicals || ""}
                        onChange={handleChange}
                        min="1"
                        max="10"
                    />
                </span>
                <span className="flex py-5 items-center w-80 justify-between gap-2">
                    <label className="text-base text-center  w-full">Generación de emisiones de CO2, CO, Metano</label>
                    <input className="border-2 rounded-xl border-dark-green-900 py-1 px-2 text-center"
                        type="number"
                        name="airQuality"
                        value={impact.airQuality || ""}
                        onChange={handleChange}
                        min="1"
                        max="10"
                    />
                </span>
                <span className="flex py-5 items-center w-80 justify-between gap-2">
                    <label className="text-base text-center  w-full">Implementación de programas de reciclaje</label>
                    <input className="border-2 rounded-xl border-dark-green-900 py-1 px-2 text-center"
                        type="number"
                        name="recycling"
                        value={impact.recycling || ""}
                        onChange={handleChange}
                        min="1"
                        max="10"
                    />
                </span>
            </>
        );
    } else if (typework === "Agricultura") {
        formContent = (
            <>
            <span className="flex py-5 items-center w-80 justify-between gap-2">
                <label className="text-base text-center  w-full">Nivel de deforestación</label>
                <input className="border-2 rounded-xl border-dark-green-900 py-1 px-2 text-center"
                    type="number"
                    name="deforestation"
                    value={impact.deforestation || ""}
                    onChange={handleChange}
                    min="1"
                    max="10"
                />
                </span>
                <span className="flex py-5 items-center w-80 justify-between gap-2">
                <label className="text-base text-center  w-full">Nivel de explotación de suelos (monocultivos)</label>
                <input className="border-2 rounded-xl border-dark-green-900 py-1 px-2 text-center"
                    type="number"
                    name="overexploitationSoils"
                    value={impact.overexploitationSoils || ""}
                    onChange={handleChange}
                    min="1"
                    max="10"
                />
                </span>
                <span className="flex py-5 items-center w-80 justify-between gap-2">
                <label className="text-base text-center  w-full">Nivel de uso de agroquímicos</label>
                <input className="border-2 rounded-xl border-dark-green-900 py-1 px-2 text-center"
                    type="number"
                    name="agrochemicals"
                    value={impact.agrochemicals || ""}
                    onChange={handleChange}
                    min="1"
                    max="10"
                />
                </span>
                <span className="flex py-5 items-center w-80 justify-between gap-2">
                <label className="text-base text-center  w-full">Generación de residuos orgánicos</label>
                <input className="border-2 rounded-xl border-dark-green-900 py-1 px-2 text-center"
                    type="number"
                    name="organicWaste"
                    value={impact.organicWaste || ""}
                    onChange={handleChange}
                    min="1"
                    max="10"
                />
                </span>
                <span className="flex py-5 items-center w-80 justify-between gap-2">
                <label className="text-base text-center  w-full">Suelos expuestos a erosión</label>
                <input className="border-2 rounded-xl border-dark-green-900 py-1 px-2 text-center"
                    type="number"
                    name="erosion"
                    value={impact.erosion || ""}
                    onChange={handleChange}
                    min="1"
                    max="10"
                />
                </span>
            </>
        );
    }

    return (

        <section className=" flex flex-col justify-center items-center m-10 shadow-xl w-2/3 py-10 gap-6 font-sans  text-dark-green-900 bg-aqua-green-200 rounded-xl">
            <h3 className="text-2xl font-bold ">
                Califica el nivel de impacto ambiental
            </h3>
            <div className="flex flex-col w-full justify-center items-center gap-2  rounded-xl text-base">{formContent}</div>

            <p className="text-xl text-center w-full">
                Impacto promedio: <strong>{calculateAverageImpact()}</strong>
            </p>

        </section>
    );
}

export default ImpactForm;
