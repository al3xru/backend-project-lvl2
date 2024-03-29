// @ts-check
import { cwd } from 'process';
import { resolve, extname } from 'path';
import { readFileSync } from 'fs';
import _ from 'lodash';
import parse from './parsers.js';

const getPath = (file) => resolve(cwd(), file);
const readFile = (file) => readFileSync(file);

const getObject = (fileName) => {
  // TODO: check file exist
  const fileType = extname(fileName);
  return parse(readFile(getPath(fileName)), fileType);
};

const types = {
  unchanged: 'unchanged',
  changed: 'changed',
  deleted: 'deleted',
  added: 'added',
};

const compare = (obj1, obj2) => {
  const sortedUniqKeys = _.union(_.keys(obj1), _.keys(obj2)).sort();
  return sortedUniqKeys.map((key) => {
    const valueObj1 = obj1[key];
    const valueObj2 = obj2[key];

    if (!_.has(obj2, key)) {
      return {
        key,
        value: valueObj1,
        type: types.deleted,
      };
    }

    if (!_.has(obj1, key)) {
      return {
        key,
        value: valueObj2,
        type: types.added,
      };
    }

    if (valueObj1 !== valueObj2) {
      return {
        key,
        valueOld: valueObj1,
        value: valueObj2,
        type: types.changed,
      };
    }

    if (valueObj1 === valueObj2) {
      return {
        key,
        value: valueObj1,
        type: types.unchanged,
      };
    }

    return 'error';
  });
};

const show = (diffs) => {
  let output = '{\n';
  _.forIn(diffs, (value) => {
    switch (value.type) {
      case 'unchanged':
        output += `    ${value.key}: ${value.value}\n`;
        break;
      case 'changed':
        output += `  - ${value.key}: ${value.valueOld}\n`;
        output += `  + ${value.key}: ${value.value}\n`;
        break;
      case 'deleted':
        output += `  - ${value.key}: ${value.value}\n`;
        break;
      case 'added':
        output += `  + ${value.key}: ${value.value}\n`;
        break;
      default:
        output += 'type error';
    }
  });
  output += '}';
  return output;
};

export default (file1, file2) => show(compare(getObject(file1), getObject(file2)));
