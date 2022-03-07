import jsYaml from 'js-yaml';

const getParser = (fileType) => {
  if (fileType === '.json') {
    return (file) => JSON.parse(file);
  }
  if (fileType === '.yaml') {
    return (file) => jsYaml.load(file, 'utf-8');
  }
  throw new Error();
};

const parse = (data, format) => getParser(format)(data);

export default parse;
