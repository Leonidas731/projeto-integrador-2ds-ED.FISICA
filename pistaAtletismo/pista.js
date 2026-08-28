// Adicionar interatividade à tabela
document.addEventListener('DOMContentLoaded', function() {
    const table = document.querySelector('.table');
    
    // Adicionar evento de clique nas linhas
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
        row.addEventListener('click', function() {
            this.classList.toggle('selected');
        });
    });
});

// Função para adicionar dados dinamicamente
function adicionarLinha(coluna1, coluna2, coluna3) {
    const tbody = document.querySelector('.table tbody');
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${coluna1}</td>
        <td>${coluna2}</td>
        <td>${coluna3}</td>
    `;
    
    tbody.appendChild(newRow);
}

// Função para filtrar tabela
function filtrarTabela(searchTerm) {
    const rows = document.querySelectorAll('.table tbody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm.toLowerCase()) ? '' : 'none';
    });
}

// Função para ordenar tabela
function ordenarTabela(columnIndex) {
    const tbody = document.querySelector('.table tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    rows.sort((a, b) => {
        const aValue = a.children[columnIndex].textContent;
        const bValue = b.children[columnIndex].textContent;
        return aValue.localeCompare(bValue);
    });
    
    rows.forEach(row => tbody.appendChild(row));
}