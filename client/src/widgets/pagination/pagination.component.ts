import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="grid gap-5 pb-4 px-4">
      <div class="w-full flex justify-center">
        <ul class="flex">
          <li
            (click)="setPage(page - 1)"
            [class]="page <= 1 ? 'disabled' : null"
          >
            <<
          </li>
          @for (item of items; track $index) {
          <li (click)="setPage(item)" [class]="page === item ? 'active' : null">
            {{ item }}
          </li>
          }
          <li
            (click)="setPage(page + 1)"
            [class]="page >= limit ? 'disabled' : null"
          >
            >>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: `
  ul {
    @apply select-none rounded-md overflow-hidden
  }
  li {
    @apply cursor-pointer px-3 py-1 bg-slate-200 hover:bg-slate-400;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .disabled {
    @apply opacity-50 cursor-default hover:bg-slate-200;
  }
  .active {
    @apply bg-slate-400;
  }
  `,
})
export class PaginationComponent {
  @Input() limit = 5;
  @Output() pageChange = new EventEmitter<number>();
  items = Array.from({ length: 5 }, (_, i) => i + 1);
  page = 1;

  setPage(n: number) {
    if (n < 1 || n > this.items.length) return;
    this.page = n;
    this.pageChange.emit(this.page);
  }
}
