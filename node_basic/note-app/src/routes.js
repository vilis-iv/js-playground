const crypto = require('crypto');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: (request, _h) => {
      const { title, tags, body } = request.params;
      const { id } = `note-${crypto.randomBytes(10).toString('hex')}`;
    },
  },
];

module.exports = routes;
