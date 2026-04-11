import 'bootstrap/dist/css/bootstrap.min.css';
import { SectionResult } from './components/sectionResult';
import { loadData } from './dbOperations';
import { ButtonLoad } from './components/buttonLoad';
import { ProductsTable } from './components/productsTable';
import { ProductForm } from './components/productForm';

const app = document.querySelector<HTMLDivElement>('#app');
const buttonLoad = ButtonLoad();

const sectionResult = SectionResult();
const productForm = ProductForm();

buttonLoad.addEventListener('click', async () => {
  console.log('Ładowanie danych...');
    sectionResult.textContent = 'Ładowanie danych...';  
  try {
    const products = await loadData('http://localhost:3000/product');
    console.log('Dane załadowane:', products);
    const table = ProductsTable(products);
    sectionResult.textContent = '';
    sectionResult.appendChild(table);
  } catch (error) {
    console.error('Błąd podczas ładowania danych:', error);
    sectionResult.textContent = 'Błąd podczas ładowania danych.';
  }
});

if(app) {
  app.classList.add('container');
  app.innerHTML = `
    <h1>Hello Vite + TypeScript!</h1>`;
  app.appendChild(buttonLoad);
  app.appendChild(sectionResult);
  app.appendChild(productForm);
}