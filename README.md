# Diabetes Recipe Book Based on Next 🍜

## Getting Started [locally]
First, fork and clone this repository. Then, run `bash npm install` or `npm install` to install all dependencies, when it will finish, run `bash npm run dev` to start the development server locally.
Finally, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure
```bash
├── app
│ └── \layout.js
│ └── \middleware.js
│ └── \page.js
│ └── \page.module.css
│ └── \globals.css
├── constants
│ └── \constants.js
├── firebase
│ └── \config.js
│ └── \context.js
│ └── \firebase.js
│ └── \index.js
├── hooks
│ └── \useAuth.js
│ └── \useRecipes.js
│ └── \useValidation.js
├── layout
│ └── \404.js
│ └── \Header.js
│ └── \NavBar.js
│ └── \RecipeDetails.js
├── pages
│ └── recipes
│   ├── \[id].js
│ └── edit-recipes
│   ├── \[id].js
│ ├── \_app.js
│ └── \_document.jsx
│ └── \create-account.js
│ └── \index.js
│ └── \login.js
│ └── \new-recipe.js
│ └── \popular.js
│ └── \search.js
├── public
│ └── static
│   └── image
├── ui
│ └── components
│   └── \Button.js
│   └── \Form.js
│   └── \SearchBox.js
│   └── \Spinner.js
│   └── \VoteButton.js
│   └── \VoteSpan.js
├── validation
│ └── \validateCreateAccount.js
│ └── \validateLogin.js
│ └── \validateRecipe.js
```