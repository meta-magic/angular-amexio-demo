import { NgModule } from "@angular/core";
import { LazyComponent } from "./lazycomponent";
import { Routes, RouterModule } from "@angular/router";

const route: Routes = [{
    path: '', component: LazyComponent
}]

@NgModule({
    declarations: [LazyComponent],
    imports: [RouterModule.forChild(route)]
})
export class LazyModule {

}