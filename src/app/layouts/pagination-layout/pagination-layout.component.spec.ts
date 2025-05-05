import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationLayoutComponent } from './pagination-layout.component';
import { ComponentRef } from '@angular/core';

describe('PaginationLayoutComponent', () => {
  let component: PaginationLayoutComponent;
  let fixture: ComponentFixture<PaginationLayoutComponent>;
  let componentRef: ComponentRef<PaginationLayoutComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationLayoutComponent);
    componentRef = fixture.componentRef;
    componentRef.setInput('hasData', true);
    componentRef.setInput('isPrevButtonVisible', true);
    componentRef.setInput('isNextButtonVisible', true);

    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;

    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display .pagination when hasData is true', () => {
    const paginationDiv = nativeElement.querySelector('.pagination');
    expect(paginationDiv).toBeTruthy();
  });
  it('should not display .pagination when hasData is false', () => {
    componentRef.setInput('hasData', false);
    fixture.detectChanges();

    const paginationDiv = nativeElement.querySelector('.pagination');
    expect(paginationDiv).toBeNull();
  });
  it('should display 2 buttons, first with text Précédent second with text Suivant', () => {
    const buttons = nativeElement.querySelectorAll('button');
    expect(buttons.length).toBe(2);
    expect(buttons[0]?.textContent).toContain('Précédent');
    expect(buttons[1]?.textContent).toContain('Suivant');
  });
  it('should show only one button when only next is visible', () => {
    componentRef.setInput('isPrevButtonVisible', false);
    componentRef.setInput('isNextButtonVisible', true);
    fixture.detectChanges();
    const buttons = nativeElement.querySelectorAll('button');
    const prevButton = Array.from(buttons).find(btn => btn.textContent?.includes('Précédent'));
    const nextButton = Array.from(buttons).find(btn => btn.textContent?.includes('Suivant'));
    expect(buttons.length).toBe(1);
    expect(prevButton).toBeUndefined();
    expect(nextButton).toBeDefined();
    expect(nextButton?.textContent).toContain('Suivant');
  });

  it('should emit nextClicked when nextPage is called', () => {
    spyOn(component.nextClicked, 'emit');
    component.nextPage();
    expect(component.nextClicked.emit).toHaveBeenCalled();
  });
})
