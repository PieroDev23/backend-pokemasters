import { Pool } from "mysql2/promise";
import { Database } from "./__database.db";

describe('Database test singleton class', () => {

    it('should return the same instance every time', () => {
        const instance1 = Database.getInstance();
        const instance2 = Database.getInstance();

        expect(instance1).toBe(instance2);
    });

    it('should have a getter method that returns the pool connection', () => {
        const db = Database.getInstance();
        const pool = db.pool();

        expect(db.pool).toBeDefined();

        //List of methods from a Pool instance
        const poolMethods = ['query', 'getConnection', 'end'];

        for (const method of poolMethods) {
            expect(typeof pool[method as keyof Pool]).toBe('function');
        }
    });
})
