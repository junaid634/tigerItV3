import mongoose from 'mongoose'
import environments from './Environments.js'

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(environments.mongo_URL)
		console.log(`Server is connected to ${connection.connection.host}`)
	} catch (error) {
		console.error('Not Connected')
	}
}
export default connectDB
