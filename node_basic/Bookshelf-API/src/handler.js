const { nanoid } = require('nanoid');
const books = require('./books');

const addBook = (request, h) => {
  const id = nanoid(16);
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const finished = pageCount === readPage ? true : false;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  if (name == null || name == '') {
    return h
      .response({
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
      })
      .code(400);
  } else if (readPage > pageCount) {
    return h
      .response({
        status: 'fail',
        message:
          'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      })
      .code(400);
  } else {
    const newBook = {
      id,
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      finished,
      reading,
      insertedAt,
      updatedAt,
    };

    books.push(newBook);

    return h
      .response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
          bookId: newBook.id,
        },
      })
      .code(201);
  }
};

const getBook = (request, h) => {
  const { id } = request.params;
  let index = 0;

  if (id != null) {
    index = books.findIndex((books) => books.id === id);

    return index !== -1
      ? h
          .response({
            status: 'success',
            data: {
              book: books[index],
            },
          })
          .code(200)
      : h
          .response({
            status: 'fail',
            message: 'Buku tidak ditemukan',
          })
          .code(404);
  } else {
    const { name, reading, finished } = request.query;
    let bookView = [...books];

    if (name != null) {
      bookView = bookView.filter((book) =>
        book.name.toLowerCase().includes(name.toLowerCase())
      );
    } else if (reading != null) {
      bookView = bookView.filter(
        (book) => book.reading == Boolean(Number(reading))
      );
    } else if (finished != null) {
      bookView = bookView.filter(
        (book) => book.finished === Boolean(Number(finished))
      );
    } else {
      bookView = [...books];
    }

    return h
      .response({
        status: 'success',
        data: {
          books: bookView.map(({ id, name, publisher }) => ({
            id,
            name,
            publisher,
          })),
        },
      })
      .code(200);
  }
};

const updateBook = (request, h) => {
  const { id } = request.params;
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const index = books.findIndex((books) => books.id === id);

  if (name == null || name == '') {
    return h
      .response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
      })
      .code(400);
  } else if (readPage > pageCount) {
    return h
      .response({
        status: 'fail',
        message:
          'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      })
      .code(400);
  } else if (index === -1) {
    return h
      .response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan',
      })
      .code(404);
  } else {
    const updatedAt = new Date().toISOString();
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };

    return h
      .response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
      })
      .code(200);
  }
};

const deleteBook = (request, h) => {
  const { id } = request.params;

  const index = books.findIndex((books) => books.id === id);

  if (index === -1) {
    return h
      .response({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan',
      })
      .code(404);
  } else {
    books.splice(index, 1);
    return h
      .response({
        status: 'success',
        message: 'Buku berhasil dihapus',
      })
      .code(200);
  }
};
module.exports = {
  addBook,
  getBook,
  updateBook,
  deleteBook,
};
