import './App.css';
import { Link} from "react-router-dom";


function Control_paquetes() {
  return (

    <div className="container">
          <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                  {/* <!-- Nested Row within Card Body --> */}
                  <div className="row">
                      <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                      <div className="col-lg-7">
                          <div className="p-3">
                              <div className="text-center">
                                  <h1 className="h4 text-gray-900 mb-4">Control de Paquetes</h1>
                              </div>
                              <form className="user">

                                  <table className="table text-center">
                                      <thead>
                                        <tr>
                                            <tr>
                                                <th>ID Servicio</th>
                                                <th>Nombre</th>
                                                <th>Fecha</th>
                                                <th>Ciudad de Entrega</th>
                                                <th>Dirección de Entrega</th>
                                                <th>Estado</th>
                                            </tr>   
                                        </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <tr>
                                                    <td><Link to="/Actualizacion-Ordenes" className="fcc-btn" ><u>1</u> </Link></td>
                                                    <td>Juan Valderrama</td>
                                                    <td>01/01/2022</td>
                                                    <td>Santa Marta</td>
                                                    <td>Calle 41 #18-08</td>
                                                    <td>Guardado</td>
                                              </tr>
                                              <tr>
                                                  <td><Link to="/Actualizacion-Ordenes" className="fcc-btn" ><u>2</u> </Link></td>
                                                  <td>Claudia Dejoy</td>
                                                  <td>01/01/2022</td>
                                                  <td>Cartagena</td>
                                                  <td>Calle 66 #24-56</td>
                                                  <td>Cumplido</td>
                                              </tr>
                                              <tr>
                                                  <td><Link to="/Actualizacion-Ordenes" className="fcc-btn" ><u>3</u> </Link></td>
                                                  <td>Claudia Dejoy</td>
                                                  <td>01/01/2022</td>
                                                  <td>Barranquilla</td>
                                                  <td>Calle 34 #14-17</td>
                                                  <td>Cancelado</td>
                                              </tr>
                                          </tr> 
                                      </tbody>
                                  </table>
                                  <Link to="/Registro-Ordenes" className="btn btn-success" role="button">Crear Orden</Link>
                              </form>
                              <hr />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      <img src="img/Logo.jpg" className="rounded mx-auto d-block" width="10%" alt="..." />
    </div>
  );
}

export default Control_paquetes;