import { Schedule } from "@/types/Schedule";
import { Grid } from "@mui/material";
import React, { useState } from "react";

interface Props {
  schedule: Schedule;
  setSchedule: React.Dispatch<React.SetStateAction<Schedule>>;
}

const WeekSchedule: React.FC<Props> = ({ schedule, setSchedule }) => {
  const daysOfWeek = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  const [activeDay, setActiveDay] = useState<string | null>(null);

  const handleEntryHourChange = (dia: string, entrada: string) => {
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [dia]: { ...(prevSchedule[dia] || {}), entrada },
    }));
  };

  const handleExitHourChange = (dia: string, salida: string) => {
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [dia]: { ...(prevSchedule[dia] || {}), salida },
    }));
  };
  const renderDayFields = () => {
    return daysOfWeek.map((day, index) => (
      <Grid key={day + index} container>
        {activeDay === day && (
          <>
            <Grid item xs={6} p={2}>
              <label className="form-label">Hora de entrada</label>
              <input
                type="time"
                className="form-control"
                placeholder="Hora de entrada"
                value={schedule[day]?.entrada || ""}
                onChange={(e) => handleEntryHourChange(day, e.target.value)}
              />
            </Grid>
            <Grid item xs={6} p={2}>
              <label className="form-label">Hora de salida</label>
              <input
                className="form-control"
                type="time"
                placeholder="Hora de salida"
                value={schedule[day]?.salida || ""}
                onChange={(e) => handleExitHourChange(day, e.target.value)}
              />
            </Grid>
          </>
        )}
      </Grid>
    ));
  };

  const renderDayButtons = () => {
    return daysOfWeek.map((day) => (
      <div key={day} className="mx-2">
        <button
          type="button"
          className={activeDay === day ? "btn btn-info active" : "btn btn-info"}
          onClick={() => setActiveDay(day)}
        >
          {day}
        </button>
      </div>
    ));
  };

  const handleSave = () => {
    const json = JSON.stringify(schedule);
    // Here you can save the JSON to a file, send it to an API, or perform any other desired action.
    console.log(json);
  };

  return (
    <div>
      <Grid className="d-flex justify-content-center" container>
        {renderDayButtons()}
      </Grid>
      {renderDayFields()}
    </div>
  );
};

export default WeekSchedule;
