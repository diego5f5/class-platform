# Class Platform

>The idea of this project is based on the challenge promoted by Rocketseat. A web application that manages a class platform, where it is possible to register and access a schedule of classes and contents.

![Class Platform](https://raw.githubusercontent.com/diego5f5/class-platform/main/readme-files/presentation.png)

## Getting Started

The following instructions will provide you information to get the project up and running on your local machine for development purposes.

#### Prerequisites

- Node.JS min version 14.x
- Yarn

#### Libraries and Frameworks

This project uses mainly the following libraries and frameworks:

- [graphcms](https://graphcms.com/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Vime](https://vimejs.com/)
- [Apollo Graphql](https://www.apollographql.com/)
- [Tailwindcss](https://tailwindcss.com/)
- [Phosphor Icons](https://phosphoricons.com/)

## Installing dependencies

```
yarn install
```

## Running

To use the application in a complete and integrated way, you need a CMS structure that provides a graphql api.
In this example I use the [graphcms](https://graphcms.com/) tool.

To clone my project structure in this tool you can use this clone url:
https://app.graphcms.com/clone/1b5d29051fdc438cb90da3bd0a22d2ed?name=Ignite%20Lab%20-%20Diego%20Ferreira

After cloning the structure, it will be necessary to set some environment variables in the project.

First create a file in the project root, called ".env.local".
In this file add the variables:

```
VITE_API_URL="YOUR_API_URL_HERE"
VITE_API_ACCESS_TOKEN="YOUR_API_ACESS_TOKEN_HERE"
```

Note: You need to replace the variable values with the corresponding values from your project in the graphCMS tool.

After having configured the previous steps, just run:
```
yarn dev
```

## Building

```
yarn build
```
