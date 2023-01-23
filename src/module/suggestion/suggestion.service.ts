import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import ReadSuggestionInput from './dto/read-suggestion.input';

@Injectable()
export class SuggestionService {
  constructor(private prisma: PrismaService) {}

  async readSuggestion(input: ReadSuggestionInput) {
    console.log(input);
  }
}
