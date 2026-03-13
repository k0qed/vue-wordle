<script setup lang="ts">
import { ref } from 'vue'
import { Game } from '@k0qed/vue-wordle'

const gameKey = ref(0)

function resetGame() {
  gameKey.value++
}
</script>

<template>
  <div class="demo-wrapper">
    <div class="demo-header">
      <p class="demo-subtitle">Powered by <code>@k0qed/vue-wordle</code></p>
    </div>
    <div class="instructions">
      <p>
        Guess the 5-letter word in 6 tries. Type letters and press
        <strong>Enter</strong> to submit. The word changes daily.
      </p>
    </div>
    <Game :key="gameKey" />
    <div class="controls">
      <button @click="resetGame">Reset Game</button>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background: #fff;
  font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
  text-align: center;
}

.demo-wrapper {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px 40px;
}

.demo-header {
  padding: 8px 0 4px;
}

.demo-subtitle {
  color: #666;
  font-size: 0.85rem;
  margin: 0;
}

.demo-subtitle code {
  background: #f3f3f3;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 0.8rem;
}

.instructions {
  font-size: 0.875rem;
  color: #555;
  margin: 8px 0 16px;
}

.instructions p {
  margin: 0;
}

.controls {
  margin-top: 24px;
}

.controls button {
  padding: 10px 28px;
  font-size: 1rem;
  font-weight: 600;
  background: #6aaa64;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 0.04em;
}

.controls button:hover {
  background: #5a9a54;
}
</style>
