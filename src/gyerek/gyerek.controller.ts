import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { GyerekService } from './gyerek.service';
import { CreateGyerekDto } from './dto/create-gyerek.dto';
import { UpdateGyerekDto } from './dto/update-gyerek.dto';

@Controller('gyerekek')
export class GyerekController {
  constructor(private readonly gyerekService: GyerekService) {}

  @Get()
  findAll() {
    return this.gyerekService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.gyerekService.findOne(id);
  }

  @Post()
  create(@Body() createGyerekDto: CreateGyerekDto) {
    return this.gyerekService.create(createGyerekDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateGyerekDto: UpdateGyerekDto) {
    return this.gyerekService.update(id, updateGyerekDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.gyerekService.remove(id);
  }

  @Post(':id/jatekok')
  assignJatekToGyerek(
    @Param('id') gyerekId: number,
    @Body('jatekId') jatekId: number,
  ) {
    return this.gyerekService.assignJatek(gyerekId, jatekId);
  }
}
