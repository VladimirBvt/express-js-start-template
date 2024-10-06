import yaml from 'js-yaml'
import fs from 'node:fs'

const inputFile = 'spec.yaml'
const outputFile = 'output.json'
const obj = yaml.load(fs.readFileSync(inputFile, { encoding: 'utf-8' }))

fs.writeFileSync(outputFile, JSON.stringify(obj, null, 2))
// run node convert.js
