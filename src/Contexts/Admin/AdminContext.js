import React from "react";


const AdminContext = React.createContext({
    authenticated : false,
    login : () => {},
    logout : () => {},
});

export function useAdminContext() {
    return React.useContext(AdminContext);
}


export default AdminContext;