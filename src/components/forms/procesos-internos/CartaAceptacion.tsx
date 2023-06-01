import {
  Button,
  DialogContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
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

const CartaAceptacion: FC<Props> = ({ procesoInterno }) => {
  const validationSchema = Yup.object().shape({
    horas_liberadas: Yup.number()
      .min(0, "Necesita poner horas")
      .required("Horas requeridas"),
    fecha_inicio: Yup.date().required("Fecha de inicio requerida"),
    fecha_termino: Yup.date().required("Fecha de termino requerida"),
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
          fecha_inicio: procesoInterno.fecha_inicio || "",
          fecha_termino: procesoInterno.fecha_termino || "",
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
                <label className="form-label">Fecha de inicio</label>
                <input
                  type={"date"}
                  className={
                    (errors.fecha_inicio &&
                      touched.fecha_inicio &&
                      "validated form-control is-invalid") ||
                    "form-control"
                  }
                  name="fecha_inicio"
                  value={values.fecha_inicio}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <label className="form-label">Fecha de término</label>
                <input
                  type={"date"}
                  className={
                    (errors.fecha_termino &&
                      touched.fecha_termino &&
                      "validated form-control is-invalid") ||
                    "form-control"
                  }
                  name="fecha_termino"
                  value={values.fecha_termino}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} justifyContent={"center"} m={2}>
                <WeekSchedule schedule={schedule} setSchedule={setSchedule} />
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

export default CartaAceptacion;
