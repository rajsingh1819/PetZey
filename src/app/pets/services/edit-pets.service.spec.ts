import { TestBed } from '@angular/core/testing';

import { EditPetsService } from './edit-pets.service';

describe('EditPetsService', () => {
  let service: EditPetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditPetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
