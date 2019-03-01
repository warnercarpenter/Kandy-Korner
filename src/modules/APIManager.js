const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    one: {
        value: function (database, id) {
            /*
                Since the purpose of this module is to be used by
                all of the more specialized one, then the string
                of `animals` should not be hard coded here.
            */
            return fetch(`${remoteURL}/${database}/${id}`).then(e => e.json())
        }
    },
    all: {
        value: function (database) {
            return fetch(`${remoteURL}/${database}`).then(e => e.json())
        }
    }
})