import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  template: `
    <div class="p-4 border">
      <form class="grid grid-cols-4 gap-5">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Country" />
        <input type="text" placeholder="Year" />
        <input type="text" placeholder="Genre" />
      </form>
    </div>
  `,
  styles: ``,
})
export class FilterComponent {}
