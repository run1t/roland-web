import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMatchContainerComponent } from './list-match-container.component';

describe('ListMatchContainerComponent', () => {
  let component: ListMatchContainerComponent;
  let fixture: ComponentFixture<ListMatchContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMatchContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMatchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
