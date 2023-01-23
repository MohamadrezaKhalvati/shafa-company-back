import { Body, Controller, Get } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import ReadSuggestionInput from './dto/read-suggestion.input';
import { SuggestionService } from './suggestion.service';

@Controller('suggestion')
export class SuggestionController {
  constructor(private suggestionService: SuggestionService) {}

  @Get('readSuggestion')
  @ApiOperation({ operationId: 'readSuggestion' })
  @ApiBody({ type: ReadSuggestionInput })
  @ApiResponse({ status: 200 })
  async readSuggestion(@Body() input: ReadSuggestionInput) {
    return await this.suggestionService.readSuggestion(input);
  }
}
