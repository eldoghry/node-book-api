import pool from './pool.js'

export const query = (queryString, queryParam) => {
    return new Promise((resolve, reject) => {
        pool.query(queryString, queryParam).then((result) => {
            resolve(result)
        }).catch((err) => {
            reject(err)
        });
    })
}