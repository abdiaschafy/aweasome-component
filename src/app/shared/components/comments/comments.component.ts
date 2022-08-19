import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Comment } from 'src/app/core/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public commentControl!: FormControl;
  @Input() comments!: Comment[];
  @Output() newComment = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.commentControl=this.formBuilder.control('', [Validators.required, Validators.minLength(10)]);
  }

  public onLeaveComment() {
    if (this.commentControl.invalid) {
      return;
    }
    this.newComment.emit(this.commentControl.value);
    this.commentControl.reset();
  }

}
