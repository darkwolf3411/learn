import path from "path";
import {
  BuildMode,
  BuildPath,
  BuildPlatform,
  buildWebpack,
} from "@packages/build-config";
import { container } from "webpack";
import packageJson from "./package.json";

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
    port: env.port ?? 3002,
    path: pathBuilder,
    isAnaliser: env.isAnalizer,
    platform: env.platform ?? "desctop",
  });

  config.plugins.push(
    new container.ModuleFederationPlugin({
      name: "admin",
      filename: "remoteEntry.js",
      exposes: {
        "./Router": "./src/router/Router.tsx",
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          eager: true,
          requiredVersion: packageJson.dependencies["react"],
        },
        "react-router-dom": {
          eager: true,
          requiredVersion: packageJson.dependencies["react-router-dom"],
        },
        "react-dom": {
          eager: true,
          requiredVersion: packageJson.dependencies["react-dom"],
        },
      },
    })
  );

  return config;
};
