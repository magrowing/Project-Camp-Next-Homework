export const getDataList = async (url: string) => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${url}?language=en-US&page=1`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWRhNTczZDk3NTc2ZDUxNGM3NTYyZjNjMjI3NzgxYiIsInN1YiI6IjY1N2MxMjQwZTkzZTk1MjE4ZjZkMjM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HkyRzjy-li0pLAqbjEVApq9hBDG6TlLdtJ56YuttHeU',
    },
  };
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return await (await fetch(BASE_URL, options)).json();
};
