declare namespace MusicPlayerModuleCssNamespace {
  export interface IMusicPlayerModuleCss {
    audioPlayer: string;
    mainDisplay: string;
    playPauseButton: string;
    timeData: string;
  }
}

declare const MusicPlayerModuleCssModule: MusicPlayerModuleCssNamespace.IMusicPlayerModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MusicPlayerModuleCssNamespace.IMusicPlayerModuleCss;
};

export = MusicPlayerModuleCssModule;
