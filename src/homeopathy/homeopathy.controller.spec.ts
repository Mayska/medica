import { Test, TestingModule } from '@nestjs/testing';
import { HomeopathyController } from './homeopathy.controller';
import { HomeopathyService } from './homeopathy.service';

describe('HomeopathyController', () => {
  let controller: HomeopathyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeopathyController],
      providers: [HomeopathyService],
    }).compile();

    controller = module.get<HomeopathyController>(HomeopathyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
