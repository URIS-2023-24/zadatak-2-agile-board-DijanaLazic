import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskDialogData } from 'app/models/task-dialog-data';

@Component({
  selector: 'task-dialog-list',
  templateUrl: './task-dialog-list.component.html',
  styleUrls: ['./task-dialog-list.component.css']
})
export class TaskDialogListComponent implements OnInit {
  dataDialog: TaskDialogData;

  constructor(private dialogRef:MatDialogRef<TaskDialogListComponent>,
                @Inject(MAT_DIALOG_DATA) public data: TaskDialogData){}

    ngOnInit(): void {
      
    }

    onClick(): void {
      this.dialogRef.close();
    }
        
}
