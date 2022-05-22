
import axios from "axios";
import Boxes from "../../../Components/Elements/Boxes";
import {useContext, useEffect, useState} from "react";
import AdminContext from "../../../Contexts/Admin/AdminContext";
import {toast} from 'react-toastify';
import {showOrHideLoading} from "../../../Components/Loading/LoadingPanel";



export default function DashboardPanel() {

    const [boxes , setBoxes] = useState([])

    useEffect(() => {
        axios.get("dashboard").then(function (res) {
            setBoxes(res.data.boxes)
        }).then(function (err) {
           if (err) {
               toast.error("خطایی در دریافت اطلاعات رخ داده است!", {
                   position: toast.POSITION.TOP_CENTER
               });
           }
        })
    }, [])

    return (
        <>
            <div className="row">

                {
                    boxes.length ?
                            boxes.map((value, i) => {
                                    console.log(value)
                                    return (<Boxes key={i}  />)
                                })   : ''
                }



                </div>

        </>
    );
}