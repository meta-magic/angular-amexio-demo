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
    this.gridDesktop = new GridConfig('LayoutSample1', GridConstants.Desktop)
    .addlayout(["gridmenu", "gridheader", "gridheader", "gridheader", "gridheader", "gridheader"])
    .addlayout(["gridmenu", "gridmain", "gridmain", "gridmain", "gridright", "gridright"])
    .addlayout(["gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridright", "gridright"]);
      this.gridTablet = new GridConfig('LayoutSample1', GridConstants.Tablet)
      .addlayout(["gridmenu", "gridmenu", "gridheader", "gridheader", "gridheader", "gridheader"])
      .addlayout(["gridmenu", "gridmenu", "gridmain", "gridmain", "gridright", "gridright"])
      .addlayout(["gridmenu", "gridmenu", "gridmain", "gridmain", "gridright", "gridright"])
      .addlayout(["gridmenu", "gridmenu", "gridfooter", "gridfooter", "gridfooter", "gridfooter"]);
      this.gridMobile = new GridConfig('LayoutSample1', GridConstants.Mobile)
      .addlayout(["gridheader", "gridheader", "gridheader", "gridheader", "gridheader", "gridheader"])
      .addlayout(["gridmenu", "gridmenu", "gridmenu", "gridmenu", "gridmenu", "gridmenu"])
      .addlayout(["gridmain", "gridmain", "gridmain", "gridmain", "gridmain", "gridmain"])
      .addlayout(["gridright", "gridright", "gridright", "gridright", "gridright", "gridright"])
      .addlayout(["gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridfooter"]);
  }
}