import './App.css';
import { Link} from "react-router-dom";


function Forgot_password() {
  return (

    <div className="container">

        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-2">¿Olvidaste Tu Contraseña?</h1>
                                        <p className="mb-4">¡Simplemente ingrese su dirección 
                                        de correo electrónico a continuación y le 
                                        enviaremos un enlace para restablecer su contraseña!</p>
                                    </div>
                                    <form className="user">
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Ingrese la dirección de correo electrónico..."/>
                                        </div>
                                        <Link to="/" className="btn btn-primary btn-user btn-block">
                                            Restablecer Contraseña
                                        </Link>
                                    </form>
                                    <hr/>
                                    <div className="text-center">
                                        <Link to="/Register" className="small">
                                            ¡Crear una cuenta!
                                        </Link>
                                    </div>
                                    <div className="text-center">
                                        <Link to="/" className="small">
                                            ¿Ya tienes una cuenta? ¡Inicia Sesión!
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

export default Forgot_password;
