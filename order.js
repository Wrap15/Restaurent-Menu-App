const orderTableBody = document.getElementById('order-table-body');
let orders = JSON.parse(localStorage.getItem('order')) || [];

if (!Array.isArray(orders)) {
    orders = [];
}

for (let i = 0; i < orders.length; i++) {
    const orderItems = orders[i];
    const orderRows = orderItems.map(orderItem => {
        return `
            <div class="order-details">
                <div class="order-details-item">
                    <span>${orderItem.title}</span>
                    <span>x${orderItem.quantity}</span>
                </div>
            </div>`;
    }).join('');

    const total = orderItems.reduce((acc, orderItem) => 
        acc + Number(orderItem.price.replace(/[^0-9.]/g, '')) * orderItem.quantity, 0);

    orderTableBody.innerHTML += `
        <tr>
            <td>
                <div class="order-header">
                    <span class="order-number">Order #${i + 1}</span>
                </div>
            </td>
            <td>${orderRows}</td>
            <td>
                <div class="order-total">Total: ₹${total}</div>
            </td>
            <td>
                <span class="order-status status-delivered">
                    Delivered
                </span>
            </td>
        </tr>
    `;
}

// Optional: log query parameters
const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');
console.log(email);
