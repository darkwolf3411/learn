import path from "path";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPath } from "./config/build/types/types";

interface EnvVariables {
  mode: BuildMode;
  port: number;
}

export default (env: EnvVariables) => {
    const pathBuilder: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        output: path.resolve(__dirname, 'build'),
    }
  const config = buildWebpack({
    mode: env.mode,
    port: env.port ?? 3000,
    path: pathBuilder
  });
  return config;
};
