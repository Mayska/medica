import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HomeopathyService } from './homeopathy.service';
import { CreateHomeopathyDto } from './dto/create-homeopathy.dto';
import { UpdateHomeopathyDto } from './dto/update-homeopathy.dto';

@Controller('homeopathy')
export class HomeopathyController {
  constructor(private readonly homeopathyService: HomeopathyService) {}

  @Post()
  create(@Body() createHomeopathyDto: CreateHomeopathyDto) {
    return this.homeopathyService.create(createHomeopathyDto);
  }

  @Get()
  findAll() {
    return this.homeopathyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homeopathyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHomeopathyDto: UpdateHomeopathyDto) {
    return this.homeopathyService.update(+id, updateHomeopathyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.homeopathyService.remove(+id);
  }
}
