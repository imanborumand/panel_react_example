import {useContext, useEffect, useReducer} from "react";

import NavPanel from "./Layouts/master/NavPanel";
import SidebarPanel from "./Layouts/master/SidebarPanel";
import FooterPanel from "./Layouts/master/FooterPanel";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPanel from "./Layouts/pages/dashboard/DashboardPanel";
import BreadcrumbPanel from "./Layouts/master/BreadcrumbPanel";
import SettingsPanel from "./Layouts/pages/dashboard/SettingsPanel";
import Login from "./Layouts/pages/oauth/Login";

import AppReducer from "./Reducers/AppReducer";
import AdminContext from "./Contexts/Admin/AdminContext";
import LoadingPanel from "./Components/Loading/LoadingPanel";
import {ToastContainer} from "react-toastify";
import UserListPanel from "./Layouts/pages/User/UserListPanel";



function getToken(state) {

    const tokenString = localStorage.getItem('admin_token');
    if (tokenString) {
        state.authenticated = true
        return  true;
    }
    return  null
}

function App() {

  const [state, dispatchApp] = useReducer(AppReducer,
      {
          authenticated: false,
          countMessages: 0,
      loading: false})


  // const user = useContext(UserContext)
  const token = getToken(state);


  useEffect(() => {
      if(!token) {
          document.body.className = 'hold-transition login-page';
      } else {
          document.body.className = 'hold-transition sidebar-mini layout-fixed';
      }
      return () => {  }
  }, []);


  if(!state.authenticated) {

      return (
          <BrowserRouter>
              <AdminContext.Provider value={{dispatchApp}}>
                  <Login/>
              </AdminContext.Provider>
          </BrowserRouter>
      )
  }

  return (
        <>
            <LoadingPanel/>
            {/*{*/}
            {/*    state.loading ? <LoadingPanel/> : ''*/}
            {/*}*/}
            <ToastContainer />
            <div className="wrapper">
                <AdminContext.Provider value={{dispatchApp}}>

                    <BrowserRouter>

                        <NavPanel />
                        <div className="content-wrapper">


                            <BreadcrumbPanel/>
                            <section className="content">
                                <div className="container-fluid">
                                    <Routes>
                                        <Route path="/" element={<DashboardPanel />}/>
                                        <Route path="settings" element={<SettingsPanel />}/>
                                        <Route path="users" element={<UserListPanel />}/>
                                    </Routes>
                                </div>
                            </section>

                        </div>

                        <SidebarPanel />
                        <FooterPanel />

                    </BrowserRouter>

                </AdminContext.Provider>
            </div>
        </>
  );
}

export default App;
