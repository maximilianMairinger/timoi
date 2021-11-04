import pretty from "pretty-ms"
import isBrowser from "is-browser"

//@ts-ignore
export const now = isBrowser ? performance.now.bind(performance) : perf_hooks.performance.now

export function timoi() {
  const start = now()
  const time = () => now() - start
  const done = () => {console.log(`Took ${str()}`); return done as typeof done}
  const str = () => pretty(time())
  done.time = time
  done.str = str

  return done 
}

export default timoi
