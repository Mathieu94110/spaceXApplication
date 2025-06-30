import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewComponent } from './crew.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CrewComponent', () => {
  let component: CrewComponent;
  let fixture: ComponentFixture<CrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: (key: string) => '42' }),
            snapshot: {
              paramMap: {
                get: (key: string) => '42',
              }
            },
            data: of({}),
            queryParams: of({})
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
