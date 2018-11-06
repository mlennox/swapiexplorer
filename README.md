# Star Wars API explorer

This is a React app that uses the wonderful Star Wars API. The intention is to produce an app that allows you to navigate around the data in a variety of ways.

## Pre-requisites

I used Node v10.13.0 and npm v6.4.1

## Setup

This app was created using `npx create-react-app swapiexplorer` which generates a [new readme file which you can read, here](./README.create-react-app.md)

## Testing

I'll be using Jest and Kent Dodds [react-testing-library](https://github.com/kentcdodds/react-testing-library)

## Thunk, Sagas or Apollo?

The SWAPI [REST endpoint(http swapi.co/api) is where I'll start.

We have access to a [GraphQL endpoint](https://graphql.org/swapi-graphql/) so I'll also implement some Apollo based api calls
