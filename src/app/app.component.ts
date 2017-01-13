import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {DefaultChangeDetectionComponent} from "./default-change-detection/default-change-detection.component";
import {Subject} from "rxjs";
import {OnPushChangeDetectionComponent} from "./on-push-change-detection/on-push-change-detection.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  @ViewChild(DefaultChangeDetectionComponent) defaultChangeDetectionCmp: DefaultChangeDetectionComponent;
  @ViewChild(OnPushChangeDetectionComponent) onPushChangeDetectionCmp: OnPushChangeDetectionComponent;
  // @ViewChild(OnPushChangeDetectionObservablesComponent) onPushChangeDetectionObservablesCmp: OnPushChangeDetectionObservablesComponent;
  // @ViewChild(ManualChangeDetectionComponent) manualChangeDetectionCmp: ManualChangeDetectionComponent;
  notifier: Subject<any> = new Subject();

  ngAfterViewChecked() {
    if (this.defaultChangeDetectionCmp) {
      this.defaultChangeDetectionCmp.notifier = this.notifier;
    }

    if (this.onPushChangeDetectionCmp) {
      this.onPushChangeDetectionCmp.notifier = this.notifier;
    }
    //
    // if (this.onPushChangeDetectionObservablesCmp) {
    //   this.onPushChangeDetectionObservablesCmp.notifier = this.notifier;
    // }
    //
    // if (this.manualChangeDetectionCmp) {
    //   this.manualChangeDetectionCmp.notifier = this.notifier;
    // }
  }
}
