import http from "../http-common";

class VoteDataService{

	getVotesByOccasion(occasionId){
		return http.get(`votes/${occasionId}`);
	}

	create(data){
		return http.post('votes',data);
	}

	addQuestionToVote(voteId,data){
		return http.put(`votes/votePushQuestion/${voteId}`, data);
	}

	addQuestionOptionsToVote(id,data){
		return http.put(`votes/addQuestionOptions/${id}`,data);
	}
}

export default new VoteDataService()