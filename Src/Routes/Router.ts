import { Router } from 'express'
import Assets from '../Constants/Assets.js'
import authRoutes from './AuthRoutes.js'
const router = Router()
router.get('/', (_, res) => {
	res.send('Hello from the router!')
})
router.use(Assets.routes.auth, authRoutes)
export default router
