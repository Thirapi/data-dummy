const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Contoh data dummy
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
  { id: 5, name: 'Eva' },
  { id: 6, name: 'Frank' },
  { id: 7, name: 'Grace' },
  { id: 8, name: 'Hannah' },
  { id: 9, name: 'Isaac' },
  { id: 10, name: 'Jack' },
  { id: 11, name: 'Kate' },
  { id: 12, name: 'Leo' },
  { id: 13, name: 'Mia' },
  { id: 14, name: 'Noah' },
  { id: 15, name: 'Olivia' },
  { id: 16, name: 'Paul' },
  { id: 17, name: 'Quinn' },
  { id: 18, name: 'Rachel' },
  { id: 19, name: 'Steve' },
  { id: 20, name: 'Tina' },
  { id: 21, name: 'Uma' },
  { id: 22, name: 'Victor' },
  { id: 23, name: 'Wendy' },
  { id: 24, name: 'Xander' },
  { id: 25, name: 'Yara' },
  { id: 26, name: 'Zack' },
  { id: 27, name: 'Amanda' },
  { id: 28, name: 'Bruno' },
  { id: 29, name: 'Carmen' },
  { id: 30, name: 'Derek' }
];

const posts = [
  { id: 1, title: 'Hello World', content: 'This is the first post.' },
  { id: 2, title: 'Another Post', content: 'Here is some more content.' },
  { id: 3, title: 'Learning Express', content: 'Express is a powerful framework.' },
  { id: 4, title: 'JavaScript Basics', content: 'Understanding the basics of JS.' },
  { id: 5, title: 'API Development', content: 'Building APIs with Node.js and Express.' },
  { id: 6, title: 'Frontend Frameworks', content: 'React, Vue, and Angular are popular.' },
  { id: 7, title: 'Backend Technologies', content: 'Node.js, Django, and more.' },
  { id: 8, title: 'Database Design', content: 'Structuring your data efficiently.' },
  { id: 9, title: 'Security Best Practices', content: 'Keeping your application secure.' },
  { id: 10, title: 'Deploying Apps', content: 'Steps to deploy your application.' },
  { id: 11, title: 'Performance Optimization', content: 'Making your app faster.' },
  { id: 12, title: 'Scaling Applications', content: 'Handling increased traffic.' },
  { id: 13, title: 'Testing Strategies', content: 'Ensuring your app works correctly.' },
  { id: 14, title: 'Continuous Integration', content: 'Automating testing and deployment.' },
  { id: 15, title: 'Microservices Architecture', content: 'Decoupling services for scalability.' },
  { id: 16, title: 'Serverless Computing', content: 'Building apps without managing servers.' },
  { id: 17, title: 'Mobile Development', content: 'Creating apps for mobile platforms.' },
  { id: 18, title: 'Progressive Web Apps', content: 'Building web apps with native features.' },
  { id: 19, title: 'Cloud Infrastructure', content: 'Leveraging cloud services.' },
  { id: 20, title: 'GraphQL vs REST', content: 'Choosing the right API style.' },
  { id: 21, title: 'Machine Learning Basics', content: 'Intro to AI and ML.' },
  { id: 22, title: 'Big Data Analytics', content: 'Handling large datasets.' },
  { id: 23, title: 'Blockchain Technology', content: 'Understanding decentralized systems.' },
  { id: 24, title: 'Cybersecurity', content: 'Protecting your data and systems.' },
  { id: 25, title: 'DevOps Best Practices', content: 'Improving collaboration and deployment.' },
  { id: 26, title: 'Agile Methodologies', content: 'Managing projects effectively.' },
  { id: 27, title: 'Data Science', content: 'Extracting insights from data.' },
  { id: 28, title: 'IoT Development', content: 'Connecting devices and systems.' },
  { id: 29, title: 'AR/VR Applications', content: 'Building immersive experiences.' },
  { id: 30, title: 'Ethical Hacking', content: 'Testing your system security.' }
];

const products = [
  {
      id: 1,
      title: "Distortion Heavyweight Black",
      price: 239.000,
      coverImg: "kaos1.jpg"
  },
  {
      id: 2,
      title: "Charnel Heavyweight White",
      price: 239.000,
      coverImg: "kaos2.jpg"
  },
  {
      id: 3,
      title: "Menace Heavyweight Tshirt",
      price: 249.000,
      coverImg: "kaos3.jpg"
  },
  {
      id: 4,
      title: "Ranger Pants Denim Raw Indigo",
      price: 469.000,
      coverImg: "celanaRangers.jpg"
  },
  {
      id: 5,
      title: "Craftman Pants Denim Raw Indigo",
      price: 429.000,
      coverImg: "celanaCraftman.jpg"
  },
  {
      id: 6,
      title: "Snug Set Brown",
      price: 539.000,
      coverImg: "snugSet.jpg"
  },
  {
      id: 7,
      title: "Sentimental Lighter Silver",
      price: 149.000,
      coverImg: "lighter.png"
  },
  {
      id: 8,
      title: "Laze Five Panel Cap Black",
      price: 169.000,
      coverImg: "cap.jpg"
  }
];

// Endpoint untuk mengambil daftar pengguna
app.get('/products', (req, res) => {
  res.json(products);
});

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
})

// Endpoint untuk mengambil data postingan berdasarkan ID
app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  res.json(post || {});
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint untuk menambahkan pengguna baru (POST)
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,  // Tambahkan ID baru secara otomatis
    name: req.body.name    // Ambil nama dari body request
  };
  users.push(newUser);  // Simpan data baru (simulasi)
  res.status(201).json({
    message: 'Pengguna berhasil ditambahkan',
    user: newUser
  });
});

// Endpoint untuk memperbarui data pengguna berdasarkan ID (PUT)
app.put('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    const updatedUser = { ...users[userIndex], name: req.body.name };
    // Simulasi pembaruan pengguna tanpa menyimpan data asli
    res.json({ message: 'Pengguna berhasil diperbarui', user: updatedUser });
  } else {
    res.status(404).json({ message: 'Pengguna tidak ditemukan' });
  }
});

// Endpoint untuk memperbarui sebagian data pengguna (PATCH)
app.patch('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    const updatedUser = { ...users[userIndex], ...req.body };
    // Simulasi pembaruan sebagian pengguna tanpa menyimpan data asli
    res.json({ message: 'Pengguna berhasil diperbarui', user: updatedUser });
  } else {
    res.status(404).json({ message: 'Pengguna tidak ditemukan' });
  }
});

// Endpoint untuk menghapus pengguna berdasarkan ID (DELETE)
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    const deletedUser = users[userIndex];
    // Simulasi penghapusan pengguna tanpa menyimpan data asli
    res.json({ message: 'Pengguna berhasil dihapus', user: deletedUser });
  } else {
    res.status(404).json({ message: 'Pengguna tidak ditemukan' });
  }
});

// Endpoint untuk menambahkan postingan baru (POST)
app.post('/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  // Simulasi penambahan postingan baru tanpa menyimpan data asli
  posts.push(newPost);
  res.status(201).json({
    message: 'Postingan berhasil ditambahkan',
    post: newPost
  });
});

// Endpoint untuk memperbarui data postingan berdasarkan ID (PUT)
app.put('/posts/:id', (req, res) => {
  const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex !== -1) {
    const updatedPost = {
      ...posts[postIndex],
      title: req.body.title,
      content: req.body.content
    };
    // Simulasi pembaruan postingan tanpa menyimpan data asli
    posts[postIndex] = updatedPost;
    res.json({
      message: 'Postingan berhasil diperbarui',
      post: updatedPost
    });
  } else {
    res.status(404).json({ message: 'Postingan tidak ditemukan' });
  }
});

// Endpoint untuk memperbarui sebagian data postingan (PATCH)
app.patch('/posts/:id', (req, res) => {
  const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex !== -1) {
    const updatedPost = {
      ...posts[postIndex],
      ...req.body
    };
    // Simulasi pembaruan sebagian postingan tanpa menyimpan data asli
    posts[postIndex] = updatedPost;
    res.json({
      message: 'Postingan berhasil diperbarui',
      post: updatedPost
    });
  } else {
    res.status(404).json({ message: 'Postingan tidak ditemukan' });
  }
});

// Endpoint untuk menghapus postingan berdasarkan ID (DELETE)
app.delete('/posts/:id', (req, res) => {
  const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex !== -1) {
    const deletedPost = posts[postIndex];
    // Simulasi penghapusan postingan tanpa menyimpan data asli
    posts.splice(postIndex, 1);
    res.json({
      message: 'Postingan berhasil dihapus',
      post: deletedPost
    });
  } else {
    res.status(404).json({ message: 'Postingan tidak ditemukan' });
  }
});


app.listen(port, () => {
  console.log(`API server berjalan`);
});
