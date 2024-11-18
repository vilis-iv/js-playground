const {
  getNotesHandler,
  addNoteHandler,
  updateNoteHandler,
  deleteNoteHandler,
} = require('./handler');

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
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: updateNoteHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteHandler,
  },
];

module.exports = routes;
