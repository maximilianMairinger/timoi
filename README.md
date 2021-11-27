# Timoi

Yet another elapse time library.

## Installation

```shell
 $ npm i timoi
```

## Usage

Log to the console or take timing date for further computation

```ts
import timoi from "timoi"

const time = timoi()
doWork()

time()      // console.log(`Took ${x}ms`)
time.time() // x
time.str()  // `${x}ms`
```

Named scopes

```ts
import timoi from "timoi"

const time = timoi("doWork")
doWork()

time()      // console.log(`doWork took ${x}ms`)
doWork()

time()      // console.log(`doWork#2 took ${x}ms`)
```

## Contribute

All feedback is appreciated. Create a pull request or write an issue.
