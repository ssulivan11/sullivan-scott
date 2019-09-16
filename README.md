# Scott Sullivan's Info Site

![](./src/assets/badge-statements.svg) ![](./src/assets/badge-branches.svg) ![](./src/assets/badge-functions.svg) ![](./src/assets/badge-lines.svg)

I'm an experienced UI Engineer who is meticulous about quality, meeting requirements within timelines and pushing technical boundaries to deliver outstanding user experiences. This is the website for my informational website about me and can be found here at [ssullivan.info](https://ssullivan.info/).

## Getting started

### Requirements

Install the following:

- node >=10
- yarn

### Installation

Install local project dependencies:

```
$ yarn
```

### Development

To run the local development environment use

```
$ yarn start
```

and then access the server on

```
http://localhost:8080/
```

## Using Production mode

### Production build

```
$ yarn build
```

### Run

To start server

```
$ yarn build && yarn serve
```

and afterwards can access the server on

```
http://localhost:3001/
```

### Unit Testing

```
$ yarn test:unit
```

To update Jest snapshots run:

```
$ yarn test:unit -u
```

To continually watch unit tests:

```
$ yarn test:unit:watch
```

### E2E Testing

To start a test server and run Cypress tests:

```
$ yarn test:e2e
```

To run without UI:

```
$ test:e2e:run
```
