import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
import { notify, salleEmailRegExp, yearRegExp } from "@/utils/constants";
import { createVehicle, updateVehicle } from "@/services/VehicleService";
import { getAllCompany } from "@/services/CompanyService";

interface FormValues {
  matricula: string;
  ano_ingreso: string;
  email: string;
  email_personal: string;
  nombre: string;
  ape_pat: string;
  ape_mat: string;
}

interface Props {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  type: string;
  alumno?: any;
  updateTable?: any;
  open: boolean;
  handleClose?: any;
}

const CreateEdit: React.FC<Props> = ({
  type,
  alumno,
  updateTable,
  open,
  handleClose,
}) => {
  const [companies, setCompanies] = useState([]);
  const [companySelect, setCompanySelect] = useState(alumno?.companyId || "");

  useEffect(() => {
    setCompanySelect(alumno?.company?.id || "");
  }, [open]);

  const validationSchema = Yup.object().shape({
    brand: Yup.string().required("Marca es requerida"),
    model: Yup.string().required("Modelo es requerido"),
    year: Yup.number().required("Año es requerido"),
    licensePlate: Yup.string().required("Matrícula es requerida"),
    numberDoors: Yup.number().required("Número de puertas es requerido"),
    numberSeats: Yup.number().required("Número de asientos es requerido"),
    kilometers: Yup.number().required("Kilómetros es requerido"),
    type: Yup.string().required("Tipo de combustible es requerido"),
  });

  const initialValues = {
    brand: alumno?.brand || "",
    model: alumno?.model || "",
    year: alumno?.year || "",
    licensePlate: alumno?.licensePlate || "",
    numberDoors: alumno?.numberDoors || "",
    numberSeats: alumno?.numberSeats || "",
    kilometers: alumno?.kilometers || "",
    type: alumno?.type || "",
    companyId: alumno?.company?.id || "",
  };

  const handleSubmit = async (values: any, actions: any) => {
    let data = null;
    if (type === "view") return;

    try {
      if (type === "create") {
        data = {
          ...values,
          year: Number(values.year),
          numberDoors: Number(values.numberDoors),
          numberSeats: Number(values.numberSeats),
          kilometers: Number(values.kilometers),
          companyId: companySelect || -1,
        };
        await createVehicle(data);
        notify("success", "Se ha creado exitosamente");
      }

      if (type === "edit") {
        data = {
          ...values,
          year: Number(values.year),
          numberDoors: Number(values.numberDoors),
          numberSeats: Number(values.numberSeats),
          kilometers: Number(values.kilometers),
          companyId: companySelect || -1,
        };

        await updateVehicle(alumno.id, data);
        notify("success", "Se ha actualizado");
      }

      updateTable();
      handleClose();
    } catch (error) {
      notify("error", "Ha sucedido un error");
    }
  };

  const fetchCompanies = async () => {
    try {
      const response: any = await getAllCompany();
      setCompanies(response.data.data);
    } catch (error) {
      notify("error", "Ha sucedido un error");
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Alumnos</DialogTitle>
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
                  name="brand"
                  label="Marca"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.brand && errors.brand ? (
                      <ErrorMessage name="brand" />
                    ) : (
                      ""
                    )
                  }
                  error={touched.brand && errors.brand ? true : false}
                  onChange={handleChange}
                />

                <Field
                  as={TextField}
                  disabled={false}
                  name="model"
                  label="Modelo"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.model && errors.model ? (
                      <ErrorMessage name="model" />
                    ) : (
                      ""
                    )
                  }
                  error={touched.model && errors.model ? true : false}
                  onChange={handleChange}
                />

                <Field
                  as={TextField}
                  disabled={false}
                  name="year"
                  label="Año"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.year && errors.year ? (
                      <ErrorMessage name="year" />
                    ) : (
                      ""
                    )
                  }
                  error={touched.year && errors.year ? true : false}
                  onChange={handleChange}
                />

                <Field
                  as={TextField}
                  disabled={false}
                  name="licensePlate"
                  label="Matrícula"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.licensePlate && errors.licensePlate ? (
                      <ErrorMessage name="licensePlate" />
                    ) : (
                      ""
                    )
                  }
                  error={
                    touched.licensePlate && errors.licensePlate ? true : false
                  }
                  onChange={handleChange}
                />

                <Field
                  as={TextField}
                  disabled={false}
                  name="numberDoors"
                  label="Número de puertas"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.numberDoors && errors.numberDoors ? (
                      <ErrorMessage name="numberDoors" />
                    ) : (
                      ""
                    )
                  }
                  error={
                    touched.numberDoors && errors.numberDoors ? true : false
                  }
                  onChange={handleChange}
                />

                <Field
                  as={TextField}
                  disabled={false}
                  name="numberSeats"
                  label="Número de asientos"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.numberSeats && errors.numberSeats ? (
                      <ErrorMessage name="numberSeats" />
                    ) : (
                      ""
                    )
                  }
                  error={
                    touched.numberSeats && errors.numberSeats ? true : false
                  }
                  onChange={handleChange}
                />

                <Field
                  as={TextField}
                  disabled={false}
                  name="kilometers"
                  label="Kilómetros"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.kilometers && errors.kilometers ? (
                      <ErrorMessage name="kilometers" />
                    ) : (
                      ""
                    )
                  }
                  error={touched.kilometers && errors.kilometers ? true : false}
                  onChange={handleChange}
                />

                <Field
                  as={TextField}
                  disabled={false}
                  name="type"
                  label="Tipo de combustible"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText={
                    touched.type && errors.type ? (
                      <ErrorMessage name="type" />
                    ) : (
                      ""
                    )
                  }
                  error={touched.type && errors.type ? true : false}
                  onChange={handleChange}
                />
                <label className="form-label">Seleccionar organización</label>
                <select
                  className="form-select"
                  value={companySelect}
                  onChange={(e) => setCompanySelect(e.target.value)}
                >
                  <option value="">Seleccionar</option>
                  {companies.map((company: any, index: number) => (
                    <option key={index + "company"} value={company.id}>
                      {company.name}
                    </option>
                  ))}
                </select>
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
