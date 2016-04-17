'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
let app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let data = [
  {
    id: 1,
    title: 'Enter Shaman',
    artist: 'Metallica'
  },
  {
    id: 2,
    title: 'Master of Puppets',
    artist: 'Metallica'
  },
  {
    id: 3,
    title: 'The Unfogiven',
    artist: 'Metallica'
  },
  {
    id: 4,
    title: 'Nothing Else Matters',
    artist: 'Metallica'
  }
];

app.get('/songs', (req, res)=> {
  res.json(data);
});

app.get('/songs/:id', (req, res) => {
  if (_.some(data, {id: req.params.id})) {
    res.json(_.find(data, {id: req.params.id}));
  } else {
    res.sendStatus(400).json({status: 'error'});
  }

});

app.put('/songs/:id', (req, res) => {
  let updated = false;
  _.map(data, (item) => {
    if (item.id == req.params.id) {
      return updated = _.extend(item, req.body);
    }
    return item;
  });
  if (updated) {
    res.json(updated);
  } else {
    res.sendStatus(400).json({status: 'error'});
  }
});

app.post('/songs', (req, res) => {
  var song = _.extend({
    id: _.maxBy(data, 'id').id + 1
  }, req.body);
  var index = data.push(song);
  res.json(data[index - 1]);
});

app.delete('/songs/:id', (req, res) => {
  var id = parseInt(req.params.id);
  if (_.some(data, {id: id})) {
    data = _.reject(data, {id: id});
    res.json({status: 'success'});
  } else {
    res.sendStatus(400).json({status: 'error'});
  }
});
app.listen(3000, () => {
  console.log('Server is available on port 3000');
});
