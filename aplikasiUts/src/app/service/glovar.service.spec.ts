import { TestBed } from '@angular/core/testing';

import { GlovarService } from './glovar.service';

describe('GlovarService', () => {
  let service: GlovarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlovarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
