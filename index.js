import express from 'express';
const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`API server berjalan`);
});
