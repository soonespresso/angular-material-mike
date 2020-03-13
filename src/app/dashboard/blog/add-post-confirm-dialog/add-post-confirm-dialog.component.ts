import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-post-confirm-dialog',
  templateUrl: './add-post-confirm-dialog.component.html',
  styleUrls: ['./add-post-confirm-dialog.component.scss']
})
export class AddPostConfirmDialogComponent implements OnInit {

  doConfirm = new EventEmitter<any>();

  get title() {
    return this.data.title;
  }

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: any
    ) { }

  ngOnInit() {
  }

  confirm() {
    this.dialog.closeAll();
    this.doConfirm.emit();
  }
}
