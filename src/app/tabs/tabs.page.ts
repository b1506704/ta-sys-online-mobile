import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/services/store.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  loading!: boolean;
  lazyLoading!: boolean;
  constructor(private store: StoreService) {}
  ionTabsWillChange(e: any) {
    console.log(e);
    this.lazyLoading = true;
  }
  ionTabsDidChange(e: any) {
    console.log(e);
    // remove set time out on production
    setTimeout(() => {
      this.lazyLoading = false;
    }, 300);
  }
  ngOnInit(): void {
    this.store.$isLoading.subscribe((data: any) => {
      this.loading = data;
    });
  }
}
