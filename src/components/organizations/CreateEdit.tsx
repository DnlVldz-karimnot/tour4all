import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldAttributes } from "formik";
import * as Yup from "yup";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { createOrg, updateOrg } from "@/services/OrganizationService";
import { notify, phoneRegExp } from "@/utils/constants";

interface FormValues {
  nombre: string;
  nombre_dueno: string;
  direccion: string;
  correo: string;
  telefono: string;
}

interface Props {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  type: string;
  organization?: any;
  updateTable?: any;
  open: boolean;
  handleClose?: any;
}

const CreateEdit: React.FC<Props> = ({
  type,
  organization,
  updateTable,
  open,
  handleClose,
}) => {
  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("Nombre requerido"),
    nombre_dueno: Yup.string().required("Nombre del dueño requerido"),
    direccion: Yup.string().required("Dirección requerida"),
    correo: Yup.string().email("Email inválido").required("Email requerido"),
    telefono: Yup.string()
      .required("El número de teléfono es obligatorio")
      .matches(
        phoneRegExp,
        "El número de teléfono debe ser un número de 10 dígitos sin espacios ni guiones"
      ),
  });

  useEffect(() => {
    if (organization) {
    }
  }, [open]);

  const handleSubmit = async (values: FormValues, actions: any) => {
    const data = {
      ...values,
      id: organization ? organization.id : null,
    };

    try {
      if (type === "create") {
        await createOrg(data);
        notify("success", "Se ha creado exitosamente");
      }

      if (type === "edit") {
        await updateOrg(organization.id, data);
        notify("success", "Se ha actualizado");
      }

      updateTable();
      handleClose();
    } catch (error) {
      notify("error", "Ha sucedido un error");
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Organización</DialogTitle>
        <Formik
          initialValues={{
            nombre: organization ? organization.nombre : "",
            nombre_dueno: organization ? organization.nombre_dueno : "",
            direccion: organization ? organization.direccion : "",
            correo: organization ? organization.correo : "",
            telefono: organization ? organization.telefono : "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched, handleChange, values }) => (
            <Form>
              <DialogContent>
                <Field
                  as={TextField}
                  disabled={type == "view"}
                  name="nombre"
                  label="Nombre"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.nombre && errors.nombre ? (
                      <ErrorMessage name="name" />
                    ) : (
                      ""
                    )
                  }
                  error={touched.nombre && errors.nombre ? true : false}
                  onChange={handleChange}
                />
                <Field
                  as={TextField}
                  disabled={type == "view"}
                  type="text"
                  name="nombre_dueno"
                  label="Nombre del dueño"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.nombre_dueno && errors.nombre_dueno ? (
                      <ErrorMessage name="email" />
                    ) : (
                      ""
                    )
                  }
                  error={
                    touched.nombre_dueno && errors.nombre_dueno ? true : false
                  }
                  onChange={handleChange}
                />

                <textarea
                  disabled={false}
                  style={{ fontSize: "1rem" }}
                  className="form-control"
                  name="direccion"
                  value={values.direccion}
                  rows={3}
                  placeholder="Dirección"
                  onChange={handleChange}
                />
                <Field
                  as={TextField}
                  disabled={type == "view"}
                  type="text"
                  name="correo"
                  label="Email"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.correo && errors.correo ? (
                      <ErrorMessage name="email" />
                    ) : (
                      ""
                    )
                  }
                  error={touched.correo && errors.correo ? true : false}
                  onChange={handleChange}
                />
                <Field
                  as={TextField}
                  disabled={type == "view"}
                  type="text"
                  name="telefono"
                  label="Teléfono"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.telefono && errors.telefono ? (
                      <ErrorMessage name="email" />
                    ) : (
                      ""
                    )
                  }
                  error={touched.telefono && errors.telefono ? true : false}
                  onChange={handleChange}
                />
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
