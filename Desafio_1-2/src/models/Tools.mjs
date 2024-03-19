class Tools {
  patientsList(pacientes) {}
  agendaList(agenda) {
    console.log("------------------------------------------------");
    console.log("Data\t\tH.Ini\t\tH.Fim\t\tNome\t\t\tDt.Nasc.");
    console.log("------------------------------------------------");

    agenda.forEach((appointment) => {
      const [date, startTime, endTime, time, name, dateOfBirth] = appointment;
      console.log(
        `${date}\t${startTime}\t${endTime}\t${time}\t${name.padEnd(
          25
        )}${dateOfBirth}`
      );
    });

    console.log("------------------------------------------------");
  }
}

export { Tools };
