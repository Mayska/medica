import { Injectable } from '@nestjs/common';
import { CreateHomeopathyDto } from './dto/create-homeopathy.dto';
import { UpdateHomeopathyDto } from './dto/update-homeopathy.dto';

@Injectable()
export class HomeopathyService {
  create(createHomeopathyDto: CreateHomeopathyDto) {
    return 'This action adds a new homeopathy';
  }

  findAll() {
    return `This action returns all homeopathy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} homeopathy`;
  }

  update(id: number, updateHomeopathyDto: UpdateHomeopathyDto) {
    return `This action updates a #${id} homeopathy`;
  }

  remove(id: number) {
    return `This action removes a #${id} homeopathy`;
  }
}
