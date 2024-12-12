import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Example } from '../entities/example.entity';

@Controller('example')
export class ExampleController {
  constructor(
    @InjectRepository(Example)
    private exampleRepository: Repository<Example>,
  ) {}

  @Get()
  findAll() {
    return this.exampleRepository.find();
  }
}
