import {type Product} from './models/productModel';

export const loadData = async(url: string): Promise<Product[]> => {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json() as Promise<Product[]>;
}

export const addData = async(url: string, product: Product) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {'Content-Type': 'application/json'} 
    });
            
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}

export const delData = async(url: string, id: number) => {
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'} 
    });
            
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}