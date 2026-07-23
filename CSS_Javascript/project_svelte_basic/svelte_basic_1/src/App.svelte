<script>
  import Card from './Card.svelte';
  import allItems from './data.json';

  let visibleItems = allItems.slice(0, 4);

  function addRandom() {
    const remaining = allItems.filter(
      item => !visibleItems.some(v => v.id === item.id)
    );

    if (remaining.length === 0) return;

    const randomItem =
      remaining[Math.floor(Math.random() * remaining.length)];

    visibleItems = [...visibleItems, randomItem];
  }

  function removeRandom() {
    if (visibleItems.length <= 1) return;

    const index = Math.floor(Math.random() * visibleItems.length);
    visibleItems = visibleItems.filter((_, i) => i !== index);
  }
</script>

<h1 class="title">Our Partners</h1>

<div class="controls">
  <button on:click={removeRandom}>−</button>
  <span>{visibleItems.length}</span>
  <button on:click={addRandom}>+</button>
</div>

<div class="cards-wrapper">
  {#each visibleItems as item (item.id)}
    <Card {item} />
  {/each}
</div>

<style>
:global(body) {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f2f2f2;
}

.title {
  text-align: center;
  margin: 24px 0;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.controls button {
  width: 36px;
  height: 36px;
  font-size: 20px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: #2bcbba;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.controls span {
  font-weight: bold;
}

.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 10px 16px 20px;
  justify-content: center;
}
</style>
