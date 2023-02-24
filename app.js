const githubApiClent = new GithubApiClient();
const ui = new UI();

// event listeners
ui.searchUser.addEventListener('input', e => {
  const searchValue = e.target.value;

  if (searchValue !== '') {
    searchUser(searchValue);
  }

});

function searchUser(username) {
  githubApiClent.getProfileByUserName(username)
  .then(profileResponse => {
    if (profileResponse.message !== 'Not Found') {
      ui.showProfile(profileResponse);

      githubApiClent.getReposByUserName(username)
      .then(data => {
        ui.showRepos(data);
      });

    } else {
      ui.showAlert('User not found', 'alert alert');
    }


  }).catch(ui.clearProfile());
}

