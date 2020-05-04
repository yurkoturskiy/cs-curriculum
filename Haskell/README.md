# Haskell

I use WSL on Windows 10. Here I store my learning outcome.

## Quick guide to prepare environment [[1]](https://docs.haskellstack.org/en/stable/README/#how-to-install)

1. Install: `curl -sSL https://get.haskellstack.org/ | sh`;
2. Upgrade: `stack upgrade`;
3. Start a new project: `stack new my-project`;
4. Download compiler & prepare everything to go: `stack setup`;
5. Build the project: `stack build`;
6. Execute that: `stack exec my-project-exe`;
7. Run REPL: `stack ghci`.

## Default project directory:

```shell
.
├── app
│   └── Main.hs
├── ChangeLog.md
├── LICENSE
├── my-project.cabal
├── package.yaml
├── README.md
├── Setup.hs
├── src
│   └── Lib.hs
├── stack.yaml
└── test
    └── Spec.hs

    3 directories, 10 files

```
