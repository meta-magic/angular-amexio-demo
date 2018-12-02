import { Component } from "@angular/core";
import { AmexioGridLayoutService, GridConfig, GridConstants} from 'amexio-ng-extensions';

@Component({
    selector : 'gridlayout-demo',
    templateUrl : 'gridlayout.component.html'
})
export class GridLayoutDemo {

    gridDesktop: GridConfig;
    gridTablet: GridConfig;
    gridMobile: GridConfig;

    constructor (private _gridlayoutService : AmexioGridLayoutService){
        this.createLayouts();

        // Create the Layouts
        this._gridlayoutService.createLayout(this.gridDesktop);
        this._gridlayoutService.createLayout(this.gridTablet);
        this._gridlayoutService.createLayout(this.gridMobile);
         

    }

     
// Create Layout Configurations for Desktop / Mobile / Tablets
createLayouts() {
    this.gridDesktop = new GridConfig('Home', GridConstants.Desktop)
      .addlayout(["gridheader1", "gridheader2", "gridheader3", "gridheader4"])
      .addlayout(["gridtitle", "gridmain", "gridmain", "gridright1"])
      .addlayout(["gridmenu", "gridmain", "gridmain", "gridright2"])
      .addlayout(["gridmenu", "gridmain", "gridmain", "gridright3"]);

      this.gridTablet = new GridConfig('Home', GridConstants.Tablet)
      .addlayout(["gridheader1", "gridheader2", "gridheader3", "gridheader4"])
      .addlayout(["gridmain", "gridmain", "gridmain", "gridmain"])
      .addlayout(["gridtitle", "gridtitle", "gridright1", "gridright1"])
      .addlayout(["gridmenu", "gridmenu", "gridright2", "gridright2"])
      .addlayout(["gridright3", "gridright3", "gridright3", "gridright3"]);

      this.gridMobile = new GridConfig('Home', GridConstants.Mobile)
      .addlayout(["gridheader1", "gridheader2", "gridheader3", "gridheader4"])
      .addlayout(["gridmain", "gridmain", "gridmain", "gridmain"])
      .addlayout(["gridtitle", "gridtitle", "gridtitle", "gridtitle"])
      .addlayout(["gridmenu", "gridmenu", "gridmenu", "gridmenu"])
      .addlayout(["gridright1", "gridright1", "gridright1", "gridright1"])
      .addlayout(["gridright2", "gridright2", "gridright2", "gridright2"])
      .addlayout(["gridright3", "gridright3", "gridright3", "gridright3"]);
  }
}