declare namespace PlaylistModuleCssNamespace {
  export interface IPlaylistModuleCss {
    currentTrack: string;
    playlist: string;
    toggle: string;
  }
}

declare const PlaylistModuleCssModule: PlaylistModuleCssNamespace.IPlaylistModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PlaylistModuleCssNamespace.IPlaylistModuleCss;
};

export = PlaylistModuleCssModule;
