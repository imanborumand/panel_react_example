import { NavLink,Link } from "react-router-dom";
import logout from "../../Services/Auth/authService";


export default function SidebarPanel()
{
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/" className="brand-link">

                <img src="assets/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/>
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </Link>


            <div className="sidebar">

                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="assets/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>


                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                        data-accordion="false">

                        <li className="nav-item menu-open">
                            <NavLink to="/" className="nav-link "  >
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Dashboard
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/settings" className="nav-link"  >
                                <i className="nav-icon fas fa-th"></i>
                                <p>
                                    Settings

                                </p>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <div  onClick={logout} className="nav-link"  >
                                <i className="nav-icon fas fa-user"></i>
                                <p>
                                    LogOut
                                </p>
                            </div>
                        </li>

                    </ul>
                </nav>

            </div>

        </aside>
    );
}