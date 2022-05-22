import {Button, Modal, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";



export default function  UserModal(props)
{
    const [showUserForm, setshowUserForm] = useState()
    const [userInfo, setUserInfo] = useState()


    const callCloseModal =(e)=>{
        props.closeModal(e);
    }



    useEffect(() => {
        axios.get("dashboard/users/" + props.userId).then(function (res) {
            setUserInfo(res.data)
            setshowUserForm(true)
        }).then(function (err) {

        })
    }, [])



    return(
        <>
            <Modal show={props.show}>
                <Modal.Header closeButton  onClick={callCloseModal}>
                    <Modal.Title>{
                        showUserForm ? userInfo.first_name + ' ' + userInfo.last_name : ""
                    }</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {
                        showUserForm ? userForm(userInfo): ''
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={callCloseModal} >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function userForm(userInfo)
{

    return (
      <>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>نام و نام خانوادگی</Form.Label>
              <Form.Control type="text" defaultValue={userInfo.first_name + ' ' + userInfo.last_name}  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>شماره تماس</Form.Label>
              <Form.Control type="text" defaultValue={userInfo.mobile}  />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ایمیل</Form.Label>
              <Form.Control type="text" defaultValue={userInfo.email}  />
          </Form.Group>

      </>
    )
}