import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { SuggestionController } from './suggestion.controller';
import { SuggestionService } from './suggestion.service';

@Module({
  providers: [SuggestionService],
  controllers: [SuggestionController],
  imports: [PrismaModule],
})
export class SuggestionModule {}
