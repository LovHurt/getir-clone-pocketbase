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
    collectionId?: string;
    collectionName?: string;
    created?: string;
    updated?: string;
    name: string;
    image: any;
  }

  export interface SubCategoryProps {
    id: string;
    collectionId?: string;
    collectionName?: string;
    created?: string;
    updated?: string;
    name: string;
    category?: string;
  }
  
  export interface SliderProps {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    image: string;
  }

  export interface ProductProps {
    id: string;
    name: string;
    price: number;
    sellingPrice: number;
    type: string;
    images?: string[];
    subcategoryId: string;
  }