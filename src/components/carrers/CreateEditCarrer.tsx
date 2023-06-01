import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldAttributes } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
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
import { Role } from "@/types/Role";
import { notify, phoneRegExp } from "@/utils/constants";
import { Responsepetition } from "@/types/Responsepetition";
import { createCarrer, updateCarrer } from "@/services/CarrersService";
import { createCompany, updateCompany } from "@/services/CompanyService";

interface Props {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  type: string;
  carrer?: any;
  updateTable?: any;
  open: boolean;
  handleClose?: any;
}

const CreateEditCarrer: React.FC<Props> = ({
  type,
  carrer,
  updateTable,
  open,
  handleClose,
}) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nombre es requerido"),
    picture: Yup.string().url("URL de imagen inválida"),
    description: Yup.string().required("Descripción es requerida"),
    address: Yup.string().required("Dirección es requerida"),
    phone: Yup.string().required("Teléfono es requerido"),
    email: Yup.string().email("Email inválido").required("Email es requerido"),
  });

  const handleSubmit = async (values: any, actions: any) => {
    const data = {
      ...values,
      id: carrer ? carrer.id : null,
    };

    try {
      if (type === "create") {
        delete data.id;
        await createCompany(data);
        notify("success", "Se ha creado exitosamente");
      }

      if (type === "edit") {
        delete data.id;
        await updateCompany(carrer.id, data);
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
        <DialogTitle>Compañia</DialogTitle>
        <Formik
          initialValues={{
            name: carrer?.name || "",
            picture: carrer?.picture || "",
            description: carrer?.description || "",
            address: carrer?.address || "",
            phone: carrer?.phone || "",
            email: carrer?.email || "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched, handleChange, values }) => (
            <Form>
              <DialogContent>
                <Field
                  as={TextField}
                  disabled={false}
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

                <Field
                  as={TextField}
                  disabled={false}
                  name="picture"
                  label="URL de la imagen"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.picture && errors.picture ? (
                      <ErrorMessage name="picture" />
                    ) : (
                      ""
                    )
                  }
                  error={touched.picture && errors.picture ? true : false}
                  onChange={handleChange}
                />

                <Field
                  as={TextField}
                  disabled={false}
                  name="description"
                  label="Descripción"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.description && errors.description ? (
                      <ErrorMessage name="description" />
                    ) : (
                      ""
                    )
                  }
                  error={
                    touched.description && errors.description ? true : false
                  }
                  onChange={handleChange}
                />

                <Field
                  as={TextField}
                  disabled={false}
                  name="address"
                  label="Dirección"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.address && errors.address ? (
                      <ErrorMessage name="address" />
                    ) : (
                      ""
                    )
                  }
                  error={touched.address && errors.address ? true : false}
                  onChange={handleChange}
                />

                <Field
                  as={TextField}
                  disabled={false}
                  name="phone"
                  label="Teléfono"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.phone && errors.phone ? (
                      <ErrorMessage name="phone" />
                    ) : (
                      ""
                    )
                  }
                  error={touched.phone && errors.phone ? true : false}
                  onChange={handleChange}
                />

                <Field
                  as={TextField}
                  disabled={false}
                  name="email"
                  label="Email"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.email && errors.email ? (
                      <ErrorMessage name="email" />
                    ) : (
                      ""
                    )
                  }
                  error={touched.email && errors.email ? true : false}
                  onChange={handleChange}
                />
              </DialogContent>
              <DialogActions>
                <Button type="button" color="primary">
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

export default CreateEditCarrer;
