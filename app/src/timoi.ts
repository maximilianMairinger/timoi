import pretty from "pretty-ms"

function now() {
  return +new Date()
}

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
