import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTableComponent } from './shared-table/shared-table.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SharedChartsComponent } from './shared-charts/shared-charts.component';
import { ChartModule } from 'primeng/chart';
import { SharedBannerComponent } from './shared-banner/shared-banner.component';
@NgModule({
  declarations: [SharedTableComponent, SharedChartsComponent, SharedBannerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    ChartModule

  ],
  exports: [SharedTableComponent, SharedChartsComponent, SharedBannerComponent]
})
export class SharedModule { }
