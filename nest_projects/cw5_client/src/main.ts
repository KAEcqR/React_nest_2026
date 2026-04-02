const API_URL = "http://localhost:3000";


async function fetchData() {
  try {
    const response = await fetch(`${API_URL}/product`);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    renderData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function renderData(data: any[]) {
  const container = document.getElementById("products");

  if (!container) return;

  container.innerHTML = data
    .map(item => `<tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>${item.date}</td>
      <td><button class="btn btn-danger" onclick="deleteProduct(${item.id})">Delete</button></td>
    </tr>`)
    .join("");
}

fetchData();

async function deleteProduct(id: number) {
  try {
    const response = await fetch(`${API_URL}/product/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    fetchData();
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}

(window as any).deleteProduct = deleteProduct;