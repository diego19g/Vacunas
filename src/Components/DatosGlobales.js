import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import "./estilos.css";

function DatosGlobales() {
    const baseUrl = "http://localhost:4004/vacunas";
    const [data, setData] = useState([]);

    let [dosis_pfizer, setdosis_pfizer] = useState(0);
    let [dosis_moderna, setdosis_moderna] = useState(0);
    let [dosis_entregadas, setdosis_entregadas] = useState(0);
    let [dosis_administradas, setdosis_administradas] = useState(0);
    let [personas, setpersonas] = useState(0);

    const peticionGet = async () => {
        await axios
            .get(baseUrl)
            .then((response) => {
                setData(response.data);
                // console.log(response.data);
                response.data.forEach(function (comunidades) {
                    dosis_entregadas += comunidades.dosis_pfizer + comunidades.dosis_moderna;
                    dosis_administradas += comunidades.dosis_administradas;
                    personas += comunidades.personas;
                    dosis_pfizer += comunidades.dosis_pfizer;
                    dosis_moderna += comunidades.dosis_moderna;
                });
                setdosis_pfizer(dosis_pfizer);
                setdosis_moderna(dosis_moderna);
                setdosis_entregadas(dosis_entregadas);
                setdosis_administradas(dosis_administradas);
                setpersonas(personas);               
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        peticionGet();
    }, []);

    return (
        <div style={{textAlign: 'center'}}>
            <h1>DATOS GLOBALES</h1>
            <br></br>
            <table className="table">
                <tr>
                    <th>DOSIS ENTREGADAS A LAS COMUNIDADES</th>
                    <th>DOSIS ADMINISTRADAS</th>
                    <th>PERSONAS CON PAUTA COMPLETA</th>
                </tr>
                <tr>
                    <td>{dosis_entregadas}</td>
                    <td>{dosis_administradas}</td>
                    <td>{personas}</td>
                </tr>          
            </table>
        </div>
    );
}

export default DatosGlobales;