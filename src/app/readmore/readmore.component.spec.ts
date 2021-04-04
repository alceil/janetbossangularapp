import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmoreComponent } from './readmore.component';

describe('ReadmoreComponent', () => {
  let component: ReadmoreComponent;
  let fixture: ComponentFixture<ReadmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadmoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
