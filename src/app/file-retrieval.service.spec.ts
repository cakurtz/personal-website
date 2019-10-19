import { TestBed } from '@angular/core/testing';

import { FileRetrievalService } from './file-retrieval.service';

describe('FileRetrievalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileRetrievalService = TestBed.get(FileRetrievalService);
    expect(service).toBeTruthy();
  });
});
