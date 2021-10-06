⚠️ *This repository is archived. For an updated list of examples see [arc.codes/examples](https://arc.codes/examples).*

# arc-example-events-pubsub

Demonstrates using `@events` as background tasks from a web app.

## Setup

1. run `npm i` to install deps in the root
2. run `npx hydrate` to install deps into lambdas in src
3. run `npx sandbox` to try it out locally in your browser
4. run `npx t` to run the tests

### Things to note:

- included purecss for no good reason
- src/events/background-task has a .arc-config which I used `npx config apply` to set the timeout to a couple of minutes if you choose to deploy this with `npx create`
