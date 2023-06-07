import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { notify } from "@/utils/constants";
import { Responsepetition } from "@/types/Responsepetition";
import { Carrer } from "@/types/Carrers";
import { getAllCarrers } from "@/services/CarrersService";
import { upload } from "@/services/S3Service";
import { createUser, updateUser } from "@/services/UsersService";

interface Props {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  type: string;
  user?: any;
  updateTable?: any;
  open: boolean;
  handleClose?: any;
}

const CreateEdit: React.FC<Props> = ({
  type,
  user,
  updateTable,
  open,
  handleClose,
}) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido"),
    lastName: Yup.string().required("El apellido es requerido"),
    secondLastName: Yup.string().required("El segundo apellido es requerido"),
    phone: Yup.string()
      .required("El teléfono es requerido")
      .matches(/^[0-9]+$/, "El teléfono solo debe contener números"),
    email: Yup.string()
      .required("El correo electrónico es requerido")
      .email("Ingresa un correo electrónico válido"),
    isActive: Yup.boolean().required("Indica si el usuario está activo o no"),
  });

  const [carrers, setCarrers] = useState<Carrer[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File>();
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    if (user) {
      setImageUrl(user.imageUrl);
    }
  }, [open]);

  const fetchCarrers = async () => {
    let { data, state, error }: Responsepetition = await getAllCarrers();
    if (state) {
      setCarrers(data);
    }
  };

  const handleSubmit = async (values: any, actions: any) => {
    let dataToSend = null;
    if (type === "view") return;

    try {
      if (type === "create") {
        let key = "";
        if (image) {
          const fd = new FormData();
          fd.append("file", image);
          const { data, state, error }: Responsepetition = await upload(fd);
          if (state) {
            console.log(data);
            key = data.id;
          }
        }
        dataToSend = {
          ...values,
          picture: key,
        };
        await createUser(dataToSend);
        notify("success", "Se ha creado exitosamente");
      }

      if (type === "edit") {
        if (values.password === "") {
          delete values.password;
        }
        let key = "";
        if (image) {
          const fd = new FormData();
          fd.append("file", image);
          const { data, state, error }: Responsepetition = await upload(fd);
          if (state) {
            console.log(data);
            key = data.id;
          }
          dataToSend = {
            ...values,
            picture: key,
          };
        } else {
          dataToSend = {
            ...values,
          };
        }

        await updateUser(user.id, dataToSend);
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
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Usuarios</DialogTitle>
        <Formik
          initialValues={{
            name: user ? user.name : "",
            lastName: user ? user.lastName : "",
            secondLastName: user ? user.secondLastName : "",
            phone: user ? user.phone : "",
            email: user ? user.email : "",
            password: "",
            isActive: user ? user.isActive : true,
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
                  name="lastName"
                  label="Apellido paterno"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.lastName && errors.lastName ? (
                      <ErrorMessage name="lastName" />
                    ) : (
                      ""
                    )
                  }
                  error={touched.lastName && errors.lastName ? true : false}
                  onChange={handleChange}
                />

                <Field
                  as={TextField}
                  disabled={false}
                  name="secondLastName"
                  label="Apellido materno"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.secondLastName && errors.secondLastName ? (
                      <ErrorMessage name="secondLastName" />
                    ) : (
                      ""
                    )
                  }
                  error={
                    touched.secondLastName && errors.secondLastName
                      ? true
                      : false
                  }
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
                  label="Correo electrónico"
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

                <Field
                  as={TextField}
                  disabled={false}
                  name="password"
                  label="Contraseña"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  type="password"
                  helperText={
                    touched.password && errors.password ? (
                      <ErrorMessage name="password" />
                    ) : (
                      ""
                    )
                  }
                  error={touched.password && errors.password ? true : false}
                  onChange={handleChange}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.isActive}
                      onChange={handleChange}
                      name="isActive"
                      color="primary"
                    />
                  }
                  label="¿Activo?"
                />
              </DialogContent>
              <Grid container justifyContent="center" alignItems="center">
                {type !== "view" ? (
                  <>
                    <Button variant="contained" onClick={handleButtonClick}>
                      <i className="pli-file-add"></i>
                      Subir imagen
                    </Button>
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileSelect}
                    />{" "}
                  </>
                ) : null}
              </Grid>

              <Grid container justifyContent="center" alignItems="center">
                {imageUrl && <img src={imageUrl} width="200vw" alt="Preview" />}
              </Grid>
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

export default CreateEdit;
