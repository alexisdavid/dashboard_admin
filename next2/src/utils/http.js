/**
 *  @version 1.0.0
 *  @author Alexis
 *  @description Cliente HTTP para todas las peticiones Web basada en superagent: GET, POST, DELETE, PUT, PATCH
 *  @param {String} url: "/EndPoint"
 *  @param {Object} data: Payload
*/

import request from "superagent";
var base64 = require('base-64');
// Web API URL

const baseUrl = "http://127.0.0.1:8000/api/";
let storage = JSON.parse(sessionStorage.getItem('token'))
let decoded={token:''}
if (storage) {
    
decoded= JSON.parse(base64.decode(storage))
}
class Request {

    get(url, data) {
        const result = request
            .get(baseUrl + url)
            .set('Content-Type','application/json')
            .set('X-Requested-With','X-Requested-With')
            .set("Authorization", `Bearer ${decoded.token}`)
            .set("Accept", "application/json")
            .query(data)
            .then(response => {
                return { result: response.body, statusCode: response.status };
            })
            .catch(error => {
                const { status } = error;
                if (status >= 400) {
                    return { message: error.message, statusCode: status };
                }
                return { message: error.message, statusCode: 503 };
            });
        return result;
    }

    post(url, data) {
        const result = request
            .post(baseUrl + url)
            .set('Content-Type','application/json')
            .set('X-Requested-With','X-Requested-With')
            .set("Authorization", `Bearer ${decoded.token}`)
            .set("Accept", "application/json")
            .send(data)
            .then(response => {
   
                return { result: response.body, statusCode: response.status };
            })
            .catch(error => {
                return { message: error.message, statusCode: 503 };
            });
        return result;
    }

    delete(url, data) {
        const result = request
            .delete(baseUrl + url)
            .set('Content-Type','application/json')
            .set('X-Requested-With','X-Requested-With')
            .set("Authorization", `Bearer ${decoded.token}`)
            .set("Accept", "application/json")
            .send(data)
            .then(response => {
                return { result: response.body, statusCode: response.status };
            })
            .catch(error => {
                return { message: error.message, statusCode: 503 };
            });
        return result;
    }

    put(url, data) {
        const result = request
            .put(baseUrl + url)
            .set('Content-Type','application/json')
            .set('X-Requested-With','X-Requested-With')
            .set("Authorization", `Bearer ${decoded.token}`)
            .set("Accept", "application/json")
            .send(data)
            .then(response => {
                return { result: response.body, statusCode: response.status };
            })
            .catch(error => {
                return { message: error.message, statusCode: 503 };
            });
        return result;
    }

    patch(url, data) {
        const result = request
            .patch(baseUrl + url)
            .set('Content-Type','application/json')
            .set('X-Requested-With','X-Requested-With')
            .set("Authorization", `Bearer ${decoded.token}`)
            .set("Accept", "application/json")
            .send(data)
            .then(response => {
                return { result: response.body, statusCode: response.status };
            })
            .catch(error => {
                return { message: error.message, statusCode: 503 };
            });
        return result;
    }

}

export default Request;
