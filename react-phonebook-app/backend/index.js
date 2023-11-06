import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(requestLogger);

let contacts = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-23435",
  },
];

function unknownEndpoint(request, response) {
  response.status(404).send({ error: "unknown endpoint" });
}

function requestLogger(request, response, next) {
  console.log(`Method: ${request.method}`);
  console.log(`Path: ${request.path}`);
  console.log(`Body:`, request.body);
  next();
}

function generateId() {
  const maxId =
    contacts.length > 0 ? Math.max(...contacts.map((p) => p.id)) : 0;
  return maxId + 1;
}

/**
 * RESTFUL API
 * ROUTES           HTTP    ACTION                                    STATUS
 *
 * api/contacts/:id    GET     fetches a single resource               200 OK
 * api/contacts        GET     fetches all resources                   200 Ok
 * api/contacts        POST    creates a new resource                  201 Created
 * api/contacts/:id    DELETE  deletes a single resource               204 No Content
 * api/contacts/:id    PUT     updates/replaces a single resource
 * api/contacts/:id    PATCH   updates/replaces a part of the specified resource
 */

app.get("/", (request, response) => {
  response.send("<h1>Hello, Express!</h1>");
});

app.get("/api/contacts/:id", (request, response) => {
  const id = Number(request.params.id);
  const contact = contacts.find((contact) => contact.id === id);
  response.json(contact);
});

app.get("/api/contacts", (request, response) => {
  response.json(contacts);
});

app.post("/api/contacts", (request, response) => {
  const body = request.body;

  if (!body.name) {
    return response.status(400).json({
      error: "name missing",
    });
  }

  const contact = {
    name: body.name,
    number: body.number || false,
    id: generateId(),
  };

  contacts = contacts.concat(contact);

  response.status(201).json(contact);
});

app.delete("/api/contacts/:id", (request, response) => {
  const id = Number(request.params.id);
  contacts = contacts.filter((contact) => contact.id !== id);

  response.status(204).end();
});

app.use(unknownEndpoint);

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
