import { Test, TestingModule } from '@nestjs/testing';
import { HomeopathyService } from './homeopathy.service';

describe('HomeopathyService', () => {
  let service: HomeopathyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeopathyService],
    }).compile();

    service = module.get<HomeopathyService>(HomeopathyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
