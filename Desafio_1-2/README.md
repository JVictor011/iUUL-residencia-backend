# Documentação do Sistema de Administração da Agenda de um Consultório Odontológico

## Classes

### Classe Patients

#### Descrição

A classe `Patients` representa um conjunto de pacientes e fornece métodos para registrar e excluir pacientes, bem como validar informações como CPF e data de nascimento.

#### Importações

```javascript
import { rl, vecUsers, appointmentVector } from "../utils/readlineModule.mjs";
```

## Métodos

- `constructor()`: Construtor da classe `Patients`.
- `getCpf()`: Retorna o CPF do paciente.
- `getName()`: Retorna o nome do paciente.
- `getDateOfBirth()`: Retorna a data de nascimento do paciente.
- `set setCpf(cpf)`: Define o CPF do paciente.
- `set setName(name)`: Define o nome do paciente.
- `set setDateOfBirth(dateOfBirth)`: Define a data de nascimento do paciente.
- `validateName(name)`: Valida o nome do paciente, garantindo que tenha mais de 5 caracteres.
- `validateCpfLanght(cpf)`: Valida o comprimento do CPF, garantindo que tenha 11 caracteres e que todos os números não sejam iguais.
- `validateCpfDddFirstPart(cpf)`: Valida a primeira parte do CPF.
- `validateCpfDddSecondPart(cpf)`: Valida a segunda parte do CPF.
- `validateCPF(cpf)`: Valida o CPF do paciente.
- `validateDateOfBirth(dateOfBirth)`: Valida a data de nascimento do paciente, garantindo que tenha pelo menos 13 anos.
- `registerPatient(cpf, name, dateOfBirth)`: Registra um paciente com o CPF, nome e data de nascimento fornecidos.
- `excludePatient(cpf)`: Exclui um paciente com o CPF fornecido, se não estiver agendado para consultas futuras.

## Exportações

```javascript
export { Patients };
```

## Classe Clinic

### Descrição

A classe Clinic representa uma clínica médica e fornece métodos para fazer agendamentos, verificar e cancelar consultas, listar pacientes e listas de agendamentos.

### Importações

```javascript
import { rl, vecUsers, appointmentVector } from "../utils/readlineModule.mjs";
import { Tools } from "./Tools.mjs";
```

## Métodos

- `constructor(patientCpfParam, appointmentDateParam, appointmentTimeStartParam, appointmentTimeEndParam)`: Construtor da classe Clinic. Faz um agendamento automaticamente se possível.
- `minutesValidate(minuteStartParam, minuteEndParam)`: Valida os minutos do horário de início e término do agendamento.
- `timeValidate(patientCpfParam, appointmentTimeStartParam, appointmentTimeEndParam)`: Valida o horário do agendamento.
- `dateValidation(patientCpfParam, appointmentDateParam, appointmentTimeStartParam, appointmentTimeEndParam)`: Valida a data do agendamento.
- `makeAnAppointment(patientCpfParam, appointmentDateParam, appointmentTimeStartParam, appointmentTimeEndParam)`: Faz um agendamento.
- `registeredPatient(patientCpfParam)`: Verifica se um paciente está cadastrado.
- `cancelAppointment(patientCpfParam, appointmentDateParam, appointmentTimeStartParam)`: Cancela um agendamento.
- `patientsList()`: Lista os pacientes.
- `agendaList(startDateDate, endDateParam)`: Lista os agendamentos dentro do intervalo de datas especificado.
- Getters e Setters:
  - `getAppointmentDate()`
  - `getappointmentTimeStart()`
  - `getappointmentTimeEnd()`
  - `getPatientCpf()`
  - `set setAppointmentDate(appointmentDate)`
  - `set setappointmentTimeStart(appointmentTimeStart)`
  - `set setPatientCpf(patientCpf)`

### Exportações

```javascript
export { Clinic };
```

## Classe Tools

### Descrição

A classe Tools fornece métodos para listar pacientes e agendamentos em um formato específico.

### Métodos

- `patientsList(pacientes)`: Exibe uma lista formatada de pacientes com seus respectivos CPFs, nomes, datas de nascimento e idades.
- `agendaList(agenda)`: Exibe uma lista formatada de agendamentos com suas datas, horários de início e término, nomes dos pacientes e datas de nascimento, filtrados por um período especificado.

### Exportações

```javascript
export { Tools };
```

Esta documentação fornece uma visão geral dos métodos e funcionalidades das classes `Patients`, `Clinic` e `Tools`, juntamente com suas descrições e usos.
