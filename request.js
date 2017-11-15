const axios = require('axios');

module.exports = {

    requestUNE : (url) => {
        return new Promise((resolve,reject) => {
            axios.get(url)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        })
    }
}