export interface BuildPath {
  entry: string;
  html: string;
  output: string;
  src: string;
}

export type BuildMode = "production" | "development";
export type BuildPlatform = "mobile" | "desctop";

export interface BuildOptions {
  port: number;
  path: BuildPath;
  mode: BuildMode;
  isAnaliser?: boolean;
  platform: BuildPlatform
}
