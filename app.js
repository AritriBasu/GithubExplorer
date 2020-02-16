const github = new GitHub();


const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
	const userText = e.target.value;

	if(userText !== ''){
		//make http call

		github.getUser(userText)
		.then(data => {
			if(data.profile.message === 'Not Found'){
				//show alert
				document.getElementById('profile').innerHTML = `Name: Not Found`;
            } 
            else {
				document.getElementById('profile').innerHTML = `
				<div class="panel panel-default">
				  <div class="panel-heading">
				    <h3 class="panel-title">Name: ${data.profile.login}</h3>
				  </div>
				  <div class="panel-body">
				    Repository: ${data.profile.public_repos} <br>
                    Followers: ${data.profile.followers} <br>
                    Following: ${data.profile.following} <br>
				    Bio: ${data.profile.bio}
				  </div>
				</div>`;
			}
		})
	} else {
		//Clear profile.

		document.getElementById('profile').innerHTML = '';
	}
});