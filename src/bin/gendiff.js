#!/usr/bin/env node

import program from 'commander';

program
  .version('0.0.1', '-V, --version')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfig>')
  .arguments('<secondConfig>')
  .parse(process.argv);
