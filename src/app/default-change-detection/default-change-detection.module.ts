import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DefaultChangeDetectionComponent} from "./default-change-detection.component";
import {ComponentOne} from "./component-one/component-one.component";
import {ComponentTwo} from "./component-two/component-two.component";
import {ComponentThree} from "./component-three/component-three.component";
import {ComponentFour} from "./component-four/component-four.component";
import {ComponentFive} from "./component-five/component-five.component";
import {ComponentSix} from "./component-six/component-six.component";
import {ComponentSeven} from "./component-seven/component-seven.component";
import {RouterModule, Routes} from "@angular/router";
import {ToggleStateService} from "../toggle-state.service";

const dcdRoutes: Routes = [
  { path: '', component:DefaultChangeDetectionComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dcdRoutes)
  ],
  exports: [
    DefaultChangeDetectionComponent,
  ],
  declarations: [
    DefaultChangeDetectionComponent,
    ComponentOne,
    ComponentTwo,
    ComponentThree,
    ComponentFour,
    ComponentFive,
    ComponentSix,
    ComponentSeven,
  ],
  providers:[ToggleStateService,]
})
export class DefaultChangeDetectionModule { }
