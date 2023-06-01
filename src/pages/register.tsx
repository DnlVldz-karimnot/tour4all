import { AuthContext, AuthProvider, useAuth } from "@/contexts/AuthContext";
import { loginAuth, registerPublicAuth } from "@/services/AuthService";
import { LoginRequest } from "@/types/LoginRequest";
import { _clientSecret, notify } from "@/utils/constants";
import {
  loginInitialState,
  registerPublicInitialState,
} from "@/utils/initialStates";
import { loginSchema, registerSchema } from "@/utils/validationSchemas";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import logo from "../assets/img/logob2.png";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { RegisterRequest } from "@/types/RegisterRequest";

const Login = () => {
  const router = useRouter();
  const { isAuthenticated, login, logout } = useAuth();
  const { data, status } = useSession();

  const handleSubmit = async (values: RegisterRequest) => {
    try {
      const response = await registerPublicAuth(values);

      if (response.user) {
        localStorage.setItem("_user", JSON.stringify(response.user));
        localStorage.setItem("_token", response.token);
        console.log(response);
        notify("success", "Bienvenid@ " + response.user.name);
        router.push("/home");
        login();
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (status === "authenticated") {
    if (data) {
      const values = {
        name: data.user?.name,
        email: data.user?.email,
        password: (data?.user?.name || "") + _clientSecret,
      } as RegisterRequest;

      setTimeout(() => {
        handleSubmit(values);
      }, 2000);
    }
  }

  return (
    <section id="content" className="content">
      {}
      <div className="content__boxed w-100 min-vh-100 d-flex flex-column align-items-center justify-content-center login-image">
        <div className="content__wrap">
          <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
            <Image src={logo} alt="Nifty Logo" width={150} />
          </div>
          <div className="card shadow-lg" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <div className="text-center">
                <h3 className="font">Registrarse</h3>
                <p>Crea una cuenta</p>
              </div>
              <Formik
                initialValues={registerPublicInitialState}
                validationSchema={registerSchema}
                onSubmit={handleSubmit}
              >
                {(formik) => (
                  <form className="mt-4" onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        placeholder="Nombre(s)"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        className="form-control"
                        placeholder="Contraseña"
                      />
                    </div>
                    <div className="d-grid mt-5">
                      <button className="btn btn-primary btn-lg" type="submit">
                        Crear cuenta
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <h5 className="m-0 font">Regístrate con</h5>
                {/* Social media buttons */}
                <div className="ms-3">
                  <a
                    href="#"
                    className="btn btn-sm btn-icon btn-hover btn-primary text-inherit"
                  >
                    <i className="psi-facebook fs-5" />
                  </a>

                  <a
                    href="#"
                    onClick={() => signIn("google")}
                    className="btn btn-sm btn-icon btn-hover btn-danger text-inherit"
                  >
                    <i className="psi-google-plus fs-5" />
                  </a>
                </div>
                {/* END : Social media buttons */}
              </div>
            </div>
          </div>
          {/* END : Login card */}
          {/* Demonstration purposes */}
          <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
            <Link href="/" className="btn btn-primary">
              Ir a inicio
            </Link>
            <Link href="/" className="btn btn-secondary">
              Iniciar sesión
            </Link>
          </div>
          {/* END : Demonstration purposes */}
        </div>
      </div>
    </section>
  );
};

export default Login;
