## Setup

### Clone repository

Clone the repository by running the following command:

```sh
https://github.com/NicMa1129/engineering-assessment.git && cd engineering-assessment
```

### Install dependencies

Once you've cloned the repository install the required dependencies:

```sh
yarn
```

## Run

### Development server

To run the project in development mode run:

```sh
yarn start:dev
```

### Production server

To run the project in production mode run:

```sh
yarn build
yarn preview
```

## Test

To run unit tests run:
```sh
yarn test
```

## Deploy

### Deploy with static files

After `yarn build`, under `dist` directory are the final production files, you can access them under `nginx` server

### Deploy with docker

To deploy the project in docker image run:

```sh
make
make run
```

After the command `make` is executed, two images files are generated. `food_trucks_web` is web server image. `food_trucks_web_unit_tests` is the image to run unit tests.

To run unit tests in docker image run:

```sh
make unit-tests
```