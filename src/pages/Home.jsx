import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import '../style.css'

const Home = () => {

    const [datas, setDatas] = useState([])

    const getData = () => {
        axios
            .get(`https://api.mudoapi.tech/menus`)
            .then((res) => {
                console.log(res);
                const response = res?.data?.data?.Data;
                console.log(response);
                setDatas(response);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <Navbar />
            <h1>Halo halo</h1>
            {datas.map((item) => (
                <div className="layout">
                    <img src={item?.imageUrl} alt="" />
                    <div className="text-layout">
                        <h1>{item?.name}</h1>
                        <h1>{`Harga: ${item?.price}.000`}</h1>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home