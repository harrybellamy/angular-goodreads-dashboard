import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRecentComponent } from './most-recent.component';

describe('MostRecentComponent', () => {
  let component: MostRecentComponent;
  let fixture: ComponentFixture<MostRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostRecentComponent ],
      imports: [ HttpClientTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
