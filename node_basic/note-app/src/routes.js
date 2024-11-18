const { getNotesHandler, addNoteHandler } = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/notes/{title?}',
    handler: getNotesHandler,
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];

module.exports = routes;
