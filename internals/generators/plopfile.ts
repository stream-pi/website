// plopfile.ts
import { execSync } from "child_process";
import { NodePlopAPI } from "node-plop";
import { HookGenerator } from "./hook";

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator("hook", HookGenerator);

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
