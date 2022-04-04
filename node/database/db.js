import {Sequelize} from 'sequelize'

const db = new Sequelize('db_mern_stack', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

export default db