const pool = require('./pool')

exports.query = (queryString, queryParam) => {
    return new Promise((resolve, reject) => {
        pool.query(queryString, queryParam).then((result) => {
            resolve(result)
        }).catch((err) => {
            reject(err)
        });
    })
}