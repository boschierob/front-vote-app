import http from '../http-common';

class OccasionDataService {
  getAll(){
    return http.get(`/occasions`);
  }

  get(id){
    return http.get(`/occasions/one/${id}`);
  }

   create(data){
    return http.post(`/occasions`, data);
  }

  getByInitiator(email){
    return http.get(`/occasions/${email}`);
  }

  update(id,data){
    return http.put(`/occasions/${id}`, data)
  }

  delete(id) {
    return http.delete(`/occasions/${id}`);
  }

  deleteAll() {
    return http.delete(`/occasions`);
  }

  findByTitle(title) {
    return http.get(`/occasions/${title}`)
  }

}


export default new OccasionDataService()