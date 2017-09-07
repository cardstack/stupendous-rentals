# Stupendous Rentals

## What is this thing?

The EmberJS guides have [a tutorial](https://guides.emberjs.com/current/tutorial/ember-cli/) that is structured around a demo app called [Super Rentals](https://github.com/ember-learn/super-rentals).

Stupdendous Rentals (this repo) is a fork of Super Rentals that goes further. It integrates [Cardstack](https://github.com/cardstack/cardstack) to demonstrate a complete frontend and backend working in tandem.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (version 7.0 or newer)
* [Yarn](https://yarnpkg.com/)
* [Docker](https://www.docker.com/)

## Installation

* `git clone <repository-url>` this repository
* `cd super-rentals`
* `yarn install`

## Running / Development

* Start the necessary server-side microservices. We want to make this automatic, but right now you need to do it yourself:

  * Elasticsearch:
  
      `docker run -d -p 9200:9200 cardstack/elasticsearch:dev`
      
    It takes a few seconds for the actual server process to be ready. You can reload http://localhost:9200 until you see JSON coming back.

* `ember serve`

* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
