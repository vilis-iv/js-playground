const { nanoid } = require('nanoid');
const notes = require('./notes');

const getNotesHandler = (request, h) => {
  const { title } = request.params;

  if (notes.length == 0) {
    return h
      .response({
        status: 'success',
        data: 'data is empty',
      })
      .code(200);
  }

  let noteView = notes;
  if (title != null) {
    noteView = notes.filter((note) => note.title === title);
  }

  if (noteView.length == 0) {
    return h
      .response({
        status: 'fail',
        data: 'cannot find data',
      })
      .code(404);
  } else {
    return h
      .response({
        status: 'success',
        data: noteView,
      })
      .code(200);
  }
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
