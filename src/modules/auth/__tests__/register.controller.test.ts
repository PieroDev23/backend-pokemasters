import supertest from 'supertest'
import { Pokemasters } from '@base/app'
import { App } from '@base/interfaces/base.interfaces'


describe('POST /register', () => {
    let pokemasters: App;
    let response: any;

    beforeAll(async () => {
        pokemasters = new Pokemasters();
        response = await supertest(pokemasters.app).post('/auth/register').send();
    });

    test('should respond with a 200 status code when payload is valid', async () => {
        expect(response.statusCode).toBe(200);
    });

    test('should have a content-type: application/json on header', async () => {
        expect(response.headers['content-type'])
            .toEqual(expect.stringContaining('application/json'));
    })

    test('should responde with a josn object with some user information explicit id', async () => {
        expect(response.body.id).toBeDefined();
    });

    test('should respond a 400 error when payload its empty or invalid', async () => {

        const response = await supertest(pokemasters.app).post('/auth/register').send({
            first_name: '',
            last_name: '',
            username: '',
            nickname: '',
            password: '',
            email: ''
        });

        expect(response.statusCode).toBe(400);
    })
})