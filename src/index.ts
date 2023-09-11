import { Pokemasters } from "./app";

async function main() {
    const app = new Pokemasters();
    const port = process.env.PORT || 8000
    await app.listen(port);
}


main();