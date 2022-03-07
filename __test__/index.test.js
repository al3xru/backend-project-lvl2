import fs from 'fs';
import gendiff from '../src/gendiff.js';

const expected = fs.readFileSync('./__fixtures__/expectedResultStylish.txt', 'utf-8');

test('compareTestFilesJson', () => {
  expect(gendiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toEqual(expected);
});
test('compareTestFilesYaml', () => {
  expect(gendiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml')).toEqual(expected);
});
