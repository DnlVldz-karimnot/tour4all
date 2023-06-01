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
import { Carrer } from "@/types/Carrers";
import { deleteCarrer, getAllCarrers } from "@/services/CarrersService";
import CreateEditCarrer from "@/components/carrers/CreateEditCarrer";
import { getAllCompany } from "@/services/CompanyService";

interface Props {
  data: any;
}

const Carrers: FC = () => {
  const [carrers, setCarrers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState<any | null>();
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

  const viewClick = async (result: Carrer) => {
    setType("view");
    setSelectedOrg(result);
    handleClickOpen();
  };

  const editClick = async (result: Carrer) => {
    setType("edit");
    setSelectedOrg(result);
    handleClickOpen();
  };
  const deleteClick = async (result: Carrer) => {
    const id: any = result.id;
    try {
      await deleteCarrer(id);
      getCarreras();
      notify("success", "Se ha eliminado");
    } catch (error) {
      notify("success", "Error al eliminar");
    }
  };

  useEffect(() => {
    getCarreras();
  }, []);

  /* useEffect(() => {
    setUsers(data);
  }, [data]); */

  const getCarreras = async () => {
    let { data, state, error }: Responsepetition = await getAllCompany();
    if (state) {
      setCarrers(data.data);
    } else {
      setCarrers([]);
      setErrorPage(error.message);
    }
  };

  const columns = [
    { name: "name", label: "Nombre" },
    { name: "description", label: "Descripción" },
    { name: "email", label: "Email" },

    {
      name: "Acciones",
      Label: "Acciones",
      options: {
        customBodyRenderLite: (index: number) => {
          const result: Organizacion = carrers[index];
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
                        Compañias
                      </Typography>
                    </li>
                  </ol>
                </nav>

                <div className="content__boxed">
                  <div className="card">
                    <div className="card-body flex-fill ms-md-4">
                      <DataTableCustom
                        data={carrers}
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
      <CreateEditCarrer
        type={type}
        carrer={selectedOrg}
        updateTable={getCarreras}
        open={open}
        handleClose={handleClose}
      ></CreateEditCarrer>
    </>
  );
};

export default withAuth(Carrers);
