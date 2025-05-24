let currentFilter = '';
let activeSection = '';

// Inizializzazione
document.addEventListener('DOMContentLoaded', function () {
    generateAlphabetNav();
    displayAllCommands();
    setupSearch();
});

function generateAlphabetNav() {
    const nav = document.getElementById('alphabetNav');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let letter of alphabet) {
        const button = document.createElement('button');
        button.textContent = letter.toUpperCase();
        button.onclick = () => filterByLetter(letter);
        nav.appendChild(button);
    }

    // Pulsante per mostrare tutto
    const allButton = document.createElement('button');
    allButton.textContent = 'TUTTI';
    allButton.style.width = 'auto';
    allButton.style.padding = '0 15px';
    allButton.onclick = () => displayAllCommands();
    nav.appendChild(allButton);
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function (e) {
        const query = e.target.value.toLowerCase();
        currentFilter = query;
        if (query === '') {
            displayAllCommands();
        } else {
            searchCommands(query);
        }
    });
}

function searchCommands(query) {
    const container = document.getElementById('commandsContainer');
    const nameMatches = [];
    const descMatches = [];
    const optionMatches = [];

    for (let letter in linuxCommands) {
        linuxCommands[letter].forEach(cmd => {
            if (cmd.name.toLowerCase().includes(query)) {
                nameMatches.push(cmd);
            } else if (cmd.description.toLowerCase().includes(query)) {
                descMatches.push(cmd);
            } else if (cmd.options.some(opt => opt.toLowerCase().includes(query))) {
                optionMatches.push(cmd);
            }
        });
    }

    const results = [...nameMatches, ...descMatches, ...optionMatches];

    if (results.length === 0) {
        container.innerHTML = '<div class="no-results">Nessun comando trovato per: "' + query + '"</div>';
        return;
    }

    // Ordina i risultati alfabeticamente
    //results.sort((a, b) => a.name.localeCompare(b.name));

    let html = '<div class="section-title">Risultati della ricerca (' + results.length + ')</div>';
    html += '<div class="commands-grid">';

    results.forEach(cmd => {
        html += createCommandCard(cmd, query);
    });

    html += '</div>';
    container.innerHTML = html;

    // Aggiorna navigazione alfabetica
    updateAlphabetNav('');
}

function filterByLetter(letter) {
    if (!linuxCommands[letter]) {
        document.getElementById('commandsContainer').innerHTML =
            '<div class="no-results">Nessun comando disponibile per la lettera: ' + letter.toUpperCase() + '</div>';
        return;
    }

    const container = document.getElementById('commandsContainer');
    let html = '<div class="section-title">Comandi che iniziano con: ' + letter.toUpperCase() + '</div>';
    html += '<div class="commands-grid">';

    linuxCommands[letter].forEach(cmd => {
        html += createCommandCard(cmd);
    });

    html += '</div>';
    container.innerHTML = html;

    updateAlphabetNav(letter);
    activeSection = letter;
    currentFilter = '';
    document.getElementById('searchInput').value = '';
}

function displayAllCommands() {
    const container = document.getElementById('commandsContainer');
    let html = '';

    for (let letter in linuxCommands) {
        html += '<div class="section-title">Lettera: ' + letter.toUpperCase() + '</div>';
        html += '<div class="commands-grid">';

        linuxCommands[letter].forEach(cmd => {
            html += createCommandCard(cmd);
        });

        html += '</div>';
    }

    container.innerHTML = html;
    updateAlphabetNav('');
    activeSection = '';
    currentFilter = '';
    document.getElementById('searchInput').value = '';
}

function createCommandCard(cmd, highlightQuery = '') {
    let name = cmd.name;
    let description = cmd.description;

    // Evidenzia i termini di ricerca
    if (highlightQuery) {
        const regex = new RegExp(`(${highlightQuery})`, 'gi');
        name = name.replace(regex, '<mark style="background: #feca57; color: #000;">$1</mark>');
        description = description.replace(regex, '<mark style="background: #feca57; color: #000;">$1</mark>');
    }

    let optionsHtml = '';
    cmd.options.forEach(option => {
        let optionText = option;
        if (highlightQuery) {
            const regex = new RegExp(`(${highlightQuery})`, 'gi');
            optionText = optionText.replace(regex, '<mark style="background: #feca57; color: #000;">$1</mark>');
        }

        const parts = optionText.split(' : ');
        optionsHtml += `
                    <div class="option">
                        <span class="option-flag">${parts[0]}</span>: ${parts[1] || ''}
                    </div>
                `;
    });

    return `
                <div class="command-card">
                    <div class="command-name">${name}</div>
                    <div class="command-description">${description}</div>
                    <div class="command-options">
                        ${optionsHtml}
                    </div>
                </div>
            `;
}

function updateAlphabetNav(activeLetter) {
    const buttons = document.querySelectorAll('.alphabet-nav button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent.toLowerCase() === activeLetter ||
            (activeLetter === '' && button.textContent === 'TUTTI')) {
            button.classList.add('active');
        }
    });
}

// Smooth scrolling per la navigazione
function scrollToSection(letter) {
    const section = document.querySelector(`[data-section="${letter}"]`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}