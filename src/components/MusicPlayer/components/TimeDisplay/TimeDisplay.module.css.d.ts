declare namespace TimeDisplayModuleCssNamespace {
  export interface ITimeDisplayModuleCss {
    timeDisplay: string;
    trackDuration: string;
    trackProgress: string;
  }
}

declare const TimeDisplayModuleCssModule: TimeDisplayModuleCssNamespace.ITimeDisplayModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TimeDisplayModuleCssNamespace.ITimeDisplayModuleCss;
};

export = TimeDisplayModuleCssModule;
