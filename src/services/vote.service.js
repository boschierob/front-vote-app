import http from "../http-common";

class VoteDataService{

	getAllVotes(){
		return http.get(`votes`);

	}

	create(data){
		return http.post('votes',data);
	}

	addQuestionToVote(voteId,data){
		return http.put(`votes/votePushQuestion/${voteId}`, data);
	}
}

export default new VoteDataService()