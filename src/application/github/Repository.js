import Client from "../../infrastructure/Client";
import { Repo } from "./Repos";

class GithubService {
  static async retrieve(username) {
    if (!username) return;

    const userResponse = await this.retrieveUser(username);
    const reposResponse = await this.retrieveRepos(username);

    const { bio, avatar_url, blog, location, name } = userResponse;
    
    const repos = reposResponse.map((repo, index) => {
      const isVisible = index > 5 ? false : true;
      return Repo.format(repo, isVisible);
    });

    return {
      bio,
      avatarUrl: avatar_url,
      url: blog,
      location,
      name,
      repositories: repos,
    };
  }

  static async retrieveRepos(username) {
    return Client.get(`https://api.github.com/users/${username}/repos`);
  }

  static async retrieveUser(username) {
    return Client.get(`https://api.github.com/users/${username}`);
  }
}

const EMPTY_PROFILE = {
  ownerId: "",
  name: "",
  url: "",
  username: "",
  position: "",
  bio: "",
  avatarUrl: "",
  email: "",
  location: "",
  phone: "",
  programmingLanguages: [],
  languages: [],
  topics: [],
  repositories: [],
  experience: [],
  education: [],
};

class CurriculumRepository {
  async retrieve(username) {
    const profile = await GithubService.retrieve(username);

    return { ...EMPTY_PROFILE, ...profile };
  }
}

const repository = new CurriculumRepository();

export default repository;
