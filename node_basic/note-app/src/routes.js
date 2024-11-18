const { getNotesHandler, addNoteHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes/find/{title?}',
    handler: getNotesHandler,
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];

module.exports = routes;
