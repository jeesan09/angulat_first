import { TestBed, inject } from '@angular/core/testing';

import { HTTPserviceService } from './httpservice.service';

describe('HTTPserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HTTPserviceService]
    });
  });

  it('should be created', inject([HTTPserviceService], (service: HTTPserviceService) => {
    expect(service).toBeTruthy();
  }));
});
