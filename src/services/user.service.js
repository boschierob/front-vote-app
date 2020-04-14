import http from '../http-common';

class UserDataService {
  getAll(){
    return http.get(`/users`);
  }

  get(id){
    return http.get(`/users/${id}`);
  }

  getByEmail(email){
    return http.get(`/users/${email}`);
  }

  create(data){
    return http.post(`/users`, data);
  }

  update(id,data){
    return http.put(`/users/${id}`, data);
  }

  pushOccasion(userId,occasionId){
    return http.put(`/users/PushOccasion/${userId}/${occasionId}`);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }

  deleteAll() {
    return http.delete(`/users`);
  }

  findByTitle(title) {
    return http.get(`/users/${title}`)
  }

  authUser(data){
    return http.post(`/users/signin`, data)
  }
}


export default new UserDataService()