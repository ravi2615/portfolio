import { TestBed } from '@angular/core/testing';

import { ExpreinceService } from './expreince.service';

describe('ExpreinceService', () => {
  let service: ExpreinceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpreinceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
