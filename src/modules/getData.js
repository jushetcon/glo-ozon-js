const getData = () => {
	return fetch('https://test-76718-default-rtdb.firebaseio.com/goods.json').then((response) => {
		return response.json()
	})
}

export default getData
