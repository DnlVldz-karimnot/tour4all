import { FC, useState, useEffect } from "react";
import MainLayout from "@/components/layout/main";
import withAuth from "./auth";
import { Alert, Button, TextField, Typography } from "@mui/material";
import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PreviewIcon from "@mui/icons-material/Preview";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DataTableCustom from "@/components/ui/DataTableCustom";
import { notify } from "@/utils/constants";
import { Responsepetition } from "@/types/Responsepetition";
import { Organizacion } from "@/types/Organization";
import { deleteOrg, getAllOrgs } from "@/services/OrganizationService";
import CreateEdit from "@/components/organizations/CreateEdit";

interface Props {
  data: any;
}

const Organizations: FC = () => {
  const [organizations, setOrganizations] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState<Organizacion | null>();
  const [type, setType] = useState("");
  const [errorPage, setErrorPage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createClick = async () => {
    setType("create");
    setSelectedOrg(null);
    handleClickOpen();
  };

  const viewClick = async (result: Organizacion) => {
    setType("view");
    setSelectedOrg(result);
    handleClickOpen();
  };

  const editClick = async (result: Organizacion) => {
    setType("edit");
    setSelectedOrg(result);
    handleClickOpen();
  };
  const deleteClick = async (result: Organizacion) => {
    const id: any = result.id;
    try {
      await deleteOrg(id);
      getOrgs();
      notify("success", "Se ha eliminado");
    } catch (error) {
      notify("success", "Error al eliminar");
    }
  };

  useEffect(() => {
    getOrgs();
  }, []);

  /* useEffect(() => {
    setUsers(data);
  }, [data]); */

  const getOrgs = async () => {
    let { data, state, error }: Responsepetition = await getAllOrgs();
    if (state) {
      setOrganizations(data);
    } else {
      setOrganizations([]);
      setErrorPage(error.message);
    }
  };

  const columns = [
    { name: "nombre", label: "Nombre" },
    { name: "nombre_dueno", label: "Titular" },
    { name: "direccion", label: "Dirección" },
    { name: "correo", label: "Correo" },
    { name: "telefono", label: "Teléfono" },
    {
      name: "Acciones",
      Label: "Acciones",
      options: {
        customBodyRenderLite: (index: number) => {
          const result: Organizacion = organizations[index];
          return (
            <>
              <div className="d-flex gap-3">
                <Button
                  variant={"text"}
                  color="primary"
                  onClick={() => editClick(result)}
                >
                  <BorderColorIcon />
                </Button>
                <Button
                  variant={"text"}
                  color="primary"
                  onClick={() => viewClick(result)}
                >
                  <PreviewIcon />
                </Button>
                <Button color="error" onClick={() => deleteClick(result)}>
                  <DeleteForeverIcon />
                </Button>
              </div>
            </>
          );
        },
      },
    },
  ];

  return (
    <>
      <MainLayout>
        <div className="content__header content__boxed overlapping">
          <div className="content__wrap">
            <div className="content__header content__boxed overlapping">
              <div className="content__wrap">
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="mb-0" style={{ margin: 0, padding: 0 }}>
                    <li
                      className="breadcrumb-item active font"
                      style={{ listStyle: "none" }}
                      aria-current="page"
                    >
                      <Typography sx={{ fontWeight: "bolder" }} mb={1}>
                        ORGANIZACIONES
                      </Typography>
                    </li>
                  </ol>
                </nav>

                <div className="content__boxed">
                  <div className="card">
                    <div className="card-body flex-fill ms-md-4">
                      <DataTableCustom
                        data={organizations}
                        columns={columns}
                        buttons={
                          <Button
                            variant={"contained"}
                            color="primary"
                            className="ms-2"
                            onClick={createClick}
                          >
                            <AddCircleOutlineIcon />
                          </Button>
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
      <CreateEdit
        type={type}
        organization={selectedOrg}
        updateTable={getOrgs}
        open={open}
        handleClose={handleClose}
      ></CreateEdit>
    </>
  );
};

export default withAuth(Organizations);
