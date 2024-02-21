export interface simplifiedProduct {
    _id: string;
    imageUrl: string;
    name: string;
    price: number;
    slug: string;
    categoryName: string;
    
}

export interface fullProduct {
    _id: string;
    images: any;
    name: string;
    price: number;
    slug: string;
    categoryName: string;
    description: string;
    price_id: string; 
}