import React from "react";

export const Login = () => {
    return (
        <>
        <div className="container-sm">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo Electronico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">No compartimos tu dirección de correo.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Recordar</label>
                </div>
                <button type="submit" className="btn btn-primary">Ingresar</button>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
            </div>
        </>
    )

}