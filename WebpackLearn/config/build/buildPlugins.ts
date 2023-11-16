import { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export default function buildPrlugins(
  options: BuildOptions
): Configuration["plugins"] {
  const isDev = options.mode === "development";
  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: options.path.html,
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(options.platform),
    }),
  ];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
    plugins.push(new ForkTsCheckerWebpackPlugin())
    plugins.push(new ReactRefreshWebpackPlugin())
  } else {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: isDev ? "[name].css" : "css/[name].[contenthash:8].css",
        chunkFilename: isDev ? "[name].css" : "css/[name].[contenthash:8].css",
      })
    );
    options.isAnaliser && plugins.push(new BundleAnalyzerPlugin());
  }
  return plugins;
}
