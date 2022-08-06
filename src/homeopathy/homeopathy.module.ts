import { Module } from '@nestjs/common';
import { HomeopathyService } from './homeopathy.service';
import { HomeopathyController } from './homeopathy.controller';

@Module({
  controllers: [HomeopathyController],
  providers: [HomeopathyService]
})
export class HomeopathyModule {}
