import {
  rl,
  vecUsers,
  appointmentVector,
} from "../../utils/readlineModule.mjs";
import { Patients } from "../../models/Patients.mjs";
import { Clinic } from "../../models/Clinic.mjs";
import { exibirMenuClinica } from "../exibirMenuClinica.mjs";
import { lerOpcaoClinic } from "../lerOpcaoClinic.mjs";

var appointment = new Clinic();

function dataAndTimeStart(cpf){
  try{
    rl.question("Data da consulta: ", (appointmentDate)=>{
      rl.question("Hora inicial: ", (appointmentTimeStart)=>{
        appointment.cancelAppointment(cpf, appointmentDate, appointmentTimeStart);
        exibirMenuClinica();
        lerOpcaoClinic();
      })
    })
  }catch(error){
    console.log(error);
  }
}

function askCpf(){
  try {
    rl.question(
      "Digite o CPF: ",
      (cpf) => {
        if(!appointment.registeredPatient(cpf)){
          askCpf();
        }else{
          dataAndTimeStart(cpf)
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}

function cancelAppointment() {
  try {
    askCpf();
  } catch (error) {
    console.log(error);
  }
}

export { cancelAppointment };
