import { Actions, PlopGeneratorConfig } from "node-plop";
import * as path from "path";
import { existsSync } from "fs";

const pageDirectory = path.join(__dirname, "../../../src/pages");
const templateDir = __dirname;

export enum PagePromptConfig {
  rootOrNested = "rootOrNested",
  existingDestination = "existingDestination",
  pageName = "pageName",
  nestedPath = "nestedPath",
  dynamicRoute = "dynamicRoute",
  folderIsDynamic = "folderIsDynamic",
  catchAll = "catchAll",
  wantGetServerSideProps = "wantGetServerSideProps",
  wantGetStaticProps = "wantGetStaticProps",
  wantGetStaticPaths = "wantGetStaticPaths",
}

type Answers = { [P in PagePromptConfig]: string };

function pathHelper(
  pageDirectory: string,
  folderIsDynamic: boolean,
  catchAll: boolean,
  dynamicRoute: boolean,
  nestedPath: boolean,
  useExistingDirectory?: string
) {
  let pageDir = pageDirectory;
  if (useExistingDirectory) {
    pageDir = `${pageDirectory}/${useExistingDirectory}`;
  }
  //* src/pages/[param]/param.tsx
  if (folderIsDynamic) {
    let folderName = `[{{ snakeCase ${PagePromptConfig.pageName} }}]`;
    if (catchAll) {
      folderName = `[...{{ snakeCase ${PagePromptConfig.pageName} }}]`;
    }
    return `${pageDir}/${folderName}/{{ kebabCase ${PagePromptConfig.pageName} }}.tsx`;
  }
  //* src/pages/param/[param].tsx
  if (dynamicRoute && nestedPath) {
    let fileName = `[{{ snakeCase ${PagePromptConfig.pageName} }}].tsx`;
    if (catchAll) {
      fileName = `[...{{ snakeCase ${PagePromptConfig.pageName} }}].tsx`;
    }
    return `${pageDir}/{{ kebabCase ${PagePromptConfig.pageName} }}/${fileName}`;
  }
  //* src/pages/[param].tsx
  if (dynamicRoute) {
    let fileName = `[{{ snakeCase ${PagePromptConfig.pageName} }}].tsx`;
    if (catchAll) {
      fileName = `[...{{ snakeCase ${PagePromptConfig.pageName} }}].tsx`;
    }
    return `${pageDir}/${fileName}`;
  }
  //* src/pages/param/index.tsx
  if (nestedPath) {
    return `${pageDir}/{{ snakeCase ${PagePromptConfig.pageName} }}/index.tsx`;
  }
  return `${pageDir}/{{ kebabCase ${PagePromptConfig.pageName} }}.tsx`;
}

function snakeCase(str: string): string {
  return str
    .replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join("_");
}

function kebabCase(str: string): string {
  return (
    //@ts-ignore this error is not a problem
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join("-")
  );
}

export const PageGenerator: PlopGeneratorConfig = {
  description: "Generate a new page",
  prompts: [
    {
      type: "list",
      name: PagePromptConfig.rootOrNested,
      message:
        "Will this page be placed on the root, or inside an existing directory?",
      choices: ["root", "inside existing"],
      default: "root",
    },
    {
      name: PagePromptConfig.existingDestination,
      type: "directory",
      message: "In which existing directory will this page go?",
      basePath: pageDirectory,
      when: (response) => response.rootOrNested === "inside existing",
    } as any,
    {
      type: "input",
      name: PagePromptConfig.pageName,
      message: "What will this page name be?",
    },
    {
      type: "confirm",
      name: PagePromptConfig.nestedPath,
      message: "Will this route nested paths?",
      default: false,
    },
    {
      type: "confirm",
      name: PagePromptConfig.dynamicRoute,
      message: "Is this intended to be a dynamic route?",
      default: false,
    },
    {
      type: "list",
      name: PagePromptConfig.folderIsDynamic,
      message:
        "Should the folder be dynamic or create a dynamic route inside the folder?",
      choices: [
        "The folder itself should be the dynamic route (not recommended)",
        "create a dynamic route within the folder",
      ],
      default: "create a dynamic route within the folder",
      when: (response) => response.nestedPath && response.dynamicRoute,
    },
    {
      type: "confirm",
      name: PagePromptConfig.catchAll,
      message: "Is this intended to be a catch-all route?",
      default: false,
      when: (response) => response.dynamicRoute,
    },
    {
      type: "confirm",
      name: PagePromptConfig.wantGetServerSideProps,
      message: "Do you want to make use of getServerSideProps?",
      default: false,
    },
    {
      type: "confirm",
      name: PagePromptConfig.wantGetStaticProps,
      message: "Do you want to make use of getStaticProps?",
      default: false,
      when: (response) => !response.wantGetServerSideProps,
    },
    {
      type: "confirm",
      name: PagePromptConfig.wantGetStaticPaths,
      message: "Do you want to make use of getStaticPaths?",
      default: false,
      when: (response) =>
        !response.wantGetServerSideProps &&
        response.wantGetStaticProps &&
        response.dynamicRoute,
    },
  ],
  actions: (data) => {
    const answers = data as Answers;
    const actions: Actions = [];
    if (/^api/gm.test(answers.existingDestination)) {
      throw new Error("not meant for API routes");
    }
    const folderIsDynamic =
      "The folder itself should be the dynamic route (not recommended)";
    const filePath = pathHelper(
      pageDirectory,
      answers.folderIsDynamic === folderIsDynamic,
      //@ts-ignore this is a boolean
      answers.catchAll,
      answers.dynamicRoute,
      answers.nestedPath,
      answers.existingDestination
    );

    const parsedPath = filePath
      .replace(
        `{{ snakeCase ${PagePromptConfig.pageName} }}`,
        snakeCase(answers.pageName)
      )
      .replace(
        `{{ kebabCase ${PagePromptConfig.pageName} }}`,
        kebabCase(answers.pageName)
      );

    if (existsSync(parsedPath)) {
      throw new Error(`Page ${parsedPath} already exists`);
    }

    actions.push({
      type: "add",
      templateFile: `${templateDir}/template.hbs`,
      path: filePath,
      abortOnFail: true,
    });
    actions.push({
      type: "lintify",
      data: {
        path: pageDirectory,
      },
    });
    return actions;
  },
};
