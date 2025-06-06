import { Component } from '@angular/core';
import { GitHubComponent } from '../../shared/components/icons/git-hub/git-hub.component';

@Component({
  selector: 'app-header',
  imports: [GitHubComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
