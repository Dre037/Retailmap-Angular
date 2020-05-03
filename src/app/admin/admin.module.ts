import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { NotificationsComponent } from './notifications/notifications.component';



@NgModule({
  declarations: [DashboardComponent, SidebarAdminComponent, NotificationsComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
