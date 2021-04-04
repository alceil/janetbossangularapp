import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadauthorsComponent } from './readauthors.component';

describe('ReadauthorsComponent', () => {
  let component: ReadauthorsComponent;
  let fixture: ComponentFixture<ReadauthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadauthorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadauthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
