declare namespace ProgressBarModuleCssNamespace {
  export interface IProgressBarModuleCss {
    progressBar: string;
    progressBarContainer: string;
  }
}

declare const ProgressBarModuleCssModule: ProgressBarModuleCssNamespace.IProgressBarModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProgressBarModuleCssNamespace.IProgressBarModuleCss;
};

export = ProgressBarModuleCssModule;
