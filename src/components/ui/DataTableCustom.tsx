import { FC, useState, useEffect } from "react";
import React from "react";
import MUIDataTable, {
  MUIDataTableOptions,
  MUIDataTableColumn,
} from "mui-datatables";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/styles";
import { Button, Typography, useMediaQuery } from "@mui/material";

interface Props {
  data: any;
  columns: any;
  buttons?: React.ReactNode;
}

const DataTableCustom: FC<Props> = ({ data, columns, buttons }) => {
  const theme: any = useTheme();
  const xssize = useMediaQuery(theme.breakpoints.only("xs"));
  const smsize = useMediaQuery(theme.breakpoints.down("sm"));
  const mdsize = useMediaQuery(theme.breakpoints.only("md"));
  const lgsize = useMediaQuery(theme.breakpoints.only("lg"));
  const xlsize = useMediaQuery(theme.breakpoints.only("xl"));

  const options: MUIDataTableOptions = {
    // ... your options definition
    textLabels: {
      body: {
        noMatch: "No se encontró información",
        toolTip: "Ordenar",
      },
      pagination: {
        next: "Siguiente",
        previous: "Anterior",
        rowsPerPage: "Filas por página:",
        displayRows: "de",
      },
      toolbar: {
        search: "Buscar",
        downloadCsv: "Descargar CSV",
        print: "Imprimir",
        viewColumns: "Vista de columnas",
        filterTable: "Filtro",
      },
      filter: {
        all: "Todos",
        title: "Filtros",
        reset: "Reestablecer",
      },
      viewColumns: {
        title: "Mostrar Columnas",
        titleAria: "Mostrar/Ocultar Columnas de tabla",
      },
      selectedRows: {
        text: "Filas seleccionadas",
        delete: "Borrar",
        deleteAria: "Borrar columnas seleccionadas",
      },
    },
    elevation: 0,
    responsive: "simple",
    customToolbar: () => {
      return <>{buttons}</>;
    },
    selectableRowsHideCheckboxes: true,
    // isLoading: ,
    // setLoading: (isLoading: boolean) => {
    //   if (isLoading) {
    //     return (
    //       <div style={{ display: "flex", justifyContent: "center" }}>
    //         <CircularProgress />
    //       </div>
    //     );
    //   } else {
    //     return null;
    //   }
    // },
  };

  /* const options = {
    setLoading: (isLoading: boolean) => {
      if (isLoading) {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        );
      } else {
        return null;
      }
    },
    selectableRowsHideCheckboxes: true,
  }; */

  return (
    <>
      <div style={{ width: "100%" }}>
        <MUIDataTable
          title={""}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </>
  );
};

export default DataTableCustom;
