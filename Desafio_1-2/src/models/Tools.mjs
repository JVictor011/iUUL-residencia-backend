class Tools {
  patientsList(pacientes) {
    console.log("------------------------------------------------");
    console.log("CPF\t\tNome\t\tDt.Nasc.\t\tIdade");
    console.log("------------------------------------------------");

    pacientes.forEach((paciente) => {
      const [
        cpf,
        name,
        dateOfBirth,
        age,
        hourInicial,
        hourFinal,
        appointmentDate,
      ] = paciente;
      console.log(`${cpf}\t${name.padEnd(25)}${dateOfBirth}\t${age}`);
      if (appointmentDate !== "") {
        console.log(`\t\tAgendado para:${appointmentDate}`);
        console.log(`\t\t${hourInicial} as ${hourFinal}!`);
      }
    });

    console.log("------------------------------------------------");
  }
  agendaList(agenda) {
    console.log("------------------------------------------------");
    console.log("Data\t\tH.Ini\t\tH.Fim\t\tNome\t\t\tDt.Nasc.");
    console.log("------------------------------------------------");

    agenda.forEach((appointment) => {
      const [date, startTime, endTime, time, name, dateOfBirth] = appointment;
      const appointmentDate = new Date(date);
      const startPeriod = new Date(startDate);
      const endPeriod = new Date(endDate);

      if (appointmentDate >= startPeriod && appointmentDate <= endPeriod) {
        console.log(
          `${date}\t${startTime}\t${endTime}\t${time}\t${name.padEnd(
            25
          )}${dateOfBirth}`
        );
      }
    });

    console.log("------------------------------------------------");
  }
}

export { Tools };
