import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { BookDetailsComponent } from './book-details.component';
import { GoodreadsService } from '../goodreads.service';
import { Book } from '../goodreads-models';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  const book: Book = {
    title: 'My New Book',
    imageUrl: '/image/url',
    largeImageUrl: '/large/image/url',
    author: 'John Smith',
    createdDate: new Date(2021, 7, 7),
    id: '01234567',
    userRating: 4,
    averageRating: 3.8
  };

  function fakeAsyncResponse<T>(data: T) {
    return of(data);
  }
  
  const GoodreadsServiceStub = {
    getBookWithId(id: string) {
      if (id === '01234567') {
        return fakeAsyncResponse(book);
      }

      console.debug('Bad id: '+ id)
      return undefined;
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailsComponent ],
      providers: [ 
        { provide: GoodreadsService, useValue: GoodreadsServiceStub },
        { provide: ActivatedRoute, useValue: { snapshot: {params: {id: '01234567'}} } }
      ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display book title', fakeAsync(() => {
    tick();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1.book-title').textContent).toContain('My New Book');
  }));

  it('should display book author', fakeAsync(() => {
    tick();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2.book-author').textContent).toContain('John Smith');
  }));

  it('should display average rating', fakeAsync(() => {
    tick();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div.average-rating').textContent).toContain('Average Rating: 3.8');
  }));

  it('should display a Go Back button', fakeAsync(() => {
    tick();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toBe('Go Back');
  }));

  it('should display the book cover image', fakeAsync(() => {
    tick();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    var imgElement = compiled.querySelector('img') as HTMLElement;
    expect(imgElement.attributes.getNamedItem('src')?.value).toBe('/large/image/url');
  }));
});
