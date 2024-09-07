import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccauntComponent } from '../accaunt/accaunt.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, AccauntComponent],
  template: `
    <app-accaunt />
    <nav [class]="class + ' w-full'">
      <ul class="w-full">
        <li routerLink="">Home</li>
        <li routerLink="movies">Movies</li>
        <li routerLink="books">Books</li>
        <li routerLink="music">Music</li>
        <li routerLink="gallery">Gallery</li>
        <li routerLink="games">Games</li>
        <li routerLink="messenger">Messenger</li>
      </ul>
    </nav>
  `,
  styles: `
  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  li {
    --h: 40px;
    --bg-color: #231651;
    --default: white;

    cursor: pointer;
    width: 100%;
    height: var(--h);
    position: relative;
    background-color: var(--bg-color);
    text-align: center;
    color: var(--default);
    line-height: var(--h);
    transition: 0.3s;
    &:before {
      content: '';
      position: absolute;
      top: 0; 
      right: 0;
      border-top: calc(var(--h) / 2) solid var(--default);
      border-left: calc(var(--h) / 2) solid var(--bg-color);
    }
    &:before {
      content: '';
      position: absolute;
      bottom: 0; 
      right: 0;
      border-bottom: calc(var(--h) / 2) solid var(--default);
      border-left: calc(var(--h) / 2) solid var(--bg-color);
    }
    &:hover {
      transform: translateX(calc(var(--h) / 2));
    }
  }`,
})
export class SidebarComponent {
  @Input() class = '';
}
