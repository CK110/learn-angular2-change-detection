import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ComponentOne} from "./component-one/component-one.component";
import {ComponentTwo} from "./component-two/component-two.component";
import {ComponentThree} from "./component-three/component-three.component";
import {ComponentFour} from "./component-four/component-four.component";
import {ComponentFive} from "./component-five/component-five.component";
import {ComponentSix} from "./component-six/component-six.component";
import {ComponentSeven} from "./component-seven/component-seven.component";
import {RouterModule, Routes} from "@angular/router";
import {ToggleStateService} from "../toggle-state.service";
import {OnPushChangeDetectionComponent} from "./on-push-change-detection.component";
import {ComponentTen} from "./component-ten/component-ten.component";
import {ComponentEight} from "./component-eight/component-eight.component";
import {ComponentNine} from "./component-nine/component-nine.component";
import {ComponentEleven} from "./component-eleven/component-eleven.component";
import {ComponentTwelve} from "./component-twelve/component-twelve.component";
import {ComponentThirteen} from "./component-thirteen/component-thirteen.component";
import {ComponentFiveteen} from "./component-fiveteen/component-fiveteen.component";
import {ComponentSeventeen} from "./component-seventeen/component-seventeen.component";
import {ComponentSixteen} from "./component-sixteen/component-sixteen.component";
import {ComponentFourteen} from "./component-fourteen/component-fourteen.component";

const dcdRoutes: Routes = [
  { path: '', component:OnPushChangeDetectionComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dcdRoutes)
  ],
  exports: [
    OnPushChangeDetectionComponent,
  ],
  declarations: [
    OnPushChangeDetectionComponent,
    ComponentOne,
    ComponentTwo,
    ComponentThree,
    ComponentFour,
    ComponentFive,
    ComponentSix,
    ComponentSeven,
    ComponentEight,
    ComponentNine,
    ComponentTen,
    ComponentEleven,
    ComponentTwelve,
    ComponentThirteen,
    ComponentFourteen,
    ComponentFiveteen,
    ComponentSixteen,
    ComponentSeventeen
  ],
  providers:[ToggleStateService]
})
export class OnPushChangeDetectionModule { }
