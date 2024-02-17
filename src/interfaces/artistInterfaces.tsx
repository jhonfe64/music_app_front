export interface SignUpArtistInterface {
  name: string;
  lastname: string;
  artisticName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface LoginArtistInterface {
  email: string;
  password: string;
}

export interface ArtistInterface {
  artisticName: string;
  created_at: string;
  email: string;
  image: string;
  lastname: string;
  name: string;
  role: string;
  _id: string;
}

export interface UpdateArtistInterface {
  artisticName: string;
  name: string;
  lastname: string;
  email: string;
}

export interface UpdatePasswordInterface {
  password: string;
  confirmPassword?: string;
}

export interface NewAlbumInterface {
  artist: string;
  title: string;
  description: string;
  year: string;
  gendre: string;
}
