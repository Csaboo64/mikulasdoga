/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateGyerekDto } from './dto/create-gyerek.dto';
import { UpdateGyerekDto } from './dto/update-gyerek.dto';

@Injectable()
export class GyerekService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(id: number) {
    throw new Error('Method not implemented.');
  }
  assignJatek(gyerekId: number, jatekId: number) {
    throw new Error('Method not implemented.');
  }

  
  constructor(private readonly prisma: PrismaService) {}


  async findAll() {
    return await this.prisma.gyerek.findMany({
      include: { jatekok: true },
    });
  }

  async findOne(id: number) {
    const gyerek = await this.prisma.gyerek.findUnique({
      where: { id:id },
      include: { jatekok: true },
    });
    if (!gyerek) {
      throw new NotFoundException(`Gyerek ilyen ID-val: ${id} nem található.`);
    }
    return gyerek;
  }


  async create(createGyerekDto: CreateGyerekDto) {
    return await this.prisma.gyerek.create({
      data: createGyerekDto,
    });
  }

  
  async update(id: number, updateGyerekDto: UpdateGyerekDto) {
    const gyerek = await this.findOne(id);
    if (!gyerek) {
      throw new NotFoundException(`Gyerek ilyen ID-val: ${id} nem található.`);
    }
    return await this.prisma.gyerek.update({
      where: { id },
      data: updateGyerekDto,
    });
  }

}