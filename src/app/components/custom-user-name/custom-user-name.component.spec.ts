import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomUserNameComponent } from './custom-user-name.component';

describe('CustomUserNameComponent', () => {
  let component: CustomUserNameComponent;
  let fixture: ComponentFixture<CustomUserNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomUserNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
