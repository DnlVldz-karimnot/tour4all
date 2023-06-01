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
import { Alumno } from "@/types/Alumno";
import { deleteAlumno, getAllAlumnos } from "@/services/AlumnoService";
import CreateEdit from "@/components/alumnos/CreateEdit";
import { deleteVehicle, getAllVehicle } from "@/services/VehicleService";

interface Props {
  data: any;
}

const Students: FC = () => {
  const [users, setAlumnos] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedAlumno, setSelectedAlumno] = useState<Alumno | null>();
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
    setSelectedAlumno(null);
    handleClickOpen();
  };

  const viewClick = async (result: Alumno) => {
    setType("view");
    setSelectedAlumno(result);
    handleClickOpen();
  };

  const editClick = async (result: Alumno) => {
    setType("edit");
    setSelectedAlumno(result);
    handleClickOpen();
  };
  const deleteClick = async (result: Alumno) => {
    const id: any = result.id;
    try {
      await deleteVehicle(id);
      getAlumnos();
      notify("success", "Se ha eliminado");
    } catch (error) {
      notify("success", "Error al eliminar");
    }
  };

  useEffect(() => {
    getAlumnos();
  }, []);

  /* useEffect(() => {
    setAlumnos(data);
  }, [data]); */

  const getAlumnos = async () => {
    let { data, state, error }: Responsepetition = await getAllVehicle();
    console.log(data);
    if (state) {
      setAlumnos(data.data);
    } else {
      setAlumnos([]);
      setErrorPage(error.message);
    }
  };

  const columns = [
    { name: "brand", label: "Marca" },
    { name: "kilometers", label: "KM" },
    { name: "licensePlate", label: "Placas" },
    { name: "model", label: "Modelo" },
    {
      name: "Acciones",
      Label: "Acciones",
      options: {
        customBodyRenderLite: (index: number) => {
          const result: Alumno = users[index];
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
                        VEHÍCULOS
                      </Typography>
                    </li>
                  </ol>
                </nav>

                <div className="content__boxed">
                  <div className="card">
                    <div className="card-body flex-fill ms-md-4">
                      <DataTableCustom
                        data={users}
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
        alumno={selectedAlumno}
        updateTable={getAlumnos}
        open={open}
        handleClose={handleClose}
      ></CreateEdit>
    </>
  );
};

export default withAuth(Students);
