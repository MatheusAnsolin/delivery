// Load data from JSON
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        renderCards('products', data.products);
        renderCards('offers', data.offers);
        renderOrders(data.orders);
        renderProfile(data.profile);
    });

function renderCards(containerId, data) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        container.appendChild(card);
    });
}

function renderOrders(orders) {
    const container = document.getElementById('orders');
    if (container) {
        container.innerHTML = '';
        orders.forEach(order => {
            const orderDiv = document.createElement('div');
            orderDiv.className = 'order';
            orderDiv.innerHTML = `
                <h3>Order #${order.id}</h3>
                <p>Date: ${order.date}</p>
                <p>Items: ${order.items.join(', ')}</p>
            `;
            container.appendChild(orderDiv);
        });
    }
}

function renderProfile(profile) {
const container = document.getElementById('profile');
if (container) {
container.innerHTML = '';
const profileDiv = document.createElement('div');
        profileDiv.className = 'profile-details';
        profileDiv.innerHTML = `
            <h2>${profile.name}</h2>
            <p>Email: ${profile.email}</p>
            <p>Address: ${profile.address}</p>
        `;
        container.appendChild(profileDiv);
    }
}

function navigateTo(page) {
    window.location.href = page;
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            if (document.getElementById('products')) {
                renderCards('products', data.products);
            }
            if (document.getElementById('offers')) {
                renderCards('offers', data.offers);
            }
            if (document.getElementById('orders')) {
                renderOrders(data.orders);
            }
            if (document.getElementById('profile')) {
                renderProfile(data.profile);
            }
        });
});



function renderCards(containerId, data) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        container.appendChild(card);
    });
}

function navigateTo(page) {
    window.location.href = page;
}

document.addEventListener('DOMContentLoaded', () => {
    renderCards('products', productsData);
    renderCards('offers', offersData);
});
