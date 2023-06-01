import Image from "next/image";
import logo from "../../assets/img/logob2.png";
import { useEffect, useState } from "react";
import { _apiUrl } from "@/utils/constants";
import Link from "next/link";

import ulsaLogo from "/public/ulsablanca.png";
import { useSidebarStore } from "@/store/sidebarStore";

const Header = () => {
  const { open, toggleSideBar } = useSidebarStore();
  const [authenticatedUser, setAuthenticatedUser] = useState({
    name: "Name default",
    organization: {
      logo: "https://cdn.shopify.com/s/files/1/0253/8618/8834/files/MDoris_Azul_256x.png",
      name: "Image default",
    },
  });

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
    <>
      <header className="header">
        <div className="header__inner">
          {/* Brand */}
          <div className="header__brand">
            <div
              className="brand-wrap"
              style={{ flex: 1, justifyContent: "center" }}
            >
              {/* Brand logo */}
              <Link href="/home" className=" stretched-link">
                <Image
                  src={ulsaLogo.src}
                  alt={"Logo Salle"}
                  width={100}
                  height={35}
                />
              </Link>
              {/* You can also use IMG or SVG instead of a text element. */}
            </div>
          </div>
          {/* End - Brand */}
          <div className="header__content">
            {/* Content Header - Left Side: */}
            <div className="header__content-start">
              {/* Navigation Toggler */}
              <button
                type="button"
                onClick={() => toggleSideBar(!open)}
                className="nav-toggler header__btn btn btn-icon btn-sm"
                aria-label="Nav Toggler"
              >
                <i className="psi-list-view" />
              </button>
              {/* Searchbox */}
            </div>
            {/* End - Content Header - Left Side */}
            {/* Content Header - Right Side: */}
            <div className="header__content-end">
              {/* Notification Dropdown */}
              <div className="dropdown">
                {/* Toggler */}
                <button
                  className="header__btn btn btn-icon btn-sm"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-label="Notification dropdown"
                  aria-expanded="false"
                >
                  <span className="d-block position-relative">
                    <i className="psi-bell" />
                  </span>
                </button>
                {/* Notification dropdown menu */}
                <div className="dropdown-menu dropdown-menu-end w-md-300px">
                  <div className="border-bottom px-3 py-2 mb-3">
                    <h5>Notificaciones</h5>
                  </div>
                  <div className="list-group list-group-borderless">
                    {/* List item */}
                    <div className="list-group-item list-group-item-action d-flex align-items-start mb-3">
                      <div className="flex-shrink-0 me-3">
                        <i className="psi-data-settings text-muted fs-2" />
                      </div>
                      <div className="flex-grow-1 ">
                        <a
                          href="#"
                          className="h6 d-block mb-0 stretched-link text-decoration-none"
                        >
                          Movimiento en almacen
                        </a>
                        <small className="text-muted">
                          Se ha movido a almacen 2.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End - Notification dropdown */}
              {/* User dropdown */}
              <div className="dropdown">
                {/* Toggler */}
                <button
                  className="header__btn btn btn-icon btn-sm"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-label="User dropdown"
                  aria-expanded="false"
                >
                  <i className="psi-male" />
                </button>
                {/* User dropdown menu */}
                <div className="dropdown-menu dropdown-menu-end w-md-450px">
                  {/* User dropdown header */}
                  <div className="d-flex align-items-center border-bottom px-3 py-2">
                    <div className="flex-shrink-0">
                      <img
                        className="img-sm rounded-circle"
                        src="./assets/img/profile-photos/1.png"
                        alt="Profile Picture"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-0">Aaron Chavez</h5>
                      <span className="text-muted fst-italic">
                        aaron_chavez@example.com
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      {/* User menu link */}
                      <div className="list-group list-group-borderless h-100 py-3">
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          <i className="pli-unlock fs-5 me-2" /> Logout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End - User dropdown */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
