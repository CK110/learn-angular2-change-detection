import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from "@angular/router";

const appRoutes: Routes = [
  { path: 'defaultChangeDetection',
    loadChildren:'app/default-change-detection/default-change-detection.module#DefaultChangeDetectionModule'
  },
  { path: 'onPushChangeDetection',
    loadChildren:'app/on-push-change-detection/on-push-change-detection.module#OnPushChangeDetectionModule'
  },
  { path: 'onPushChangeDetectionObservables',
    loadChildren:'app/on-push-change-detection-observables/on-push-change-detection-observables.module#OnPushObServableChangeDetectionModule'
  },
  { path: 'manualChangeDetection',
    loadChildren:'app/manual-change-detection/manual-change-detection.module#ManualChangeDetectionModule'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
