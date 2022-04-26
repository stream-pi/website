// plopfile.ts
import { execSync } from "child_process";
import { NodePlopAPI } from "node-plop";
import { HookGenerator } from "./hook";
import { PageGenerator } from "./page";

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator("hook", HookGenerator);
  plop.setGenerator("page", PageGenerator);

  plop.setActionType("prettify", (_answers, config) => {
    const data = config.data as Record<string, any>;
    execSync(`prettier --write "${data.path}"`);
    return "";
  });
  plop.setActionType("lintify", (_answers, config) => {
    const data = config.data as Record<string, any>;
    execSync(`eslint --ext js,ts,tsx --fix "${data.path}"`);
    return "";
  });
}
