/* eslint-disable no-undef */
import mongoose from 'mongoose'

export const mongoconnection = async () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('MongoDB Connected Successfully')
    }).catch((error) => {
        console.log(error)
    })
}