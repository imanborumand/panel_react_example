import {useContext, useEffect, useState} from "react";
import AdminContext from "../../../Contexts/Admin/AdminContext";
import axios from "axios";
import {toast} from "react-toastify";
import TrListUser from "../../../Components/User/TrListUser";
import {showOrHideLoading} from "../../../Components/Loading/LoadingPanel";
import UserModal from "../../../Components/User/UserModal";


export default function UserListPanel()
{

    const [userList , setUserList] = useState([])
    const [showModal , setShowUserModal] = useState(false)
    const [selectUserId , setSelectUserId] = useState(false)

    useEffect(() => {

        // showOrHideLoading(adminContext, true)


        axios.get("dashboard/users").then(function (res) {

            setUserList(res.data.data)
        }).then(function (err) {
            if (err) {
                toast.error("خطایی در دریافت اطلاعات رخ داده است!", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })
    }, [])


    function closeModal(){
        setShowUserModal(false);
    }

    function openModal(){
        setShowUserModal(true);
    }

    function setUserId(id)
    {
        setSelectUserId(id)
    }




    return(
            <>
                {
                    showModal?
                        <UserModal show={showModal} closeModal={closeModal} userId={selectUserId}/>
                        : ''
                }
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>نام و نام خانوادگی</th>
                        <th>شماره موبایل</th>
                        <th>وضعیت</th>
                        <th>تنظیمات</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        userList.length ?
                            userList.map((value, i) => {
                                console.log(value)
                                return (<TrListUser key={i} value={value}  closeModal={closeModal} openModal={openModal} setUserId={setUserId}/>)
                            })   : []
                    }
                    </tbody>
                </table>
            </>
    );
}

