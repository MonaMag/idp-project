export interface Profile {
  id?: string;
  firstname?: string;
  lastname?: string;
  age?: number;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data: Profile;
  isLoading: boolean;
  error: string;
}
