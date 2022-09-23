# How to start

```bash
#Install deps
yarn 

# Run in dev
yarn dev
```

# Reproduce issue

1- Submit the form on `/` with an empty value to generate error

2- Re-submit form with value

## Expected behaviour
Action data should be null because we come from action redirection


## Current behaviour
Action data of previous step is return as action data  after a redirection from action