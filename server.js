const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 7;

let friends = [
  {
    id: 1,
    name: 'Austin Powell',
    age: 23,
    email: 'austin.powellFSW@gmail.com'
  },
  {
    id: 2,
    name: 'Jeremy Rogel',
    age: 23,
    email: 'jeremy.rogel@lambdaschool.com'
  },
  {
    id: 3,
    name: 'Skyler Slatosch',
    age: 23,
    email: 'skyler.slatosch@lambdaschool.com'
  },
  {
    id: 4,
    name: 'dAVE Inden',
    age: 25,
    email: 'dAVE.inden@lambdaschool.com'
  },
  {
    id: 5,
    name: 'Lorenzo Simpson',
    age: 23,
    email: 'lorenzosimp@gmail.com'
  },
  {
    id: 6,
    name: 'Ian Schwartz',
    age: 24,
    email: 'ian.schwartz@lambdaschool.com'
  }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: '🚫 User must be logged in to do that ! 🚫' });
  }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'User' && password === 'Pass') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: '🚫 Username or Password is Incorrect. Please see the Readme. 🚫' });
  }
});

app.get('/api/friends', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(friends);
  }, 1000);
});

app.get('/api/friends/:id', authenticator, (req, res) => {
  const friend = friends.find(f => f.id == req.params.id);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.post('/api/friends', authenticator, (req, res) => {
  const friend = { id: getNextId(), ...req.body };

  friends = [...friends, friend];

  res.send(friends);
});

app.put('/api/friends/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const friendIndex = friends.findIndex(f => f.id == id);

  if (friendIndex > -1) {
    const friend = { ...friends[friendIndex], ...req.body };

    friends = [
      ...friends.slice(0, friendIndex),
      friend,
      ...friends.slice(friendIndex + 1)
    ];
    res.send(friends);
  } else {
    res.status(404).send({ msg: '🚫 Friend not found 🚫' });
  }
});

app.delete('/api/friends/:id', authenticator, (req, res) => {
  const { id } = req.params;

  friends = friends.filter(f => f.id !== Number(id));

  res.send(friends);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
