import gendiff from '../src/gendiff.js';

const etalon = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('compareTestFiles', () => {
  expect(gendiff('./testFiles/file1.json', './testFiles/file2.json')).toEqual(etalon);
});
