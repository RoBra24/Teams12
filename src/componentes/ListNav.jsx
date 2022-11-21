import Reac from "react";

export const ListNav = ( ) => {
    return (
        <>
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    {/* <a className="nav-link active" aria-current="page" href="#">Envios</a> */}
                    </li>
                                      
                </ul>
                <ul className="navbar-nav ms-auto ms-md-19 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Configuraciones</a></li>
                        <li><a className="dropdown-item" href="#!">Registros de Actividad</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#!">Salir</a></li>
                    </ul>
                </li>
            </ul>

                </div>

            </div>

        </>
    )
}