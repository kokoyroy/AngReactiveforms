import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInoutComponent } from './text-inout.component';

describe('TextInoutComponent', () => {
  let component: TextInoutComponent;
  let fixture: ComponentFixture<TextInoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
