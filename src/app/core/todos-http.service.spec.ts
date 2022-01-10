import { TestBed } from '@angular/core/testing';

import { TodosHttpService } from './todos-http.service';

describe('TodosHttpService', () => {
  let service: TodosHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
