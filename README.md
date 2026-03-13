# Vue Wordle

[Live demo](https://vue-wordle.netlify.app/)

A Vue implementation of the [Wordle game](https://www.powerlanguage.co.uk/wordle/). This is just for fun and doesn't aim to 100% replicate the original.

You can make your own Wordle and send it to friends by base64-encoding a word and include it as the URL query, e.g. https://vue-wordle.netlify.app/?YmxpbXA= (this will also allow words that are not in the dictionary.)

This repository is open sourced for learning purposes only - the original creator(s) of Wordle own all applicable rights to the game itself.

## Running the Demo Locally

The `demo/` directory contains a standalone Vue 3 + Vite app that consumes `@k0qed/vue-wordle` from this repo.

**Install dependencies** (from the repo root — npm workspaces links the library automatically):

```sh
npm install
```

**Start the demo dev server:**

```sh
cd demo && npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

**Other demo scripts:**

```sh
cd demo && npm run build    # production build
cd demo && npm run preview  # preview the production build
```

## Running the Original App

```sh
npm run dev     # dev server at http://localhost:3000
npm run build   # production build
npm run preview # preview production build
```
