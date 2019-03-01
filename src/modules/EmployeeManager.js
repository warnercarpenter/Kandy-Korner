import APIManager from './APIManager'

export default Object.create(APIManager, {
    getAll: {
        value: function () {
            return APIManager.all("employeeArray")
        }
    }
})