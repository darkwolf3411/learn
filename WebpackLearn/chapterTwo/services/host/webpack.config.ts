import path from "path";
import {
  BuildMode,
  BuildPath,
  BuildPlatform,
  buildWebpack,
} from "@packages/build-config";

interface EnvVariables {
  mode: BuildMode;
  port: number;
  isAnalizer?: boolean;
  platform: BuildPlatform;
}

export default (env: EnvVariables) => {
  const pathBuilder: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    output: path.resolve(__dirname, "build"),
    src: path.resolve(__dirname, "src"),
    public: path.relative(__dirname, "public"),
  };
  const config = buildWebpack({
    mode: env.mode,
    port: env.port ?? 3000,
    path: pathBuilder,
    isAnaliser: env.isAnalizer,
    platform: env.platform ?? "desctop",
  });
  return config;
};
