# compare-versions-cli

> Small cli wrapper around compare-versions module

## Install

```
$ npm install --global compare-versions-cli
```

## Usage

```
Usage
  $ compare-versions-cli versionA versionB

Options
  --help     Shows this help prompt

Examples
  $ compare-versions-cli v1.2.2 v1.1.1
  1
  $ compare-versions-cli v1.1.1 v1.2.2
  -1
  $ compare-versions-cli v1.1.1 v1.1.1
  0
```

For quick use anywhere on the command-line
```
$ npx compare-versions-cli v1.2.2 v1.1.1
1
```
