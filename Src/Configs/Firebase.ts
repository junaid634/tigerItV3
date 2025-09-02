import admin from 'firebase-admin'
import environments from './Environments.js'

export const firebaseAdmin = admin.initializeApp({
	credential: admin.credential.cert({
		projectId: environments.FIREBASEprojectId,
		privateKey: environments.FirebasePrivateKey,
		clientEmail: environments.FirebaseClientEmail,
	}),
	databaseURL: environments.FIREBASEdatabaseURL,
})
