import { AuthContext, AuthProvider, useAuth } from "@/contexts/AuthContext";
import { loginAuth } from "@/services/AuthService";
import { LoginRequest } from "@/types/LoginRequest";
import { _clientSecret, notify } from "@/utils/constants";
import { loginInitialState } from "@/utils/initialStates";
import { loginSchema } from "@/utils/validationSchemas";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import logo from "../assets/img/logob2.png";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

import ulsaLogo from "public/1.png";

const Login = () => {
  const { data, status } = useSession();
  const router = useRouter();
  const { isAuthenticated, login, logout } = useAuth();

  const handleSubmit = async (values: LoginRequest) => {
    try {
      //console.log(values)
      const response = await loginAuth(values);

      console.log(response);

      if (response.id) {
        localStorage.setItem("_user", JSON.stringify(response));
        localStorage.setItem("_token", response.token);
        notify("success", "Bienvenid@ " + response.name);
        router.push("/home");
        login();
      } else {
        notify("error", response.error);
      }
    } catch (error) {
      notify("error", "Ha ocurrido un error");
      console.error(error);
    }
  };

  if (status === "authenticated") {
    if (data) {
      const values = {
        email: data.user?.email,
        password: data?.user?.name || "",
      } as LoginRequest;
      handleSubmit(values);
    }
  }

  return (
    <section id="content" className="content">
      {}
      <div className="content__boxed w-100 min-vh-100 d-flex flex-column align-items-center justify-content-center login-image">
        <div className="content__wrap">
          <div className="card shadow-lg" style={{ minWidth: "350px" }}>
            <div
              className="d-flex align-items-center justify-content-center gap-3 mb-3"
              style={{ marginTop: "20px" }}
            >
              <Image
                src={ulsaLogo.src}
                alt="Ulsa Logo"
                width={150}
                height={150}
              />
            </div>
            <div className="card-body">
              <div className="text-center">
                <h3 className="font">Iniciar sesión</h3>
                {/* <p>Entra a tu cuenta</p> */}
              </div>
              <Formik
                initialValues={loginInitialState}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
              >
                {(formik) => (
                  <form className="mt-4" onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                      <input
                        style={{ fontSize: 15 }}
                        type="text"
                        className="form-control"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        style={{ fontSize: 15 }}
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
                        Iniciar sesión
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
              <div className="d-flex justify-content-between mt-4">
                <a
                  href="#"
                  className="btn-link text-decoration-none"
                  style={{ fontSize: 10 }}
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                {/* <h5 className="m-0 font">Ingresa con</h5>
               
                <div className="ms-3">
                  <a
                    onClick={() => signIn("facebook")}
                    className="btn btn-sm btn-icon btn-hover btn-primary text-inherit"
                  >
                    <i className="psi-facebook fs-5" />
                  </a>

                  <a
                    onClick={async () => {
                      signIn("google");
                    }}
                    className="btn btn-sm btn-icon btn-hover btn-danger text-inherit"
                  >
                    <i className="psi-google-plus fs-5" />
                  </a>
                </div> */}
                {/* END : Social media buttons */}
              </div>
            </div>
          </div>
          {/* END : Login card */}
          {/* Demonstration purposes */}
          {/* <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
            <Link href="/" className="btn btn-primary">
              Ir a inicio
            </Link>
            <Link href="/register" className="btn btn-secondary">
              Registrarme
            </Link>
          </div> */}
          {/* END : Demonstration purposes */}
        </div>
      </div>
    </section>
  );
};

export default Login;
