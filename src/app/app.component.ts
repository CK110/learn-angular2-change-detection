import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {DefaultChangeDetectionComponent} from "./default-change-detection/default-change-detection.component";
import {Subject} from "rxjs";
import {OnPushChangeDetectionComponent} from "./on-push-change-detection/on-push-change-detection.component";
import {OnPushChangeDetectionObservablesComponent} from "./on-push-change-detection-observables/on-push-change-detection-observables.component";
import {ManualChangeDetectionComponent} from "./manual-change-detection/manual-change-detection.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  @ViewChild(DefaultChangeDetectionComponent) defaultChangeDetectionCmp: DefaultChangeDetectionComponent;
  @ViewChild(OnPushChangeDetectionComponent) onPushChangeDetectionCmp: OnPushChangeDetectionComponent;
  @ViewChild(OnPushChangeDetectionObservablesComponent) onPushChangeDetectionObservablesCmp: OnPushChangeDetectionObservablesComponent;
  @ViewChild(ManualChangeDetectionComponent) manualChangeDetectionCmp: ManualChangeDetectionComponent;
  notifier: Subject<any> = new Subject();

  ngAfterViewChecked() {
    console.log(this.notifier);

    if (this.defaultChangeDetectionCmp) {
      this.defaultChangeDetectionCmp.notifier = this.notifier;
    }

    if (this.onPushChangeDetectionCmp) {
      this.onPushChangeDetectionCmp.notifier = this.notifier;
    }

    if (this.onPushChangeDetectionObservablesCmp) {
      this.onPushChangeDetectionObservablesCmp.notifier = this.notifier;
    }

    if (this.manualChangeDetectionCmp) {
      this.manualChangeDetectionCmp.notifier = this.notifier;
    }
  }
}
