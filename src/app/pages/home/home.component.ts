import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { LeftnavComponent } from '../../components/leftnav/leftnav.component';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-home',
  imports: [NavComponent, LeftnavComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
