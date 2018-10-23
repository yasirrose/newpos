export default function (Vue) {

	Vue.auth = {

		setToken ()  {

			localStorage.setitem('token', token )
			localStorage.setitem('expiration', expiration)
		},

		getToken ()  {

			var token = localStorage.getItem('token')
			var expiration = localStorage.getItem('expiration')

			if(!token || !expiration)
				return null
			if( Date.now() > parseInt(expiration)){
				this.destroyToken()
				return null
			}
			else
				return token
		},
		
		destroyToken () {
			localStorage.removeItem('token')
			localStorage.removeItem('expiration')
		},

		isAuthenticated () {
			if(this.getToken())
				return true
			else
				return false
		}
	}

	Object.defineProperties(Vue.prototype, {
		$auth: {
			get: () => {
				return Vue.auth
			}
		}
	})
}