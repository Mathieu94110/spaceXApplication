import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewDetailsComponent } from './crew-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CrewDetailsComponent', () => {
  let component: CrewDetailsComponent;
  let fixture: ComponentFixture<CrewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: (key: string) => '123' }),
            snapshot: { paramMap: { get: () => '123' } },
            data: of({}),
          }
        }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(CrewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
