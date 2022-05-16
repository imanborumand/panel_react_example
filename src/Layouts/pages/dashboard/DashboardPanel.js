
import axios from "axios";
import Boxes from "../../../Components/Elements/Boxes";
import {useContext, useEffect, useState} from "react";
import AdminContext from "../../../Contexts/Admin/AdminContext";
import {toast} from 'react-toastify';



export default function DashboardPanel() {
    
    let adminContext = useContext(AdminContext)
    const [boxes , setBoxes] = useState([])

    useEffect(() => {

        adminContext.dispatchApp({type: 'change_loading', payload: {
                loading: true,
            }})


        axios.get("dashboard").then(function (res) {

            setBoxes(res.data.boxes)
            adminContext.dispatchApp({type: 'change_loading', payload: {
                    loading: false,
                }})
            toast.success("اطلاعات با موفقیت دریافت شد", {
                position: toast.POSITION.TOP_CENTER
            });
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