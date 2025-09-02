import type { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import environments from '../Configs/Environments.js'

export const returnError = (_: Request, res: Response, error: any) => {
	console.error(error)

	if (environments.ENV == 'prod') {
		// DiscordUtils.captureError(req, res, error)
	}

	if (res.headersSent) {
		return
	}

	if (error instanceof Error) {
		return res.json({ success: false, code: error, message: error.message })
	}

	if (error instanceof mongoose.MongooseError) {
		return res.json({ success: false, message: error.message })
	}

	if (error instanceof jwt.TokenExpiredError) {
		return res
			.status(401)
			.json({ success: false, message: 'Token has expired.' })
	}

	return
}
