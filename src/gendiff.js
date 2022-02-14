// @ts-check
import { Command } from 'commander';
// import packageInfo from '../package.json' assert { type: "json" };

export default () => {
  const program = new Command();
  program
    .name('genDiff')
    .description(' Compares two configuration files and shows a difference.')
    // .version(packageInfo.version)
    .version('0.0.2')
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format <type>', 'output format')
    .parse();
};
