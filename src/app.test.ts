import { Pokemasters } from "./app";
import { App } from "./interfaces/base.interfaces";

describe('class app test', () => {
    let app: App;
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        app = new Pokemasters();
        consoleSpy = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    it('should have a listen method waiting for a parametter type number', () => {
        const port = 3000;

        expect(app.listen).toBeDefined();
        expect(typeof app.listen).toBe('function');
        expect(typeof port).toBe('number');
    });

    it('should have a routes method where we can define our routes', () => {
        expect(app.routes).toBeDefined();
    });

    it('should have a middleware method where we can define our middlewares', () => {
        expect(app.middlewares).toBeDefined();
    });

    it('should print a mnessage when the server is up', async () => {
        const message = '⚡ Server running on port 5000';
        await app.listen(5000);
        expect(consoleSpy).toHaveBeenCalledWith(message);
    });
});
