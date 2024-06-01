// import { User } from 'firebase/auth';

// export type IUser = User;


export type  UserNew = {
    photoURL: string,
    email: string,
    metadata:{
      creationTime: string
    }
  }