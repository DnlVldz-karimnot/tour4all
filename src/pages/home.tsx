import Header from "@/components/layout/header";
import MainLayout from "@/components/layout/main";
import SideBar from "@/components/layout/sidebar";
import withAuth from "./auth";

const Home = () => {
  return (
    <>
      <MainLayout>
        <div className="content__header content__boxed overlapping">
          <div className="content__wrap">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item active" aria-current="page">
                  Inicio
                </li>
              </ol>
            </nav>
            {/* END : Breadcrumb */}
            <h1 className="page-title mb-0 mt-2 font">Página principal</h1>
            <p className="lead"></p>
          </div>
        </div>
        <div className="content__boxed">
          <div className="content__wrap">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title font">Contenido</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  natus temporibus voluptate corporis possimus ab aut cumque.
                </p>
              </div>
            </div>
            <article className="d-md-flex gap-4">
              <div className="flex-fill"></div>
            </article>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default withAuth(Home);
