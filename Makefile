install: install-deps

run:
	npx babel-node 'src/bin/gendiff.js' 10

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

help:
	npx babel-node src/bin/gendiff.js -h

test:
	npm test

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test
