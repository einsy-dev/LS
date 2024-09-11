import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { CarouselComponent } from '../../../shared/ui/carousel/carousel.component';

@Component({
  selector: 'app-post-modal',
  standalone: true,
  imports: [ButtonComponent, CarouselComponent],
  template: `
    <form
      class="w-[500px] h-[500px] rounded-md p-4 "
      (submit)="handleSubmit($event)"
    >
      <div class="">
        <label class="" for="title">Title</label>
        <input id="title" type="text" />
      </div>
      <div class="">
        <label class="" for="description">Description</label>
        <textarea id="description"> </textarea>
      </div>
      <div class="">
        <app-carousel />
        <label class="" for="image"></label>
        <input
          id="image"
          class="hidden"
          type="file"
          multiple
          #image
          accept="image/*"
        />
      </div>
      <app-button
        class="mt-auto ms-auto"
        text="Сохранить"
        (click)="handleSubmit($event)"
      />
    </form>
  `,
  styles: `
  form {
    @apply flex flex-col gap-4;
    background-color: #fff;
    & > div {
      @apply flex flex-col gap-1;
    }
  }
  input {
    /* border: none; */
  }
  textarea {
    resize: none;
  }
  input, textarea {
    outline: none;
    @apply p-2 border rounded-md;
  }`,
})
export class PostModalComponent {
  handleSubmit(e: Event) {
    e.preventDefault();
  }
}
