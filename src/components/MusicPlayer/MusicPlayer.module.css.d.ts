declare namespace MusicPlayerModuleCssNamespace {
  export interface IMusicPlayerModuleCss {
    audioPlayer: string;
    playPauseButton: string;
    timeData: string;
    timeDisplay: string;
    trackDuration: string;
    trackProgress: string;
  }
}

declare const MusicPlayerModuleCssModule: MusicPlayerModuleCssNamespace.IMusicPlayerModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MusicPlayerModuleCssNamespace.IMusicPlayerModuleCss;
};

export = MusicPlayerModuleCssModule;
