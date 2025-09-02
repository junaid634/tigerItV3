import cors from 'cors'
import express from 'express'
import connectDB from './Src/Configs/Connection.js'
import environments from './Src/Configs/Environments.js'
import Assets from './Src/Constants/Assets.js'
import Translations from './Src/Constants/Translations.js'
import router from './Src/Routes/Router.js'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
	cors({
		origin: '*',
	})
)

app.get('/', (_, res) => {
	res.send(Translations.serverRunning('en'))
})
app.use(Assets.routes.base, router)
connectDB()
	.then(() => {
		const port = environments.PORT
		app.listen(port, () => {
			console.log(`${Translations.serverRunning('en')} ${port}`)
		})
	})
	.catch((error) => {
		console.error(`${Translations.dataConnectionFailed('en')}:`, error)
	})
app.on('error', (err) => {
	console.error(`${Translations.someError('en')}:`, err)
})
