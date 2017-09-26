import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be return true', () => {
    const login = {
      login: "Vincent",
      password: "azerty"
    }

    expect(component.logger(login)).toBe(true);
  })

  it('should be return false with uppercase password', () => {
    const login = {
      login: "Vincent",
      password: "AZERTY"
    }

    expect(component.logger(login)).toBe(false);
  })
});