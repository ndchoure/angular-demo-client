import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaTypeDetailComponent } from './media-type-detail.component';

describe('MediaTypeDetailComponent', () => {
  let component: MediaTypeDetailComponent;
  let fixture: ComponentFixture<MediaTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
