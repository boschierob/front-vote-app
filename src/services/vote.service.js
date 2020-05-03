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
}

export default new VoteDataService()