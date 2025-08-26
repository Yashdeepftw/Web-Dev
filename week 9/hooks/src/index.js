import express from "express";
const app = express();
const port = 3000;
import cors from 'cors'
app.use(cors({
    origin: "http://localhost:5173"
}));

// Sample pool of todos
const todosPool = [
  { title: "Buy groceries", description: "Remember to get milk, eggs, and bread." },
  { title: "Walk the dog", description: "Take the dog for a 30-minute walk in the park." },
  { title: "Finish project report", description: "Complete the final section and proofread everything." },
  { title: "Read a new book", description: "Pick up a novel from the library and read a chapter." },
  { title: "Call a friend", description: "Catch up with an old friend over a phone call." },
  { title: "Workout session", description: "Do a 45-minute workout session at the gym." },
  { title: "Cook dinner", description: "Prepare a healthy meal for dinner tonight." },
  { title: "Clean the house", description: "Tidy up the living room and kitchen." }
];

// Helper: get random todos without repeating within one response
function getRandomTodos(count = 3) {
  const shuffled = [...todosPool].sort(() => 0.5 - Math.random()); // shuffle
  return shuffled.slice(0, count).map((todo, i) => ({
    id: Date.now() + i, // unique id
    title: todo.title,
    description: todo.description
  }));
}

app.get("/todos/new", (req, res) => {
  const count = parseInt(req.query.count) || 3; // e.g. /todos/new?count=5
  res.json(getRandomTodos(count));
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
