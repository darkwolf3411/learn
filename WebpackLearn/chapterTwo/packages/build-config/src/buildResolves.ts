import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export default function buildResolves(
  options: BuildOptions
): Configuration["resolve"] {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      '@': options.path.src
    }
  };
}
