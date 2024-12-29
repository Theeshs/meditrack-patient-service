import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDTO } from './dtos/create-patient.dto';
import { UpdatePatientDTO } from './dtos/update-patient.dto';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  createPatient(@Body() data: CreatePatientDTO) {
    return this.patientService.createPatient(data);
  }

  @Get()
  getAllPatients() {
    return this.patientService.getAllPatients();
  }

  @Get(':id')
  getPatientById(@Param('id') id: string) {
    return this.patientService.getPatientById(id);
  }

  @Put(':id')
  updatePatient(@Param('id') id: string, @Body() data: UpdatePatientDTO) {
    return this.patientService.updatePatient(id, data);
  }

  @Delete(':id')
  deletePatient(@Param('id') id: string) {
    return this.patientService.deletePatient(id);
  }
}
