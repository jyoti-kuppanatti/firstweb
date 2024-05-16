import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustTodoComponent } from './just-todo.component';

describe('JustTodoComponent', () => {
  let component: JustTodoComponent;
  let fixture: ComponentFixture<JustTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JustTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JustTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
