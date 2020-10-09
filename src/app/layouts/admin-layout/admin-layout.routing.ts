import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { DeviceComponent } from "../../pages/devices/device.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TrainsComponent } from "../../pages/trains/trains.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { LostitemComponent } from 'src/app/pages/lostitems/lostitem/lostitem.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "devices", component: DeviceComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "trains", component: TrainsComponent },
  { path: "typography", component: TypographyComponent },
  { path: "lostItem", component: LostitemComponent },
  // { path: "rtl", component: RtlComponent }
];
