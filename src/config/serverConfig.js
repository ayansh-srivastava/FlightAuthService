const dotenv=require(`dotenv`)
dotenv.config()

module.exports={
    PORT:process.env.PORT,
    pvtkey:process.env.PrivateKey
}