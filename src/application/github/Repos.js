export class Repo {
  static format(data, isVisible) {
    return {
      name: this.getNameFromUrl(data.url),
      createdAt: data.createdAt,
      id: data.id,
      description: data.description,
      isArchived: data.archived,
      url: data.url,
      stars: data.stargazers_count,
      topics: [],
      isOwner: true,
      isVisible: isVisible,
    };
  }

  static getNameFromUrl(url) {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 1];
  }
}