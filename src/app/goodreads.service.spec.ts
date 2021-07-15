import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { GoodreadsService } from './goodreads.service';

describe('GoodreadsService', () => {
  let service: GoodreadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
    });
    service = TestBed.inject(GoodreadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
