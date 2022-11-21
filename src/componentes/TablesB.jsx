import React from "react";

export const TableB = () => {
    return (
        <>
            <form className="d-flex" role="search">
                    <button className="btn btn-success" type="submit">Nuevo envio</button>
            </form>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>No. Servicio</th>
                        <th>Fecha</th>
                        <th>Ciudad entrega</th>
                        <th>Dirección entrega</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="center"><a href="">1</a></td>
                        <td align="center">01/01/21</td>
                        <td align="center">Barranquilla</td>
                        <td align="center">Calle 1 # 01-99</td>
                        <td align="center">Guardado</td>
                    </tr>
                    <tr>
                        <td align="center"><a href="">2</a></td>
                        <td align="center">01/01/21</td>
                        <td align="center">Santa Marta</td>
                        <td align="center">Calle 2 # 01-99</td>
                        <td align="center">Cancelado</td>
                    </tr>
                    <tr>
                        <td align="center"><a href="">3</a></td>
                        <td align="center">01/01/21</td>
                        <td align="center">Cartagena</td>
                        <td align="center">Calle 3 # 01-99</td>
                        <td align="center">Cumplido</td>
                        
                    </tr>
                    
                </tbody>
                </table>
                <div className="container" align="center">
                </div>
        </>
    )
}