import { FC, useState, useEffect } from "react";
import MainLayout from "@/components/layout/main";
import withAuth from "./auth";
import { Alert, Button, TextField, Typography } from "@mui/material";
import CreateEdit from "@/components/users/CreateEdit";
import React from "react";
import { deleteAdvertisement } from "@/services/AdvertismentService";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PreviewIcon from "@mui/icons-material/Preview";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Role } from "@/types/Role";
import { getAllRoles } from "@/services/RolesService";
import CircularProgress from "@mui/material/CircularProgress";
import DataTableCustom from "@/components/ui/DataTableCustom";
import { notify } from "@/utils/constants";
import { Responsepetition } from "@/types/Responsepetition";
import { getAllAdvertisement } from "@/services/AdvertismentService";
import { Advertisement } from "@/types/Advertisement";

interface Props {
  data: any;
}

const Advertisements: FC = () => {
  const [Advertisements, setAdvertisements] = useState([]);
  const [roles, setRoles] = React.useState<Role[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedAdvertisement, setSelectedAdvertisement] =
    useState<Advertisement | null>();
  const [type, setType] = useState("");
  const [errorPage, setErrorPage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getRoles = async () => {
    const data: Role[] = await getAllRoles();
    setRoles(data);
  };

  const createClick = async () => {
    setType("create");
    setSelectedAdvertisement(null);
    handleClickOpen();
  };

  const viewClick = async (result: Advertisement) => {
    setType("view");
    setSelectedAdvertisement(result);
    handleClickOpen();
  };

  const editClick = async (result: Advertisement) => {
    setType("edit");
    setSelectedAdvertisement(result);
    handleClickOpen();
  };
  const deleteClick = async (result: Advertisement) => {
    const id: any = result.id;
    try {
      await deleteAdvertisement(id);
      getAdvertisements();
      notify("success", "Se ha eliminado");
    } catch (error) {
      notify("success", "Error al eliminar");
    }
  };

  useEffect(() => {
    getAdvertisements();
  }, []);

  /* useEffect(() => {
    setAdvertisements(data);
  }, [data]); */

  const getAdvertisements = async () => {
    let { data, state, error }: Responsepetition = await getAllAdvertisement();
    if (state) {
      console.log(data.data);
      setAdvertisements(data.data);
    } else {
      setAdvertisements([]);
      setErrorPage(error.message);
    }
  };

  const columns = [
    { name: "description", label: "Descripción" },
    { name: "expirationDate", label: "Fecha de término" },
    {
      name: "Imagen",
      label: "Imagen",
      options: {
        customBodyRenderLite: (index: number) => {
          const result: Advertisement = Advertisements[index];
          return (
            <>
              <img src={result.imageUrl} width={"80vw"} />
            </>
          );
        },
      },
    },
    {
      name: "Acciones",
      Label: "Acciones",
      options: {
        customBodyRenderLite: (index: number) => {
          const result: Advertisement = Advertisements[index];
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
                        USUARIOS
                      </Typography>
                    </li>
                  </ol>
                </nav>

                <div className="content__boxed">
                  <div className="card">
                    <div className="card-body flex-fill ms-md-4">
                      <DataTableCustom
                        data={Advertisements}
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
        user={selectedAdvertisement}
        roles={roles}
        updateTable={getAdvertisements}
        open={open}
        handleClose={handleClose}
      ></CreateEdit>
    </>
  );
};

export default withAuth(Advertisements);
