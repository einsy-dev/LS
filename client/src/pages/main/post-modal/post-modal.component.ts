import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { CarouselComponent } from '../../../shared/ui/carousel/carousel.component';

@Component({
  selector: 'app-post-modal',
  standalone: true,
  imports: [ButtonComponent, CarouselComponent],
  template: `
    <form
      class="flex max-w-xl min-h-[500px] mx-10 rounded-md p-4 "
      (submit)="handleSubmit($event)"
    >
      <div class="h-full">
        <textarea class="h-full"> </textarea>
      </div>
      <div class="">
        <app-carousel class="mt-auto" />
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
      <div class="ms-auto mt-auto" style="display: flex; flex-direction: row">
        <app-button class="w-fit " text="Загрузить" (click)="image.click()" />
        <app-button
          class="w-fit "
          text="Сохранить"
          (click)="handleSubmit($event)"
        />
      </div>
      <!-- <app-button
        class="mt-auto ms-auto"
        text="Сохранить"
        (click)="handleSubmit($event)"
      />
      <app-button
        class="mt-auto ms-auto"
        text="Сохранить"
        (click)="handleSubmit($event)"
      /> -->
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
