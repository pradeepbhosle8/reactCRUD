import http from '../http-common';

class UsersDataService {
    getAll() {
        return http.get('/users')
    }

    getSingle(id) {
        return http.get(`/user/${id}`);
    }

    create(data) {
        return http.post('/user', data)
    }

    update(id, data) {
        return http.put(`/user/${id}`, data)
    }

    delete(id) {
        return http.delete(`/user/${id}`)
    }


}

export default new UsersDataService();