import { Component, inject } from '@angular/core';
import { GitHubComponent } from '../../shared/components/icons/git-hub/git-hub.component';
import { UserStore } from '../../features/auth/store/user.store';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [GitHubComponent, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    readonly userStore = inject(UserStore)

    logOut(){
        localStorage.clear()
        this.userStore.clearUserStore()
    }
}
