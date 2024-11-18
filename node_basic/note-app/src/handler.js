const { nanoid } = require('nanoid');
const notes = require('./notes');

const getNotesHandler = (request, h) => {
  const { title } = request.params;

  console.log(`${title}`);

  const response = h
    .response({
      status: 'success',
      data:
        title != null ? notes.filter((note) => note.title === title) : notes,
    })
    .code(200);

  return response;
};

const addNoteHandler = (request, h) => {
  const id = nanoid(16);
  const { title, tags, body } = request.payload;
  const createAt = new Date().toISOString();
  const updateAt = createAt;

  const newNote = {
    id,
    title,
    tags,
    body,
    createAt,
    updateAt,
  };

  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;
  if (isSuccess) {
    const response = h
      .response({
        status: 'success',
        message: 'Note sucessfully created',
        data: {
          note: newNote,
        },
      })
      .code(201);

    return response;
  }

  const response = h
    .response({
      status: 'fail',
      message: 'Note failed to create',
    })
    .code(500);

  return response;
};

module.exports = { getNotesHandler, addNoteHandler };
