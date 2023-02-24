class GithubApiClient {

  constructor() {
    this.id = '';
    this.secret = '';
    this.reposCount = 5;
    this.reposSort = 'created: asc'
  }

  async getProfileByUserName(username) {
    const profileResponse = await fetch(`https://api.github.com/users/${username}?client_id=${this.id}&client_secret=${this.secret}`);
    const profile = await profileResponse.json();
    return profile;
  }

  async getReposByUserName(username) {
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.id}&client_secret=${this.secret}`);
    const repos = await reposResponse.json();
    return repos;
  }

}