import { Component, Input } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-col gap-2 mx-[100px] border p-5 rounded-md shadow-md">
      <header class="flex">
        <img
          srcset="{{author.img}}, assets/err.png"
          alt=""
          class="h-[80px] rounded-full"
        />
        <div class=" flex flex-col justify-between p-3 w-full">
          <div class="">{{ author.name }}</div>
          <div class=" text-zinc-500">{{ date }}</div>
        </div>
      </header>
      <div class="">
        <img src="{{ img }}" alt="" />
        <p>{{ description }}</p>
      </div>
    </div>
  `,
  styles: `
  `,
})
export class PostComponent {
  @Input() author = {
    name: 'Василий Рыба Иванович',
    img: '',
  };
  @Input() date: string = new Date().toISOString();
  @Input() img: string = '';
  @Input() description: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptatem?';

  ngOnInit() {
    this.date = moment(this.date).format('DD.MM.YYYY');
  }
}
