class GithubApiClient {

  constructor() {
    this.id = 'dbd84b0cf558f9ddd2ba';
    this.secret = '9cd982b2ee77e6f3f2ee123986c38e93b5d1c1cc';
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