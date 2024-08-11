export const loadPosts = async () => {
  const postsResponses = fetch("https://jsonplaceholder.typicode.com/posts");
  const photoResponse = fetch("https://jsonplaceholder.typicode.com/photos");

  const [postsList, photosList] = await Promise.all([
    postsResponses,
    photoResponse,
  ]);

  const postsToJson = await postsList.json();
  const photosToJson = await photosList.json();

  const postsAndPhotos = postsToJson.map((post, index) => {
    return { ...post, photo: photosToJson[index].url };
  });

  return postsAndPhotos;
};
