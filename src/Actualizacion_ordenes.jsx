import './App.css';
import { Link} from "react-router-dom";



function actualizacion_ordenes() {
  return (
    <div className="container">

          <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                  {/* <!-- Nested Row within Card Body --> */}
                  <div className="row">
                      <div className="col-lg-5 d-none d-lg-block bg-register-image">
                      </div>
                      <div className="col-lg-7">
                          <div className="p-3">
                              <div className="text-center">
                                  <h1 className="h4 text-gray-900 mb-4">Actualización de Ordenes</h1>
                              </div>
                              <form className="user">
                                  <div className="form-group row">
                                      <div className="col-sm-6 mb-3 mb-sm-0">
                                          <input type="date" className="form-control form-control-user" id="exampleDate" />
                                      </div>
                                      <div className="col-sm-6">
                                          <input type="time" className="form-control form-control-user" id="exampleTime" />
                                      </div>
                                  </div>
                                  <div className="form-group row">
                                      <div className="col-sm-4 mx-auto mb-sm-0">
                                      <input class="form-control form-control-user"  list="datalistOptions" id="exampleEstado" placeholder="Estado Orden"/> 
                                            <datalist id="datalistOptions"> 
                                                <option value="Guardado"/> 
                                                <option value="Cancelado"/> 
                                                <option value="Cumplido"/> 
                                            </datalist>
                                      </div>
                                  </div>
                                  <div className="form-group row">
                                      <div className="col-sm-3 mb-3 mb-sm-0">
                                          <input type="text" className="form-control form-control-user" id="exampleLargo"
                                              placeholder="Largo" />
                                      </div>
                                      <div className="col-sm-3">
                                          <input type="text" className="form-control form-control-user" id="exampleAncho"
                                              placeholder="Ancho" />
                                      </div>
                                      <div className="col-sm-3">
                                          <input type="text" className="form-control form-control-user" id="exampleAlto"
                                              placeholder="Alto" />
                                      </div>
                                      <div className="col-sm-3">
                                          <input type="text" className="form-control form-control-user" id="examplePeso"
                                              placeholder="Peso" />
                                      </div>
                                  </div>
                                  <div className="form-group">
                                      <input type="text" className="form-control form-control-user" id="exampleDireccion"
                                          placeholder="Dirección de Recogida" />
                                  </div>
                                  <div className="form-group">
                                      <input type="text" className="form-control form-control-user" id="exampleCiudad"
                                          placeholder="Ciudad de Recogida" />
                                  </div>
                                  <div className="form-group">
                                      <input type="text" className="form-control form-control-user" id="exampleDestinatario"
                                          placeholder="Nombre Destinatario" />
                                  </div>
                                  <div className="form-group">
                                      <input type="text" className="form-control form-control-user" id="exampleIdentificacion"
                                          placeholder="Cédula/Nit Destinatario" />
                                  </div>
                                  <div className="form-group">
                                      <input type="text" className="form-control form-control-user" id="exampleDirEntrega"
                                          placeholder="Dirección de Entrega" />
                                  </div>
                                  <div className="form-group">
                                      <input type="text" className="form-control form-control-user" id="exampleCiudadEntrega"
                                          placeholder="Ciudad de Entrega" />
                                  </div>
                                  <form action="/admin/ordenes/editar" method="post">
                                      <input type="hidden" name="id" value="{{ dato[0]}}" />
                                      <button type="submit" className="btn btn-success">Actualizar Orden</button>
                                  </form>
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

export default actualizacion_ordenes;
