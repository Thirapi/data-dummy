const express = require('express');
const app = express();
const port = 3000;

// Contoh data dummy
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const posts = [
  { id: 1, title: 'Hello World' },
  { id: 2, title: 'Another Post' }
];

// Endpoint untuk mengambil daftar pengguna
app.get('/users', (req, res) => {
  res.json(users);
});

// Endpoint untuk mengambil data pengguna berdasarkan ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  res.json(user || {});
});

// Endpoint untuk mengambil daftar postingan
app.get('/posts', (req, res) => {
  res.json(posts);
});

// Endpoint untuk mengambil data postingan berdasarkan ID
app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  res.json(post || {});
});

app.listen(port, () => {
  console.log(`API server berjalan`);
});
