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
}

const DataTableCustomSimple: FC<Props> = ({ data, columns }) => {
  const options: MUIDataTableOptions = {
    // ... your options definition
    textLabels: {
      body: {
        noMatch: "",
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
    selectableRowsHideCheckboxes: true,
    download: false,
    print: false,
  };

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

export default DataTableCustomSimple;
