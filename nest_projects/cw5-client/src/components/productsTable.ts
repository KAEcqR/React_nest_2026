import type { Product } from '../models/productModel';
import { delData } from '../dbOperations';

export const ProductsTable = (products: Product[]): HTMLTableElement => {
  const table = document.createElement('table');
  table.id = 'productsTable';
  table.classList.add('table', 'table-striped');
  const thead = document.createElement('thead');
  thead.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Nazwa</th>
            <th>Cena</th>
            <th>Data</th>
            <th>Akcje</th>
        </tr>
    `;
  table.appendChild(thead);
  const tbody = document.createElement('tbody');
  let lp = 1;
  products.forEach((product) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
            <td>${lp++}</td>
            <td>${product.name}</td>
            <td>${new Number(product.price).toFixed(2)}</td>
            <td>${new Date(product.date).toLocaleDateString()}</td>
            <td>
                <button class="btn btn-sm btn-primary">Edytuj</button>
                <button class="btn btn-sm btn-danger">Usuń</button>
            </td>
        `;
    
    const deleteButton = tr.querySelector('.btn-danger') as HTMLButtonElement;
    deleteButton.addEventListener('click', async () => {
      try {
        await delData('http://localhost:3000/product', product.id);
        tr.remove();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    });
    
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  return table as HTMLTableElement;
};