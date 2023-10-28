import express from "express";

const app = express();
const PORT = 3001;

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
    content: "PUT and DELETe is also important",
    important: false,
  },
];

/**
 * RESTFUL API
 * ROUTES           HTTP    ACTION
 *
 * api/notes/:id    GET     fetches a single resource
 * api/notes        GET     fetches all resources
 * api/notes        POST    creates a new resource
 * api/notes/:id    DELETE  deletes a single resource
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

app.post("/api/notes/:id", (request, response) => {
  const note = request.body;
  notes = [...notes, note];
  response.json(note);
});

app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
