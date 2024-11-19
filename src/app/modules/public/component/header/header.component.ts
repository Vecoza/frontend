import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone:true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgbCollapseModule
  ]
})
export class HeaderComponent {
  isCollapsed = true;
}
