import './App.css';
import { Link} from "react-router-dom";


function Home_Login() {
  return (
    <div className="container">

        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Bienvenido a la Plataforma InstaYA!</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Ingrese la dirección de correo electrónico"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Contraseña"/>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                <label className="custom-control-label" for="customCheck">Recuérdame</label>
                                            </div>
                                        </div>
                                        <Link to="/Control-Ordenes" className="btn btn-primary btn-user btn-block">
                                            Iniciar Sesión
                                        </Link>
                                        <hr/>
                                        <Link to="/Control-Ordenes" className="btn btn-google btn-user btn-block">
                                            <i className="fab fa-google fa-fw"></i>Iniciar Sesión con Google
                                        </Link>
                                        <Link to="/Control-Ordenes" className="btn btn-facebook btn-user btn-block">
                                            <i className="fab fa-facebook-f fa-fw"></i>Iniciar Sesión con Facebook
                                        </Link>
                                    </form>
                                    <hr/>
                                    <div className="text-center">
                                        <Link to="/forgot-password" className="small">
                                        ¿Ha olvidado su contraseña?
                                        </Link>
                                    </div>
                                    <div className="text-center">
                                        <Link to="/Register" className="small">
                                            ¡Crear una cuenta!
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="img/Logo.jpg" className="rounded mx-auto d-block" width="20%" alt="..."/>
    </div>

  );
}

export default Home_Login;
