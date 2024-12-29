import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';
import { CreatePatientDTO } from './dtos/create-patient.dto';
import { UpdatePatientDTO } from './dtos/update-patient.dto';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) {}

  async createPatient(data: CreatePatientDTO): Promise<Patient> {
    const patient = this.patientRepository.create(data);
    return this.patientRepository.save(patient);
  }

  async getAllPatients(): Promise<Patient[]> {
    return this.patientRepository.find();
  }

  async getPatientById(id: string): Promise<Patient> {
    const patient = await this.patientRepository.findOne({ where: { id } });
    if (!patient) throw new NotFoundException('Patient not found');
    return patient;
  }

  async updatePatient(id: string, data: UpdatePatientDTO): Promise<Patient> {
    await this.getPatientById(id); // Ensure patient exists
    await this.patientRepository.update(id, data);
    return this.getPatientById(id);
  }

  async deletePatient(id: string): Promise<void> {
    const patient = await this.getPatientById(id);
    await this.patientRepository.remove(patient);
  }
}
