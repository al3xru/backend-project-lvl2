#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/gendiff.js';
// import packageInfo from '../package.json' assert { type: "json" };

const program = new Command();
program
  .name('genDiff')
  .description(' Compares two configuration files and shows a difference.')
  // .version(packageInfo.version)
  .version('0.0.3')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
  })
  .parse(process.argv);
