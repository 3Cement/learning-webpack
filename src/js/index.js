import '../scss/style.scss';

const clients = ['Client 1', 'Client 2', 'Client 3', 'Client 4'];

let html = '';

clients.forEach(client => {
    html += `
        <li>${client}</li>
    `;
})
document.querySelector('#clients').innerHTML = html;