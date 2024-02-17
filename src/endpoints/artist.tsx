const artist = {
  SIGN_UP_ARTIST: `${process.env.NEXT_PUBLIC_API_URL}/artist/sign-up`,
  LOGIN_ARTIST: `${process.env.NEXT_PUBLIC_API_URL}/artist/login`,
  SINGLE_ARTIST: `${process.env.NEXT_PUBLIC_API_URL}/artist/single/`,
  UPDATE_ARTIST: `${process.env.NEXT_PUBLIC_API_URL}/artist/update`,
  UPDATE_PASSWORD: `${process.env.NEXT_PUBLIC_API_URL}/artist/password`,
};

const album = {
  MUSIC_GENDRES: `${process.env.NEXT_PUBLIC_API_URL}/album/music-gendres`,
  CREATE_ABUM: `${process.env.NEXT_PUBLIC_API_URL}/album/upload`
};

export { artist, album };
