import { defineConfig } from "vite";

export default defineConfig({
  base: "/weather-app",
});

//  run the following on gitbash

// npm run build

// git add dist -f

// git commit -m "deploy dist"

// git subtree push --prefix dist origin gh-pages

// go to github repo settings and check branch make sure gh-pages on root
