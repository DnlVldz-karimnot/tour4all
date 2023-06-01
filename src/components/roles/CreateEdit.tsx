import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldAttributes } from "formik";
import * as Yup from "yup";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { User } from "@/types/User";
import { Role } from "@/types/Role";
import { BoxCheckBoxs } from "./BoxCheckBoxs";
import { createRole, updateRole } from "@/services/RolesService";
import { useEffect } from "react";
import { notify } from "@/utils/constants";
import { Responsepetition } from "@/types/Responsepetition";

interface FormValues {
  name: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Nombre requerido"),
});

interface Props {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  type: string;
  updateTable?: any;
  role?: any;
  open: boolean;
  handleClose?: any;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CreateEdit: React.FC<Props> = ({
  type,
  role,
  updateTable,
  open,
  handleClose,
}) => {
  const [value, setValue] = React.useState(0);
  const [permits, setPermits] = React.useState<string[]>([]);

  useEffect(() => {
    console.log("Me renderice CreateEdit");
    if (role) {
      setPermits(role.permissions);
    } else {
      setPermits([]);
    }
  }, []);

  useEffect(() => {
    if (role) {
      setPermits(role.permissions);
    } else {
      setPermits([]);
    }
  }, [role]);

  const handleChangePermits = (newdata: string[]) => {
    setPermits(newdata);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSubmit = async (values: FormValues, actions: any) => {
    const data = {
      ...values,
      id: role ? role.id : "",
      permissions: permits,
    };

    try {
      if (type === "create") {
        await createRole(data);
        updateTable();
        notify("success", "Se ha creado exitosamente");
      }

      if (type === "edit") {
        await updateRole(role.id, data);
        updateTable();
        notify("success", "Se ha actualizado");
      }
      handleClose();
    } catch (error) {
      notify("error", "Ha sucedido un error");
    }
  };

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Roles</DialogTitle>
        <Formik
          initialValues={{
            name: role ? role.name : "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched, handleChange }) => (
            <Form>
              <DialogContent>
                <Field
                  as={TextField}
                  disabled={type == "view"}
                  name="name"
                  label="Nombre"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.name && errors.name ? (
                      <ErrorMessage name="name" />
                    ) : (
                      ""
                    )
                  }
                  error={touched.name && errors.name ? true : false}
                  onChange={handleChange}
                />

                <Typography className="mt-5 mb-4" variant="h6">
                  Permisos
                </Typography>
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="Permisos" />
                      {/* <Tab label="Venta" />
                      <Tab label="Configuración" /> */}
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <FormGroup>
                      <BoxCheckBoxs
                        selected={permits}
                        onChange={handleChangePermits}
                        isdisable={type == "view" ? true : false}
                      />
                    </FormGroup>
                  </TabPanel>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancelar
                </Button>
                <Button type="submit" color="primary" disabled={isSubmitting}>
                  Guardar
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default CreateEdit;
