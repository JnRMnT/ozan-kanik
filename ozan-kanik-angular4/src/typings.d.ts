/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare class SmoothScroll {
  constructor(selector: string);
}