class GitHub {
    constructor(){
        this.client_id = '5bf50eb0fa8acdd62ecb';
        this.client_secret = '3ad5ebcb46abef80ec220c9b1f1bf9867062bc84';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const reposData = await repoResponse.json();

        return {
            profile: profileData,
            repos: reposData
        }
    }
}