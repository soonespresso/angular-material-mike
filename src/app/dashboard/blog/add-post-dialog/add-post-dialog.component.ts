import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatChipInputEvent } from '@angular/material';
import { AddPostConfirmDialogComponent } from '../add-post-confirm-dialog/add-post-confirm-dialog.component';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrls: ['./add-post-dialog.component.scss']
})
export class AddPostDialogComponent implements OnInit {

  list = [];
  title: string;
  tags = ['JavaScript', 'Material Design', 'Angular Material'];
  separatorKeysCodes = [ENTER, COMMA];

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<AddPostDialogComponent>) {
    for (let index = 0; index < 20; index++) {
      this.list.push(index + 1);
    }
  }

  ngOnInit() {
  }

  doPost() {

    const confirmDialogRef = this.dialog.open(AddPostConfirmDialogComponent, {
      data: { title: this.title }
    });

    confirmDialogRef.componentInstance.doConfirm.subscribe(() => {
      console.log(`Close Dialog Button Click`);
    });
  }

  move() {
    this.dialogRef.updatePosition({ top: '0', left: '0' });
  }

  removeTag(tagName) {
    this.tags = this.tags.filter(tag => tag !== tagName);
  }

  addTag($event: MatChipInputEvent) {
    console.log($event);
    if (($event.value || '').trim()) {
      const value = $event.value.trim();
      if (this.tags.indexOf(value) === -1) {
        this.tags.push(value);
      }
    }
    $event.input.value = '';
  }
}
