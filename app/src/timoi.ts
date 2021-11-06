import pretty from "pretty-ms"
import isBrowser from "is-browser"

//@ts-ignore
export const now = performance.now.bind(performance)

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
