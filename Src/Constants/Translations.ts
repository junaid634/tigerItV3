const Translations = {
	serverRunning: (language: 'en' | 'es' | 'fr') => {
		switch (language) {
			case 'en':
				return 'Tigerit Server is running'
			case 'es':
				return 'El servidor de Tigerit está en funcionamiento'
			case 'fr':
				return 'Le serveur Tigerit fonctionne'
			default:
				return 'Tigerit Server is running'
		}
	},
	dataConnectionFailed: (language: 'en' | 'es' | 'fr') => {
		switch (language) {
			case 'en':
				return 'Data connection failed'
			case 'es':
				return 'Error de conexión de datos'
			case 'fr':
				return 'Échec de la connexion des données'
			default:
				return 'Data connection failed'
		}
	},
	internalServerError: (language: 'en' | 'es' | 'fr') => {
		switch (language) {
			case 'en':
				return 'Internal server error'
			case 'es':
				return 'Error interno del servidor'
			case 'fr':
				return 'Erreur interne du serveur'
			default:
				return 'Internal server error'
		}
	},
	someError: (language: 'en' | 'es' | 'fr') => {
		switch (language) {
			case 'en':
				return 'Some error occurred'
			case 'es':
				return 'Ocurrió un error'
			case 'fr':
				return 'Une erreur est survenue'
			default:
				return 'Some error occurred'
		}
	},
}
export default Translations
