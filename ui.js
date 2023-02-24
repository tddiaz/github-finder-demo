class UI {
  constructor() {
    this.profile = document.getElementById('profile');
    this.searchUser = document.getElementById('searchUser');
  }

  showProfile(profile) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${profile.avatar_url}"/>
            <a href="${profile.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${profile.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${profile.public_gists}</span>
            <span class="badge badge-success">Followers: ${profile.followers}</span>
            <span class="badge badge-info">Following: ${profile.following}</span>
            <br></br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${profile.company}</li>
              <li class="list-group-item">Website/blog: ${profile.blog}</li>
              <li class="list-group-item">Location: ${profile.location}</li>
              <li class="list-group-item">Member Since: ${profile.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos">
      </div>
    `;
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  showAlert(alertMessage, className) {
    this.clearAlert();

    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(alertMessage));

    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');

    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  showRepos(repos) {
    console.log(repos);
    let output = '';

    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers}</span>
              <span class="badge badge-success">Forks: ${repo.forks}</span>
            </div>
          </div>
        </div>
      `
    });

    const divRepo = document.getElementById('repos');
    divRepo.innerHTML = output;
  }
}