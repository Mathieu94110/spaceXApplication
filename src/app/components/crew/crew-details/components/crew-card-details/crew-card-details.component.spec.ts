import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrewCardDetailsComponent } from './crew-card-details.component';
import { Component } from '@angular/core';

@Component({
  template: `<app-crew-card-details [crewInfo]="mockCrewInfo"></app-crew-card-details>`,
  standalone: true,
  imports: [CrewCardDetailsComponent],
})
class HostComponent {
  mockCrewInfo = {
    id: 'c01',
    name: 'John Doe',
    role: 'Pilot',
    status: 'active',
  };
}

describe('CrewCardDetailsComponent', () => {
  let fixture: ComponentFixture<HostComponent>;
  let hostComponent: HostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const component = fixture.debugElement.children[0].componentInstance;
    expect(component).toBeTruthy();
  });
});
