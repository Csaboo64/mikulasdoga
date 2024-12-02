import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateJatekDto } from './dto/create-jatek.dto';
import { UpdateJatekDto } from './dto/update-jatek.dto';

@Injectable()
export class JatekService {
  constructor(private readonly prisma: PrismaService) {}

 
  async findAll() {
    return await this.prisma.jatek.findMany({
      include: { gyerekek: true },
    });
  }


  async findOne(id: number) {
    const jatek = await this.prisma.jatek.findUnique({
      where: { id },
      include: { gyerekek: true },
    });
    if (!jatek) {
      throw new NotFoundException(`Játék ilyen ID-val: ${id} nem található.`);
    }
    return jatek;
  }

  
  async create(createJatekDto: CreateJatekDto) {
    return await this.prisma.jatek.create({
      data: createJatekDto,
    });
  }


  async update(id: number, updateJatekDto: UpdateJatekDto) {
    const jatek = await this.findOne(id);
    if (!jatek) {
      throw new NotFoundException(`Jaték ilyen ID-val: ${id} nem található.`);
    }
    return await this.prisma.jatek.update({
      where: { id },
      data: updateJatekDto,
    });
  }

  
  async remove(id: number) {
    const jatek = await this.findOne(id);
    if (!jatek) {
      throw new NotFoundException(`Játék with ID ${id} not found.`);
    }
    return await this.prisma.jatek.delete({
      where: { id },
    });
  }
}
