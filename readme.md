# Betsy Cart Module

My team was tasked with creating the backend infrastructure for a high traffic sales website, and I was tasked with designing and implementing the shopping cart module. Server side rendering has been implemented.

## Usage

To install dependencies, run

```npm install``` 

Then install either postgres or cassandra in the package manager of your choice.

To seed postgres, run

```npm run seed-postgres```

To seed cassandra, run

```npm run seed-cassandra```

Refer to my [Engineering Journal](https://drive.google.com/file/d/1ZMHVF6Ok9v8AHS46ZobG-DRFE_n4OGQB/view?usp=sharing) for information regarding optimization and my performance test results/

To build the frontent, run

```npm run build```

To start the server, run

```npm run start```

It should be accessable from localhost:3006.

## Other Links

[This](https://github.com/hair-punk/Cart-Test-Proxy) is a link to the proxy I used for stress tests.  It's really nothing special.
UPDATE: Proxy has been refactored for server side rendering.

