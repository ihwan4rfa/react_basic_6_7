import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailMenu = () => {
    const param = useParams();

    console.log(param?.id);

    const [menuDetail, setMenuDetail] = useState();

    const getMenuDetail = () => {
        axios
            .get(`https://api.mudoapi.tech/menu/${param?.id}`)
            .then((res) => {
                console.log(res);
                const response = res?.data?.data;
                console.log(response);
                setMenuDetail(response);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getMenuDetail();
    }, [])

    return (
        <div className="layout-detail">
            <img src={menuDetail?.imageUrl} alt="" />
            <div className="text-layout">
                <h2>{menuDetail?.name}</h2>
                <h3>{menuDetail?.description}</h3>
                <h2>{`Harga: ${menuDetail?.price}.000`}</h2>
            </div>
        </div>
    )
}

export default DetailMenu;