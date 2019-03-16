import { TestBed } from '@angular/core/testing';

import { DescriptionParserService } from './description-parser.service';

describe('DescriptionParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DescriptionParserService = TestBed.get(DescriptionParserService);
    expect(service).toBeTruthy();
  });
});
