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
