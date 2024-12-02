import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { JatekService } from './jatek.service';
import { CreateJatekDto } from './dto/create-jatek.dto';
import { UpdateJatekDto } from './dto/update-jatek.dto';

@Controller('jatekok')
export class JatekController {
  constructor(private readonly jatekService: JatekService) {}

  @Get()
  findAll() {
    return this.jatekService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.jatekService.findOne(id);
  }

  @Post()
  create(@Body() createJatekDto: CreateJatekDto) {
    return this.jatekService.create(createJatekDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateJatekDto: UpdateJatekDto) {
    return this.jatekService.update(id, updateJatekDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.jatekService.remove(id);
  }
}
