import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkButtonComponent } from './link-button-layout.component';

describe('LinkButtonComponent', () => {
  let component: LinkButtonComponent;
  let fixture: ComponentFixture<LinkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
