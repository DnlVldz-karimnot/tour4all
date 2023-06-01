import MainLayout from "@/components/layout/main";
import withAuth from "./auth";
import { Button, Box, Typography } from "@mui/material";
import CreateEdit from "@/components/roles/CreateEdit";
import React from "react";
import { Role } from "@/types/Role";
import DataTableCustom from "@/components/ui/DataTableCustom";
import { deleteRole, getAllRoles } from "@/services/RolesService";
import { FC, useState, useEffect } from "react";
import PreviewIcon from "@mui/icons-material/Preview";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { notify } from "@/utils/constants";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

interface Props {
  data: any;
}

const Roles: FC = () => {
  const [roles, setRoles] = React.useState<Role[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>();
  const [type, setType] = useState("");

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

  useEffect(() => {
    getRoles();
  }, []);

  const deleteClick = async (result: Role) => {
    const id: any = result.id;
    try {
      await deleteRole(id);
      getRoles();
      notify("success", "Se ha eliminado");
    } catch (error) {
      notify("success", "Error al eliminar");
    }
  };

  const createClick = async () => {
    setType("create");
    setSelectedRole(null);
    handleClickOpen();
  };

  const viewClick = async (result: Role) => {
    setType("view");
    setSelectedRole(result);
    handleClickOpen();
  };

  const editClick = async (result: Role) => {
    setType("edit");
    setSelectedRole(result);
    handleClickOpen();
  };

  const columns = [
    { name: "name", label: "Nombre" },
    {
      name: "Acciones",
      Label: "Acciones",
      options: {
        customBodyRenderLite: (index: number) => {
          const result: Role = roles[index];

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
                        ROLES
                      </Typography>
                    </li>
                  </ol>
                </nav>
                <div className="content__boxed">
                  <div className="card">
                    <div className="card-body flex-fill ms-md-4 ">
                      <DataTableCustom
                        data={roles}
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
        role={selectedRole}
        updateTable={getRoles}
        open={open}
        handleClose={handleClose}
      ></CreateEdit>
    </>
  );
};

// export async function getServerSideProps() {

//   const data: Role[] = await getAllRoles();

//   return { props: { data } }
// }

export default withAuth(Roles);
