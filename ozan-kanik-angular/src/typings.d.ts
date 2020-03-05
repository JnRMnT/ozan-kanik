/// <reference path="../node_modules/@types/jquery.slimscroll/index.d.ts" />
/// <reference path="../node_modules/@types/bootstrap/index.d.ts" />
/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare class SmoothScroll {
  constructor(selector: string);
}
declare class AvailableProject {
  public name: string;
  public description: string;
  public location: string;
  public identifier: string;
  public isDefault: boolean;
}
declare var System: any;