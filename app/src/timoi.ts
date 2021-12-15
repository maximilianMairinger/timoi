import * as pretty from "pretty-ms"
import isBrowser from "is-browser"

//@ts-ignore
export const now = performance.now.bind(performance)

export function timoi(name: string = "") {
  let callCount = 1
  const start = now()
  const time = () => now() - start
  const done = name !== "" ? 
    () => {console.log(`${name + (callCount++ > 1 ? ("#" + (callCount-1)) : "")} took ${str()}`); return done as typeof done} : 
    () => {console.log(`Took ${str()}`); return done as typeof done}
  const str = () => pretty(time())
  done.time = time
  done.str = str

  return done 
}

export default timoi
