# react-simple-seed
react simple seed for GDG Busan react.js study

# Prerequisites

- node.js >= `6.9.0` (recommend to use [`nvm`](https://github.com/creationix/nvm) for version switching)
- yarn >= `0.16` (installation by [macOS](https://yarnpkg.com/en/docs/install#mac-tab), [Windows](https://yarnpkg.com/en/docs/install#windows-tab))

# Installation

```
$ git clone https://github.com/taehwanno/react-simple-seed.git
$ cd react-simple-seed
$ yarn install
```

# Usage

## development

```
$ yarn start
$ yarn lint
```

## production

`build` 디렉토리 내부에 프로덕션용 파일이 생성됩니다.

```
$ yarn build
```

## test

```
$ yarn test
$ yarn test:coverage
$ yarn test:watch
```

## documentation

react.js와 관련된 javascript 파일을 [esdoc](https://esdoc.org/)을 사용하여 `documentation` 디렉토리에 문서화 결과를 생성합니다.

```
$ yarn esdoc
```

# transpile & packaging & scripts & production 
교재 5장에서 설명하고 있는 `babel`을 통한 트랜스파일링, `browserify`를 통한 `js` 파일 패키징, `cat`과 `sed`와 정규표현식을 활용한 `css` 파일 번들링, 배포 scripts 작성은 하지 않으셔도 됩니다. webpack 내부에서 동일한 테스크를 모두 처리합니다.

# lint

[eslint](http://eslint.org/)를 활용하여 [airbnb styleguide](https://github.com/airbnb/javascript/tree/master/react)를 따르도록 
설정해놨지만 초기 학습에는 과하다고 생각되어 관련 설정을 주석으로 처리했습니다.

[관련 커밋](https://github.com/taehwanno/react-simple-seed/commit/180313ecbc1f2813db7e27f36504111d7b648a85) 참고하시길 바랍니다.

# Directory Structure
`js` 디렉토리 내부에 `source`, `build` 폴더가 없다는 것이 교재 113p와의 차이점입니다.

```
.
├── build
├── coverage
├── css
├── images
├── js
│   └── components
└── node_modules
```

# License
MIT
