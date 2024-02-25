import About from "./routes/about/about.svelte";
import ContentCard from "./routes/contents/content-card/content-card.svelte";
import Contents from "./routes/contents/contents.svelte";
import Home from "./routes/home/home.svelte";
import NotFound from "./routes/not-found/not-found.svelte";

export const routes = {
    '/': Home,
    '/about': About,
    '/contents': Contents,
    '/contents/:id': ContentCard, 
    '*': NotFound
}