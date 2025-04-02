"use client";
import { useState } from "react";
import { Header } from "@/componentes/Header";
import ObraSelector from "@/componentes/ObraSelector";
import ImpactForm from "@/componentes/ImpactoFormulario";
import Instructions from "./Instructions";

export default function App() {
    const [typework, setTypeWork] = useState("");

    return (
        <section className=" mx-10 my-5 py-5 px-5 flex flex-col items-center justify-center gap-10">
            <Header />
            <Instructions/>
            <ObraSelector setTypeWork={setTypeWork} />
            {typework && <ImpactForm typework={typework} />}
        </section>
    );
}