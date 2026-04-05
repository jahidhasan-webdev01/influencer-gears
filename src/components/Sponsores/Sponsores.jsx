import { useEffect, useState } from "react";

const Sponsores = () => {
    const [sponsores, setSponsores] = useState([]);

    useEffect(() => {
        const fetchSponsores = async () => {
            const response = await fetch("/sponsores.json")
            const data = await response.json();

            setSponsores(data)
        }

        fetchSponsores();
    }, [])

    return (
        <div className="py-10 lg:py-20 bg-purple-100 px-5">
            <div className="flex flex-row space-x-10 justify-center items-center flex-wrap">

                {
                    sponsores.map((sp, index) => <img key={index} src={sp} alt="" className="w-16 lg:w-24 h-16 lg:h-24 hover:opacity-50"/>)
                }
                
            </div>

        </div>
    );
};

export default Sponsores;