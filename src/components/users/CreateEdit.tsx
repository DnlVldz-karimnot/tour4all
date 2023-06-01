import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldAttributes } from "formik";
import * as Yup from "yup";
import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { Role } from "@/types/Role";
import { createUser, updateUser } from "@/services/UsersService";
import { notify } from "@/utils/constants";
import { Responsepetition } from "@/types/Responsepetition";
import { Carrer } from "@/types/Carrers";
import { getAllCarrers } from "@/services/CarrersService";
import { upload } from "@/services/S3Service";
import {
  createAdvertisement,
  updateAdvertisement,
} from "@/services/AdvertismentService";

interface FormValues {
  nombre: string;
  email: string;
  password: string;
  ape_pat: string;
  ape_mat: string;
}

interface Props {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  type: string;
  user?: any;
  updateTable?: any;
  roles: Role[];
  open: boolean;
  handleClose?: any;
}

const CreateEdit: React.FC<Props> = ({
  type,
  user,
  updateTable,
  roles,
  open,
  handleClose,
}) => {
  const validationSchema = Yup.object().shape({
    description: Yup.string().required("Descripción es requerida"),
    expirationDate: Yup.string().required("Fecha de vencimiento es requerida"),
    isPaid: Yup.boolean().required("Campo requerido"),
    link: Yup.string().required("URL inválida"),
    title: Yup.string().required("Título es requerido"),
  });

  const initialValues = {
    description: user?.description || "",
    expirationDate: user?.expirationDate || "",
    isPaid: user?.isPaid || false,
    link: user?.link || "",
    title: user?.title || "",
  };

  const [role, setRole] = useState(0);
  const [carrerSelect, setCarrerSelect] = useState<Carrer[]>([]);
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
    let data = null;
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
        data = {
          ...values,
          photo: key,
        };
        await createAdvertisement(data);
        notify("success", "Se ha creado exitosamente");
      }

      if (type === "edit") {
        data = {
          ...values,
        };

        await updateAdvertisement(user.id, data);
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
        <DialogTitle>Anuncios</DialogTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched, handleChange, values }) => (
            <Form>
              <DialogContent>
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
                  name="expirationDate"
                  label="Fecha de vencimiento"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.expirationDate && errors.expirationDate ? (
                      <ErrorMessage name="expirationDate" />
                    ) : (
                      ""
                    )
                  }
                  error={
                    touched.expirationDate && errors.expirationDate
                      ? true
                      : false
                  }
                  onChange={handleChange}
                />

                <Field
                  as={TextField}
                  disabled={false}
                  name="link"
                  label="Enlace"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.link && errors.link ? (
                      <ErrorMessage name="link" />
                    ) : (
                      ""
                    )
                  }
                  error={touched.link && errors.link ? true : false}
                  onChange={handleChange}
                />

                <Field
                  as={TextField}
                  disabled={false}
                  name="title"
                  label="Título"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.title && errors.title ? (
                      <ErrorMessage name="title" />
                    ) : (
                      ""
                    )
                  }
                  error={touched.title && errors.title ? true : false}
                  onChange={handleChange}
                />
                <input
                  type={"checkbox"}
                  name="isPaid"
                  className="form-check-input"
                  id="isPaid"
                  onChange={handleChange}
                />
                <label htmlFor="isPaid">¿Es pagado?</label>

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
                  {imageUrl && (
                    <img src={imageUrl} width="200vw" alt="Preview" />
                  )}
                </Grid>
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

export default CreateEdit;
