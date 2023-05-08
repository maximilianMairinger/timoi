import pretty from "pretty-ms"

export const now = Date.now.bind(Date)

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

  return done as DoneFunction
}

export type DoneFunction = () => DoneFunction & {time: () => number, str: () => string}

export default timoi
