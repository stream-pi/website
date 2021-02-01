# Contributing to Stream-Pi's React Website

## Setting up the Environment

In order to develop for this project, you'll need to get set up for web development. This first part will go over how to get set up with node and npm. This project makes use of npm **we do not use yarn**.

### Installing Node / NPM

Visit the [Node JS Website](https://nodejs.org/) and download the **LTS Release**. At the time of writing this, it is **14.5.3**.

Run the installer that it downloads and go through the setup. After setup finishes open your terminal and type:

```bash
node -v
# AND
npm -v
```

if the install was successful, each command will output a response with a version number.

On unix based operating systems, you may run into permission issues when trying to globally install packages. To fix this, follow [this guide](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) which explains how to change the npm global location.

### Getting **GLOBAL** packages

You may find that you need to install the `typescript` package globally, in fact it is generally recommended.

```bash
npm i -g typescript
```

To check if the installations worked, you can run:

```bash
tsc -v
```

Typescript is the codebase of the website, and the installation includes a compiler. In case your IDE can not be configured to use the one in `node_modules/typescript/lib` you will need an installation to fall back on.

And that is all you'll need to get set up, the project itself contains the rest of the npm modules needed to run.

## Development Dependencies

Take note of the current development dependencies, **these will automatically be installed when you run the install command in the project directory:**

```json
"devDependencies": {
    "@types/node": "^14.14.20",
    "@types/nodemailer": "^6.4.0",
    "@types/react": "^17.0.0",
    "@types/react-google-recaptcha": "^2.1.0",
    "chalk": "^4.1.0",
    "typescript": "^4.1.3"
  }
```

Don't worry about the `@types/` ones, as those are for typescript react projects.

## Setting up an Editor

You can probably use any text-editor or IDE that you can use to write React code. Depending on what you use, there may be some additional setup you can do to make development much easier!

We prefer Visual Studio Code but other popular choices are

- Atom<span />.io
- brackets<span />.io
- Visual Studio
- WebStorm
- Sublime Text

### Visual Studio Code

As Visual Studio Code was used to write the code in this repo, those who opt to use it to contribute have an advantage.

The repo comes with a `.vscode` folder containing extension recommendations, special settings, a debug configuration and utility tasks.

Please do install the recommended extensions

The utility tasks are intended to remove the `preinstall`, `prebuild`, and `predev` scripts from the package.json file. And then re-add them.

You shouldn't NEED to do this, but if you find that these scripts are blocking you from running the `install`, `dev`, or `build` commands then you can run the vscode task to remove them.

To run the task(s):

1. Bring up the command palette (<kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd> on windows OR <kbd>⌘ Command</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd> on mac)
2. Type `Tasks: Run Task`
3. Select either **Add Node Helper Scripts** or **Remove Node Helper Scripts**
4. Select the "Continue without scanning..." option.
