import {IonicErrorHandler, IonicModule} from "ionic-angular";
import {ErrorHandler, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ScheduleService} from "./schedule.service";
import {MomentModule} from "angular2-moment";
import {VisitStatusPipe} from "../../shared/pipes/visit-status.pipe";
import {SchedulePage} from "./schedule.component";
import {VisitActionModal} from "./visit-action/visit-action-modal.component";
import {ScheduleNewModal} from "./add-new/schedule-new-modal.component";
import {StockCheckModal} from "./stock-check/stock-check.component";
import {StockSoldPipe} from "../../shared/pipes/stock-sold.pipe";
import {VisitReportModal} from "./visit-report/visit-report-modal.component";
import {GroupByPipe} from "../../shared/pipes/group-by.pipe";
import {VisitFilterPipe} from "../../shared/pipes/visit-filter.pipe";
import {ActionChecklistComponent} from "./check-in/action-checklist.component";
import {StockCheckPipe} from "../../shared/pipes/stock-check.pipe";
import {EditCompleteComponent} from "./edit-complete-visit/edit-complete.component";
import {ExpensesModal} from "./expenses/expenses-modal.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {NewExpenseModal} from "./expenses/new-expense-modal";
import {OrderModule} from "ngx-order-pipe";
import {ServicesModule} from "../../services/services.module";
import {TokenInterceptor} from "../auth/token.interceptor";
import {Geolocation} from "@ionic-native/geolocation";
import {PhotoModal} from "./photos/photo-modal.component";
import {Camera} from "@ionic-native/camera";
import {Transfer} from "@ionic-native/transfer";
import {FilePath} from "@ionic-native/file-path";
import {File} from "@ionic-native/file";

@NgModule({
  declarations: [
    SchedulePage,
    ScheduleNewModal,
    VisitActionModal,
    StockCheckModal,
    VisitReportModal,
    ExpensesModal,
    EditCompleteComponent,
    VisitStatusPipe,
    StockSoldPipe,
    GroupByPipe,
    VisitFilterPipe,
    ActionChecklistComponent,
    StockCheckPipe,
    NewExpenseModal,
    PhotoModal
  ],
  imports: [
    BrowserModule,
    IonicModule,
    HttpClientModule,
    MomentModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    OrderModule,
    ServicesModule
  ],
  entryComponents: [
    SchedulePage,
    ScheduleNewModal,
    VisitActionModal,
    StockCheckModal,
    VisitReportModal,
    ExpensesModal,
    ActionChecklistComponent,
    EditCompleteComponent,
    NewExpenseModal,
    PhotoModal
  ],
  providers: [
    ScheduleService,
    Geolocation,
    File,
    Transfer,
    Camera,
    FilePath,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class ScheduleModule {}
