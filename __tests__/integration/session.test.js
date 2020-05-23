const request = require('supertest')
const app = require('../../src/app')
const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate')

describe("Autentication", ()=>{
    beforeEach(async ()=>{
        await truncate()
    })
    it('should authenticate with valid credencials', async ()=>{
        const user = await User.create({
            name: "Rayana",
            email: "ranny@gmail.com",
            password: "123"
        })
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: "123"
            })
        expect(response.status).toBe(200)

        expect(user.email).toBe('ranny@email.com')
    })
})