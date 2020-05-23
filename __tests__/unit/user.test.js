const bcrypt = require('bcryptjs')
const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate')
describe('User', ()=>{
    beforeEach(async ()=>{
        await truncate()
    })
    it('should encrypt user password', async ()=>{
        const user = await User.create({
            name: "Rayana", 
            email: "ranny@email.com",
            password: "12345"
        })
        console.log(user)
        
        const compareHash = await bcrypt.compare("12345", user.passsword_hash)
        

        expect(compareHash).toBe(true)
    })
})
