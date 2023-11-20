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
  SHOP_REMOTE_URL?: string;
  ADMIN_REMOTE_URL?: string;
}

export default (env: EnvVariables) => {
  const pathBuilder: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    output: path.resolve(__dirname, "build"),
    src: path.resolve(__dirname, "src"),
    public: path.relative(__dirname, "public"),
  };

  const SHOP_REMOTE_URL = env.SHOP_REMOTE_URL ?? "http://localhost:3001";
  const ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL ?? "http://localhost:3002";

  const config = buildWebpack({
    mode: env.mode,
    port: env.port ?? 3000,
    path: pathBuilder,
    isAnaliser: env.isAnalizer,
    platform: env.platform ?? "desctop",
  });

  config.plugins.push(
    new container.ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",

      remotes: {
        shop: `shop@${SHOP_REMOTE_URL}/remoteEntry.js`,
        admin: `admin@${ADMIN_REMOTE_URL}/remoteEntry.js`,
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          eager: true,
          // requiredVersion: packageJson.dependencies['react'],
        },
        "react-router-dom": {
          eager: true,
          // requiredVersion: packageJson.dependencies['react-router-dom'],
        },
        "react-dom": {
          eager: true,
          // requiredVersion: packageJson.dependencies['react-dom'],
        },
      },
    })
  );

  return config;
};
