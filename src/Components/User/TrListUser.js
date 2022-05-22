import UserModal from "./UserModal";

export default function TrListUser(props)
{
    const user = props.value

    const callOpenModal =(e)=>{
        props.setUserId(props.value.id)
        props.openModal(e);
    }

    return (
        <tr>
            <td>{user.first_name} {user.last_name}</td>
            <td>{user.mobile}</td>
            <td><span className="badge bg-danger">{user.persian_status}</span></td>
            <td><span className="badge bg-danger">
                <button type="button" className="btn btn-default" onClick={callOpenModal}>
                  ویرایش
                </button>
            </span></td>
        </tr>
    );
}