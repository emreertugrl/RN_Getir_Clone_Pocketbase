import { ImageSourcePropType } from "react-native";

export interface UserProps {
  id: string;
  collectionId: string;
  collectionName: string;
  username: string;
  verified: boolean;
  emailVisibility: boolean;
  email: string;
  created: string;
  updated: string;
  name: string;
  avatar: string;
}

export interface CategoryProps {
  id: string;
  name: string;
  image: ImageSourcePropType | undefined;
}
export interface SliderProps {
  id: string;
  image: string;
}
