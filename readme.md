# Calculator Web App

A simple, responsive, browser-based calculator built using **HTML, CSS, and JavaScript**. The project supports basic arithmetic operations and calculator-style percentage handling, with a clean UI and keyboard-like button interactions.

---

## Features

- Basic arithmetic: `+`, `-`, `×`, `÷`
- Clear (`C`) and equals (`=`) functionality
- Calculator-style percentage logic (`%` handled contextually)
- Real-time input display
- Error handling for invalid expressions
- Lightweight and fast – no external libraries

---

## Project Structure

```
CALCULATOR/
│
├── index.html     # Main HTML structure
├── style.css      # Core styling
├── utils.css      # Utility/helper styles
└── script.js      # Calculator logic
```

---

## How It Works

- Button clicks are captured using JavaScript event listeners.
- Input is built as a string and displayed in the input field.
- When `=` is pressed:
  - The expression is preprocessed (especially `%`).
  - The final expression is evaluated.
  - Errors return a user-friendly message.

### Percentage Logic
The calculator interprets `%` contextually, similar to real calculators. For example:

- `50 + 10%` → adds 10% of 50
- `200 - 25%` → subtracts 25% of 200
- `100 × 10%` → 10

This is handled through a custom percentage parser before evaluation.

---

## Getting Started

### 1. Clone or Download

```
git clone <your-repo-url>
```

Or simply download the folder.

### 2. Run Locally

Open `index.html` in any modern browser:

- Double-click the file, or
- Right-click → Open with Browser

No server setup required.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## Future Improvements

- Keyboard input support
- History panel
- Scientific functions (sin, cos, log, etc.)
- Theme toggle (dark/light mode)

---

## Author

**Anirudha Kumar Sahu**  
Calculator Project – Web Development Practice

---

## License

This project is free to use for learning and personal development.

