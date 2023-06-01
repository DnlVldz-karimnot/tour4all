import {
  Button,
  DialogContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import WeekSchedule from "./WeekSchedule";
import { Schedule } from "@/types/Schedule";
import { FC, useEffect, useState } from "react";
import { ProcesoInterno } from "@/types/ProcesoInterno";
import { Responsepetition } from "@/types/Responsepetition";
import { updateProcesoInterno } from "@/services/ProcesoInternoService";
import { useLoadingStore } from "@/store/loadingPageStore";
import { notify } from "@/utils/constants";
import FileUpload from "./FileUpload";
import { getImage, upload } from "@/services/S3Service";

interface Props {
  procesoInterno: ProcesoInterno;
}

const CartaLiberacion: FC<Props> = ({ procesoInterno }) => {
  const validationSchema = Yup.object().shape({
    horas_liberadas: Yup.number()
      .min(0, "Necesita poner horas")
      .required("Horas requeridas"),
    firmado_cordinacion: Yup.boolean().required(
      "Firmado por coordinación requerida"
    ),
  });

  const { toggleLoading } = useLoadingStore();

  const [schedule, setSchedule] = useState<Schedule>({});
  const [file, setFile] = useState<File>();
  const [fileUrl, setFileUrl] = useState<string>();

  const handleSubmit = async (values: any, actions: any) => {
    toggleLoading(true);
    if (file) {
      const fd = new FormData();
      fd.append("file", file);

      const { data, state, error }: Responsepetition = await upload(fd);

      if (state) {
        console.log(data);
        values.file_id = data.id;
      }
    }
    let formdata = {
      ...values,
      horario: schedule,
    };
    const { data, state, error }: Responsepetition = await updateProcesoInterno(
      procesoInterno.id,
      formdata
    );
    if (state) {
      notify(
        "success",
        "Carta de aceptación guardada actualizado correctamente"
      );
    } else {
      notify("error", "Error al actualizar la carta de aceptación");
      console.log(error);
    }
    toggleLoading(false);
  };

  useEffect(() => {
    if (procesoInterno.horario) {
      fetchImage();
      setSchedule(procesoInterno.horario as Schedule);
    }
  }, []);

  const fetchImage = async () => {
    toggleLoading(true);
    if (procesoInterno.file_id) {
      const { data, state, error }: Responsepetition = await getImage(
        procesoInterno.file_id
      );

      if (state) {
        setFileUrl(data.url);
        console.log(data.url);
      }
    }
    toggleLoading(false);
  };

  return (
    <div>
      <Formik
        initialValues={{
          horas_liberadas: procesoInterno.horas_liberadas || "",
          firmado_cordinacion:
            Boolean(procesoInterno.firmado_cordinacion) || false,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched, handleChange, values }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <label className="form-label">Horas Liberadas</label>
                <input
                  className={
                    (errors.horas_liberadas &&
                      touched.horas_liberadas &&
                      "validated form-control is-invalid") ||
                    "form-control"
                  }
                  type={"text"}
                  name="horas_liberadas"
                  value={values.horas_liberadas}
                  onChange={handleChange}
                />
                {errors.horas_liberadas && touched.horas_liberadas && (
                  <Typography color="red" variant="caption">
                    {errors.horas_liberadas}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={6}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={values.firmado_cordinacion}
                    name="firmado_cordinacion"
                    value={values.firmado_cordinacion.toString()}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    Firmado por coordinación
                  </label>
                </div>
              </Grid>
              <FileUpload
                file={file}
                fileUrl={fileUrl}
                setFile={setFile}
                setFileUrl={setFileUrl}
              />
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant={"contained"}
                  color="primary"
                  disabled={isSubmitting}
                >
                  Guardar
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CartaLiberacion;
