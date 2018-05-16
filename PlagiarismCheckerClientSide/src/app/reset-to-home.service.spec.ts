import { TestBed, inject } from '@angular/core/testing';

import { ResetToHomeService } from './reset-to-home.service';

describe('ResetToHomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetToHomeService]
    });
  });

  it('should be created', inject([ResetToHomeService], (service: ResetToHomeService) => {
    expect(service).toBeTruthy();
  }));
});
