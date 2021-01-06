import pretty from "pretty-ms"

function now() {
  return +new Date()
}

export function timoi() {
  const start = now()
  const time = () => now() - start
  const done = () => {console.log(pretty(time())); return done}
  done.time = time

  return done as typeof done & { time: () => number }
}

export default timoi
