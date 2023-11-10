import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDialogListComponent } from './task-dialog-list.component';

describe('TaskDialogListComponent', () => {
  let component: TaskDialogListComponent;
  let fixture: ComponentFixture<TaskDialogListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDialogListComponent]
    });
    fixture = TestBed.createComponent(TaskDialogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
