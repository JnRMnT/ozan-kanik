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