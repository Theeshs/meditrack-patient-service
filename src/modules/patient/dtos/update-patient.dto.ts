import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientDTO } from './create-patient.dto.js';

export class UpdatePatientDTO extends PartialType(CreatePatientDTO) {}
