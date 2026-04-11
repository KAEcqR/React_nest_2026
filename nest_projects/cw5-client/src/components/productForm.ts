import { type Product } from '../models/productModel';
import { addData } from '../dbOperations';

export const ProductForm = (): HTMLFormElement => {
    const form = document.createElement("form");
    form.id = 'productForm';

    form.innerHTML = `
    <div class="form-group">
        <label for="name">Nazwa</label>
        <input type="text" class="form-control" id="name">
    </div>
    <div class="form-group">
        <label for="price">Cena</label>
        <input type="number" class="form-control" id="price">
    </div>
    <div class="form-group">
    <label class="form-check-label" for="date">Data</label>
        <input type="date" class="form-control" id="date">
    </div>
    <button type="submit" class="btn btn-primary mt-3">Dodaj</button>`
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        try {
            const nameInput = document.getElementById('name') as HTMLInputElement;
            const priceInput = document.getElementById('price') as HTMLInputElement;
            const dateInput = document.getElementById('date') as HTMLInputElement;
            
            const product: Product = {
                id: 0,
                name: nameInput.value,
                price: parseFloat(priceInput.value),
                date: new Date(dateInput.value)
            };
            
            await addData('http://localhost:3000/product', product);
            
            form.reset();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    });

    return form as HTMLFormElement;
}
