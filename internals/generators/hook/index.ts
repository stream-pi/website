import { Actions, PlopGeneratorConfig } from "node-plop";
import * as path from "path";

const hooksDirectory = path.join(process.cwd(), "src/hooks");
const templateDir = path.join(process.cwd(), ".scripts/generators/hook");

export enum HookPromptConfig {
  hookName = "hookName",
  authorName = "authorName",
  authorEmail = "authorEmail",
}

type Answers = { [P in HookPromptConfig]: string };

export const HookGenerator: PlopGeneratorConfig = {
  description: "Generate custom hooks",
  prompts: [
    {
      type: "input",
      name: HookPromptConfig.hookName,
      message: "What is the name of your hook?",
      validate: (input, answers) => {
        if (!Boolean(input.trim())) {
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: HookPromptConfig.authorName,
      message: "Your GitHub username",
      validate: (input, answers) => {
        if (!Boolean(input.trim())) {
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: HookPromptConfig.authorEmail,
      message: "Your GitHub email address",
      validate: (input, answers) => {
        if (!Boolean(input.trim())) {
          return false;
        }
        if (
          !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            input
          )
        ) {
          return "Input must be valid email";
        }
        return true;
      },
    },
  ],
  actions: (data) => {
    const answers = data as Answers;
    const actions: Actions = [];

    const newHookPath = `${hooksDirectory}/{{kebabCase ${HookPromptConfig.hookName}}}.ts`;
    const allHooksPath = `${hooksDirectory}/index.ts`;

    actions.push({
      type: "add",
      path: newHookPath,
      templateFile: `${templateDir}/template.hbs`,
      abortOnFail: true,
    });
    actions.push({
      type: "append",
      path: allHooksPath,
      pattern: /(\/\/ APPEND HERE)/g,
      template: `export { default as {{camelCase ${HookPromptConfig.hookName}}} } from "./{{kebabCase ${HookPromptConfig.hookName}}}";`,
      abortOnFail: true,
    });
    actions.push({
      type: "lintify",
      data: {
        path: path.join(process.cwd(), "src/hooks"),
      },
    });
    return actions;
  },
};
