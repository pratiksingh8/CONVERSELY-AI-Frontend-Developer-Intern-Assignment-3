# CONVERSELY-AI-Frontend-Developer-Intern-Assignment-3
I have created a web application that allows users to dynamically build and customize a simple personal content page using various draggable and configurable component.

# Dynamic Content Builder

This is a small web app where you can build your own content page by adding and arranging different types of blocks (text, images, headers, markdown, etc.).

The whole thing runs in a **single HTML file**, so there’s no setup or installation needed — just open it in a browser and start using it.

---

## What this project does

The idea is simple: instead of editing a fixed page, you can **build your own layout dynamically**.

You can:

* Add different types of content blocks
* Edit them directly on the page
* Reorder them
* Remove them
* Come back later and still find everything saved

It’s kind of like a very lightweight version of a page builder.

---

## Features

* Add blocks (Text, Image, Header, Markdown)
* Edit content in real-time
* Reorder blocks using up/down buttons
* Delete individual blocks
* Clear the whole page if needed
* Markdown preview updates instantly
* Automatically saves your work (using localStorage)

---

## How to use

1. Open the HTML file in your browser
2. Use the buttons on the left to add blocks
3. Start typing or editing content
4. Move blocks up/down to rearrange
5. Refresh the page — your work will still be there

That’s it.

---

## Tech used

* HTML + Tailwind CSS (via CDN)
* JavaScript (ES6)
* React (via CDN + Babel)
* Marked.js (for markdown)
* Browser localStorage

---

## How it works (briefly)

All the data is stored in a single array of blocks like this:

```js id="example1"
{
  id: 123,
  type: "text",
  content: "Hello"
}
```

React renders the UI based on this array.
Whenever something changes, the array updates — and it’s also saved to localStorage.

When you refresh, the app loads that saved data back in.

---

## Things I focused on

* Keeping the UI clean and simple
* Making the interactions feel smooth
* Keeping the logic easy to follow
* Making everything work without any build tools

---

## Limitations

* No drag-and-drop (used buttons instead to keep it stable in one file)
* Runs fully on the client (no backend)
* Uses CDN React (not production optimized)

---

## Possible improvements

If I had more time, I’d add:

* Drag and drop reordering
* Export/import page as JSON
* Undo/redo
* Dark/light mode toggle
* Image upload instead of URL

---

## Author

Pratik Singh

---

## Final note

This project was mainly about handling dynamic UI, managing state cleanly, and making sure everything persists properly without overcomplicating the setup.

It’s simple, but it shows how you can build something interactive and useful with just the basics.

