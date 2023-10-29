import express from "express";

const app = express();
const PORT = 3001;

app.use(express.json());

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
  {
    id: 4,
    content: "PUT and DELETE is also important",
    important: false,
  },
];

/**
 * RESTFUL API
 * ROUTES           HTTP    ACTION                                    STATUS
 *
 * api/notes/:id    GET     fetches a single resource               200 OK
 * api/notes        GET     fetches all resources                   200 Ok
 * api/notes        POST    creates a new resource                  201 Created
 * api/notes/:id    DELETE  deletes a single resource               204 No Content
 * api/notes/:id    PUT     updates/replaces a single resource
 * api/notes/:id    PATCH   updates/replaces a part of the specified resource
 */

app.get("/", (request, response) => {
  response.send("<h1>Hello, Express!</h1>");
});

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id);
  response.json(note);
});

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

app.post("/api/notes", (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;

  const note = body;
  note.id = maxId + 1;

  notes = notes.concat(note);

  response.status(201).json(note);
});

app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
