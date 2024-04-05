
import { useState, useEffect } from 'react';

function Hello() {
    const [data, setData] = useState('Hola');

    useEffect(() => {
        console.log('Hello1');
        const fetchData = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/');
                if (response.ok) {
                    const jsonData = await response.json();
                    console.log(jsonData);
                    setData(jsonData);
                } else {
                    console.error('Error al obtener los datos');
                }
            } catch (error) {
                console.error('Error en la petición:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <p>hola</p>
            <pre>{JSON.stringify(data)}</pre>
        </>
    );
}

export default Hello;
