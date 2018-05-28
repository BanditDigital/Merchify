import {IonicErrorHandler, IonicModule} from "ionic-angular";
import {ErrorHandler, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "../auth/token.interceptor";
import {ScheduleService} from "./schedule.service";
import {MomentModule} from "angular2-moment";
import {VisitStatusPipe} from "../../shared/pipes/visit-status.pipe";
import {SchedulePage} from "./schedule.component";
import {VisitActionModal} from "./visit-action/visit-action-modal.component";
import {ScheduleNewModal} from "./add-new/schedule-new-modal.component";
import {StockCheckModal} from "./stock-check/stock-check.component";
import {StockSoldPipe} from "../../shared/pipes/stock-sold.pipe";
import {Camera} from "@ionic-native/camera";
import {VisitReportModal} from "./visit-report/visit-report-modal.component";

@NgModule({
  declarations: [
    SchedulePage,
    ScheduleNewModal,
    VisitActionModal,
    StockCheckModal,
    VisitReportModal,
    VisitStatusPipe,
    StockSoldPipe
  ],
  imports: [
    BrowserModule,
    IonicModule,
    HttpClientModule,
    MomentModule
  ],
  entryComponents: [
    SchedulePage,
    ScheduleNewModal,
    VisitActionModal,
    StockCheckModal,
    VisitReportModal
  ],
  providers: [
    ScheduleService,
    Camera,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class ScheduleModule {}
