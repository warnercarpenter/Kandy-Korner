import APIManager from './APIManager'

export default Object.create(APIManager, {
    removeAndList: {
        value: function (id) {
            return fetch(`http://localhost:5002/candyArray/${id}`, {
                method: "DELETE"
            })
                .then(() => fetch("http://localhost:5002/candyArray")
                    .then(r => r.json()))
        }
    },
    getAll: {
        value: function () {
            return APIManager.all("candyArray")
        }
    }
})