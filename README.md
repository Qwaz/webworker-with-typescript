# webworker-with-typescript
This repository contains two examples of using WebWorker API in a Webpack + TypeScript environment.

First directory, `worker-loader` shows an example setup using Webpack `worker-loader` plugin. Webpack `worker-loader` plugin supports inline loading and supports [TypeScript integration](https://github.com/webpack-contrib/worker-loader#integrating-with-typescript).

Second directory, `multiple-entry` shows an example setup using Webpack's multiple entry feature. It also utilizes webpack's builtin plugin to merge common chunks of master and worker to a separate file.
