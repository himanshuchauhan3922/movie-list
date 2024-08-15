import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveiListComponent } from './movei-list.component';

describe('MoveiListComponent', () => {
  let component: MoveiListComponent;
  let fixture: ComponentFixture<MoveiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoveiListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
