import webpack from "webpack";
import buildDevServer from "./buildDevServer";
import buildLoaders from "./buildLoaders";
import buildPrlugins from "./buildPlugins";
import buildResolves from "./buildResolves";
import { BuildOptions } from "./types/types";

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
    const {mode, path} = options
  const isDev = mode === 'development'
  return {
    mode: mode ?? "development",
    entry: path.entry,
    output: {
      path: path.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPrlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(options),
    devtool: isDev && "inline-source-map",
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
