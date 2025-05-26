import { TestBed } from '@angular/core/testing';
import { LaunchPadsService } from './launch-pads.service';

describe('LaunchPadsService', () => {
  let service: LaunchPadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchPadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
