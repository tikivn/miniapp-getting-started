# Contributing to MiniApp Demo

First, ensure you have the [latest `npm`](https://docs.npmjs.com/).

To get started with the repo:

```sh
$ git clone git@github.com:tikivn/miniapp-getting-started.git
```

Download the latest Tiki Mini Studio [here](https://miniapp.tiki.vn/docs/ide/overview) and see your changes in Simulator.


Follow below topics to go futher:

- [Code Structure](#code_structure)
- [Branching Strategy](#branching)
- [Commit Message Format](#commit)

## <a name="code_structure"></a> Code Structure
Each folder is a MiniApp Project, you can edit or create new project

## <a name="branching"></a> Branching Strategy

We follow a "typical" branching and lifecycle model:

* feature branches gets started from `main:HEAD`
* PRs get created onto `main`

## <a name="commit"></a> Commit Message Format

*This specification is inspired by and supersedes the [AngularJS commit message format](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit).*

We have very precise rules over how our Git commit messages must be formatted.
This format leads to **easier to read commit history**.

Each commit message consists of a **header**, a **body**, and a **footer**.


```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory and must conform to the [Commit Message Header](#commit-header) format.

The `body` is mandatory for all commits except for those of type "docs".
When the body is present it must be at least 20 characters long and must conform to the [Commit Message Body](#commit-body) format.

The `footer` is optional. The [Commit Message Footer](#commit-footer) format describes what the footer is used for and the structure it must have.

Any line of the commit message cannot be longer than 100 characters.


#### <a name="commit-header"></a>Commit Message Header

```
<type>(<scope>): <short summary>
  ?       ?             ?
  ?       ?             ??? Summary in present tense. Not capitalized. No period at the end.
  ?       ?
  ?       ??? Commit Scope: miniapp|mini-ui
  ?
  ??? Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.


##### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies
* **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **test**: Adding missing tests or correcting existing tests


##### Scope
The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages).

The following is the list of supported scopes are projects name (E.g `shopping`)
