import { PartialType } from '@nestjs/mapped-types';
import { CreateHomeopathyDto } from './create-homeopathy.dto';

export class UpdateHomeopathyDto extends PartialType(CreateHomeopathyDto) {}
