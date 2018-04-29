import { TestBed, inject } from '@angular/core/testing';

import { ResetHomeService } from './reset-home.service';

describe('ResetHomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetHomeService]
    });
  });

  it('should be created', inject([ResetHomeService], (service: ResetHomeService) => {
    expect(service).toBeTruthy();
  }));
});
