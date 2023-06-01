import Image from "next/image";
import profile from "../../assets/img/1.png";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSidebarStore } from "@/store/sidebarStore";

const rutasConfig = [
  "/families",
  "/series",
  "/collections",
  "/categories",
  "/paymentPlataforms",
  "/shipping",
  "/types-clients",
  "/warehouses",
  "/organizations",
];

const SideBar = () => {
  const [configuration, setConfiguration] = useState(false);
  const [profileTab, setProfileTab] = useState(false);
  const { logout } = useAuth();
  const { open } = useSidebarStore();

  const router = useRouter();
  const currentPath = router.pathname;

  const [authenticatedUser, setAuthenticatedUser] = useState({
    name: "Name default",
    email: "Email default",
    role: {
      id: 0,
      name: "null",
      permissions: ["null"],
    },
    organization: {
      logo: "https://cdn.shopify.com/s/files/1/0253/8618/8834/files/MDoris_Azul_256x.png",
      name: "Image default",
    },
  });

  useEffect(() => {
    if (rutasConfig.includes(currentPath)) {
      setConfiguration(true);
    }
  }, []);

  useEffect(() => {
    if (window.localStorage.getItem("_user")) {
      const user = JSON.parse(
        window.localStorage.getItem("_user") ||
          `{
          name: "Name default",
          organization: {
            logo: "https://cdn.shopify.com/s/files/1/0253/8618/8834/files/MDoris_Azul_256x.png",
            name: "Image default",
          },
        }`
      );
      setAuthenticatedUser(user);
    }
  }, []);

  return (
    <nav
      id="mainnav-container"
      className={open ? "mainnav" : "mainnav mn--min"}
      style={{ width: open ? "20vw" : "5vw" }}
    >
      <div className="mainnav__inner">
        {/* Navigation menu */}
        <div className="mainnav__top-content scrollable-content pb-5 ">
          {/* Profile Widget */}
          <div className="mainnav__profile mt-3 d-flex3">
            <div className="mt-2 d-mn-max" />
            {/* Profile picture  */}
            <div className="mininav-toggle text-center py-2">
              <Image
                className="mainnav__avatar img-md rounded-circle border"
                src={profile}
                alt="Profile Picture"
              />
            </div>
            <div className="mininav-content  d-mn-max">
              <div className="d-grid">
                {/* User name and position */}
                <button
                  onClick={() => {
                    setProfileTab(!profileTab);
                  }}
                  className="d-block btn shadow-none p-2"
                >
                  <span className="dropdown-toggle d-flex justify-content-center align-items-center">
                    <h6 className="mb-0 me-3 font">{authenticatedUser.name}</h6>
                  </span>
                  <small className="text-muted font">
                    {authenticatedUser.email}
                  </small>
                </button>
                {/* Collapsed user menu */}
                <div
                  id="usernav"
                  className={
                    profileTab
                      ? "nav flex-column collapsed"
                      : "nav flex-column collapse"
                  }
                >
                  <Link href="/user-organizations" className="nav-link">
                    <i className="pli-identification-badge fs-5 me-2" />
                    <span className="ms-1">Mi perfil</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* End - Profile widget */}
          <div className="mainnav__categoriy py-3">
            <h6 className="mainnav__caption mt-0 px-3 fw-bold font">Menú</h6>
            <ul className="mainnav__menu nav flex-column">
              <li className="nav-item">
                <Link
                  href="../home"
                  className={
                    currentPath === "/home"
                      ? "nav-link mininav-toggle collapsed active"
                      : "nav-link mininav-toggle collapsed"
                  }
                >
                  <i className="pli-home fs-5 me-2" />
                  <span className="nav-label mininav-content ms-1">Inicio</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="../advertisements"
                  className={
                    currentPath === "/advertisements"
                      ? "nav-link mininav-toggle collapsed active"
                      : "nav-link mininav-toggle collapsed"
                  }
                >
                  <i className="pli-user fs-5 me-2" />
                  <span className="nav-label mininav-content ms-1">
                    Anuncios
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="../companies"
                  className={
                    currentPath === "/companies"
                      ? "nav-link mininav-toggle collapsed active"
                      : "nav-link mininav-toggle collapsed"
                  }
                >
                  <i className="pli-digital-drawing fs-5 me-2" />
                  <span className="nav-label mininav-content ms-1">
                    Compañías
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="../vehicles"
                  className={
                    currentPath === "/vehicles"
                      ? "nav-link mininav-toggle collapsed active"
                      : "nav-link mininav-toggle collapsed"
                  }
                >
                  <i className="pli-car fs-5 me-2" />
                  <span className="nav-label mininav-content ms-1">
                    Vehículos
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* End - Navigation menu */}
        {/* Bottom navigation menu */}
        <div className="mainnav__bottom-content border-top pb-2">
          <ul id="mainnav" className="mainnav__menu nav flex-column">
            <li className="nav-item ">
              <a
                onClick={() => {
                  logout();
                  signOut();
                }}
                className="nav-link mininav-toggle collapsed"
                aria-expanded="false"
              >
                <i className="pli-unlock fs-5 me-2" />
                <span className="nav-label ms-1">Logout</span>
              </a>
            </li>
          </ul>
        </div>
        {/* End - Bottom navigation menu */}
      </div>
    </nav>
  );
};

export default SideBar;
