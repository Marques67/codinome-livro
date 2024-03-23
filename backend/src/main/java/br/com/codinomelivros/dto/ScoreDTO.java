package br.com.codinomelivros.dto;

public class ScoreDTO {

	private Long reviewId;
	private String email;
	private Double score;
	private String opinion;
	
	public ScoreDTO() {}

	public Long getReviewId() {
		return reviewId;
	}

	public void setMovieId(Long reviewId) {
		this.reviewId = reviewId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	public String getOpinion() {
		return opinion;
	}

	public void setOpinion(String opinion) {
		this.opinion = opinion;
	}
}