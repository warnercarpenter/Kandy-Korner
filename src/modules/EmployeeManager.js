import APIManager from './APIManager'
import fetchURL from './Settings'

export default Object.create(APIManager, {
    getAll: {
        value: function () {
            return APIManager.all("employeeArray")
        }
    },
    post: {
        value: function (newEmployee) {
            return fetch(`${fetchURL.fetchURL}/employeeArray`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(newEmployee)
              }).then(data => data.json())
        }
    }
})