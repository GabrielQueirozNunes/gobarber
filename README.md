<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/GabrielQueirozNunes/GoBarber">
    <img src="web/src/assets/logo.svg" alt="Logo" height="180">
  </a>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [License](#license)

<!-- ABOUT THE PROJECT -->
## About The Project

![GoBarber web logon](./assets/GoBarberWeb/Logon.png)
![GoBarber web dashboard](./assets/GoBarberWeb/Dashboard.png)

![GoBarber mobile cadastro](./assets/GoBarberMobile/Cadastrar.png)
![GoBarber mobile list](./assets/GoBarberMobile/Lista.png)
### Built With

* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/getting-started)
* [TypeScript](https://www.typescriptlang.org/)
* [React](https://pt-br.reactjs.org/)
* [React Native](https://reactnative.dev/)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* nvm
https://github.com/nvm-sh/nvm

* Docker
https://docs.docker.com/engine/install/

* Node
```sh
nvm install v12.22.1
```

* Yarn
```sh
npm install --global yarn
```

### Installation
 
1. Create docker containers
```sh
docker run --name GoBarber -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres && docker run --name mongodb -p 27017:27017 -d -t mongo && docker run --name redis -p 6379:6379 -d -t redis:alpine
```
2. Clone the repo
```sh
git clone https://github.com/GabrielQueirozNunes/GoBarber
```
3. Install Yarn packages
```sh
cd server && yarn && cd ../web && yarn && cd ../mobile && yarn && cd ..
```
4. Set standard settings
```sh
cd server && cp ormconfig.example.json ormconfig.json && cp .env.example .env && cd ..
```
5. Set database migrations
```sh
cd server && yarn typeorm migration:run && cd ..
```
6. Turn on the server
```sh
cd server && yarn dev:server && cd ..
```
7. Turn on the web page
```sh
cd web && yarn start && cd ..
```
8. Turn on the mobile app
```sh
cd mobile && yarn start
```
9. Open android emulator
```sh
yarn android
```

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.
