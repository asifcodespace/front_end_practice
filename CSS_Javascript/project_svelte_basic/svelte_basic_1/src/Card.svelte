<script>
  export let item;
</script>

<div class="card">
  <img class="cover" src={item.cover_photo_url} alt={item.name} />

  <div class="card-body">
    <img class="logo" src={item.logo_url} alt={item.name} />
    <h3>{item.name}</h3>
    <p>{item.type}</p>
    <button>Visit</button>
  </div>
</div>

<style>
.card {
  background: #fff;
  border-radius: 10px;
  width: 220px;
  overflow: hidden;
  box-shadow: 0 6px 14px rgba(0,0,0,0.12);
  transition: transform 0.25s;
}

.card:hover {
  transform: translateY(-4px);
}

.cover {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.card-body {
  padding: 12px;
}

.logo {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-bottom: 8px;
}

h3 {
  font-size: 16px;
  margin: 0 0 4px;
}

p {
  font-size: 13px;
  color: #666;
  margin: 0;
}

button {
  margin-top: 10px;
  width: 100%;
  padding: 8px;
  background: #2bcbba;
  border: none;
  color: #fff;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
 
}

button:hover {
  background: #16a085;
}

@media (max-width: 480px) {
  .card {
    width: 190px;
  }
}
</style>
