import http from "../http-common";

class QuestionDataService{

	getQuestionByVoteId(voteId){
		return http.get(`question/${voteId}`);
	}

	create(data){
		return http.post('question',data);
	}

	addQuestionToVote(voteId,data){
		return http.put(`votes/votePushQuestion/${voteId}`, data);
	}
}

export default new QuestionDataService()