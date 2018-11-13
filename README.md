# Star Wars API explorer

This is a React app that uses the wonderful Star Wars API. The intention is to produce an app that allows you to navigate around the data in a variety of ways.

## Pre-requisites

I used Node v10.13.0 and npm v6.4.1

## Setup

This app was created using `npx create-react-app swapiexplorer` which generates a [new readme file which you can read, here](./README.create-react-app.md) - however I soon 'ejected' the app

## Starting Goals

I have some goals for the project, mostly to do with learning these technologies in some depth. I use them at work, but I'd like to explore the range of implementation choices.

### Redux?

Yeah.

### Thunk, Sagas or Apollo?

The SWAPI [REST endpoint](http://swapi.co/api) is where I'll start. I may skip thunks and start with sagas.

We have access to a [SWAPI GraphQL endpoint](https://graphql.org/swapi-graphql/) so I'll also implement some Apollo based api calls

### Render props

At work we use the HOC approach. I'm also going to use render props / component injection.

### Testing

I'll be using Jest and Kent Dodds [react-testing-library](https://github.com/kentcdodds/react-testing-library)

#### UI Tests

I'll be having a look at [puppeteer](https://github.com/GoogleChrome/puppeteer). I'm not sure it could be considered for integration testing, but I'll see how far it can be pushed.

#### Integration tests - e2e

I'll also have a look at [Cypress.io](https://www.cypress.io/features/) as they provide a free to use test runner in addition to their paid insights dashboard. The free version may be useless without the dashboard, but I'll see...

### Storybook

It's good to document as you go - storybook brings the components and their behaviours into one place. It also facilitates creating components in isolation, which I'd like to try.

### PWA - Progressive Web App

I'll also be turning this into a progressive web app, the basic requirements of which are:

- serve over HTTPS
- provide a manifest (create react app creates this at `/public/manifest.json`)
- register a `ServiceWorker`

## Tutorial

This repo will have explanatory `readme` files, but I intend to blog some details at [webpusher.ie](https://www.webpusher.ie)
