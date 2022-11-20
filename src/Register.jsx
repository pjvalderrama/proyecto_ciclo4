import './App.css';
import { Link} from "react-router-dom";


function Register() {
  return (
    <div class="container">

    <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
            {/* <!-- Nested Row within Card Body --> */}
            <div class="row">
                <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div class="col-lg-7">
                    <div class="p-5">
                        <div class="text-center">
                            <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                        </div>
                        <form class="user">
                            <div class="form-group row">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                        placeholder="Nombres"/>
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control form-control-user" id="exampleLastName"
                                        placeholder="Apellidos"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                    placeholder="Dirección de Correo Electrónico"/>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input type="password" class="form-control form-control-user"
                                        id="exampleInputPassword" placeholder="Contraseña"/>
                                </div>
                                <div class="col-sm-6">
                                    <input type="password" class="form-control form-control-user"
                                        id="exampleRepeatPassword" placeholder="Repetir Contraseña"/>
                                </div>
                            </div>
                            <Link to="/" className="btn btn-primary btn-user btn-block">
                                Registrar Cuenta
                            </Link>
                            <hr/>
                            <Link to="/" className="btn btn-google btn-user btn-block">
                                <i className="fab fa-google fa-fw"></i>Iniciar Sesión con Google
                            </Link>
                            <Link to="/" className="btn btn-facebook btn-user btn-block">
                                <i className="fab fa-facebook-f fa-fw"></i>Iniciar Sesión con Facebook
                            </Link>
                        </form>
                        <hr/>
                        <div class="text-center">
                            <Link to="/forgot-password" className="small">
                                ¿Ha olvidado su contraseña?
                            </Link>
                        </div>
                        <div class="text-center">
                            <Link to="/" className="small">
                                ¿Ya tienes una cuenta? ¡Inicia Sesión!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <img src="img/Logo.jpg" class="rounded mx-auto d-block" width="20%" alt="..."/>
</div>

  );
}

export default Register;
