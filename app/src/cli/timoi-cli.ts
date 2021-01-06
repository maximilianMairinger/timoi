#!/usr/bin/env node
import timoi from "../timoi"
import { program } from "commander"
import reqPackageJson from "req-package-json"
const config = reqPackageJson()

program
  .version(config.version)
  .name(config.name)

program
  .option('-s, --silent', 'silence stdout')
.parse(process.argv)


timoi(...program.args)
