const elementsData = [
  { n: 1, s: "H", name: "Hydrogen", m: "1.008", c: "nonmetal" },
  { n: 2, s: "He", name: "Helium", m: "4.0026", c: "noble-gas" },
  { n: 3, s: "Li", name: "Lithium", m: "6.94", c: "alkali" },
  { n: 4, s: "Be", name: "Beryllium", m: "9.0122", c: "alkaline-earth" },
  { n: 5, s: "B", name: "Boron", m: "10.81", c: "metalloid" },
  { n: 6, s: "C", name: "Carbon", m: "12.011", c: "nonmetal" },
  { n: 7, s: "N", name: "Nitrogen", m: "14.007", c: "nonmetal" },
  { n: 8, s: "O", name: "Oxygen", m: "15.999", c: "nonmetal" },
  { n: 9, s: "F", name: "Fluorine", m: "18.998", c: "halogen" },
  { n: 10, s: "Ne", name: "Neon", m: "20.180", c: "noble-gas" },
  { n: 11, s: "Na", name: "Sodium", m: "22.990", c: "alkali" },
  { n: 12, s: "Mg", name: "Magnesium", m: "24.305", c: "alkaline-earth" },
  { n: 13, s: "Al", name: "Aluminum", m: "26.982", c: "post-transition" },
  { n: 14, s: "Si", name: "Silicon", m: "28.085", c: "metalloid" },
  { n: 15, s: "P", name: "Phosphorus", m: "30.974", c: "nonmetal" },
  { n: 16, s: "S", name: "Sulfur", m: "32.06", c: "nonmetal" },
  { n: 17, s: "Cl", name: "Chlorine", m: "35.45", c: "halogen" },
  { n: 18, s: "Ar", name: "Argon", m: "39.95", c: "noble-gas" },
  { n: 19, s: "K", name: "Potassium", m: "39.098", c: "alkali" },
  { n: 20, s: "Ca", name: "Calcium", m: "40.078", c: "alkaline-earth" },
  { n: 21, s: "Sc", name: "Scandium", m: "44.956", c: "transition" },
  { n: 22, s: "Ti", name: "Titanium", m: "47.867", c: "transition" },
  { n: 23, s: "V", name: "Vanadium", m: "50.942", c: "transition" },
  { n: 24, s: "Cr", name: "Chromium", m: "51.996", c: "transition" },
  { n: 25, s: "Mn", name: "Manganese", m: "54.938", c: "transition" },
  { n: 26, s: "Fe", name: "Iron", m: "55.845", c: "transition" },
  { n: 27, s: "Co", name: "Cobalt", m: "58.933", c: "transition" },
  { n: 28, s: "Ni", name: "Nickel", m: "58.693", c: "transition" },
  { n: 29, s: "Cu", name: "Copper", m: "63.546", c: "transition" },
  { n: 30, s: "Zn", name: "Zinc", m: "65.38", c: "transition" },
  { n: 31, s: "Ga", name: "Gallium", m: "69.723", c: "post-transition" },
  { n: 32, s: "Ge", name: "Germanium", m: "72.630", c: "metalloid" },
  { n: 33, s: "As", name: "Arsenic", m: "74.922", c: "metalloid" },
  { n: 34, s: "Se", name: "Selenium", m: "78.971", c: "nonmetal" },
  { n: 35, s: "Br", name: "Bromine", m: "79.904", c: "halogen" },
  { n: 36, s: "Kr", name: "Krypton", m: "83.798", c: "noble-gas" },
  { n: 37, s: "Rb", name: "Rubidium", m: "85.468", c: "alkali" },
  { n: 38, s: "Sr", name: "Strontium", m: "87.62", c: "alkaline-earth" },
  { n: 39, s: "Y", name: "Yttrium", m: "88.906", c: "transition" },
  { n: 40, s: "Zr", name: "Zirconium", m: "91.224", c: "transition" },
  { n: 41, s: "Nb", name: "Niobium", m: "92.906", c: "transition" },
  { n: 42, s: "Mo", name: "Molybdenum", m: "95.95", c: "transition" },
  { n: 43, s: "Tc", name: "Technetium", m: "98", c: "transition" },
  { n: 44, s: "Ru", name: "Ruthenium", m: "101.07", c: "transition" },
  { n: 45, s: "Rh", name: "Rhodium", m: "102.91", c: "transition" },
  { n: 46, s: "Pd", name: "Palladium", m: "106.42", c: "transition" },
  { n: 47, s: "Ag", name: "Silver", m: "107.87", c: "transition" },
  { n: 48, s: "Cd", name: "Cadmium", m: "112.41", c: "transition" },
  { n: 49, s: "In", name: "Indium", m: "114.82", c: "post-transition" },
  { n: 50, s: "Sn", name: "Tin", m: "118.71", c: "post-transition" },
  { n: 51, s: "Sb", name: "Antimony", m: "121.76", c: "metalloid" },
  { n: 52, s: "Te", name: "Tellurium", m: "127.60", c: "metalloid" },
  { n: 53, s: "I", name: "Iodine", m: "126.90", c: "halogen" },
  { n: 54, s: "Xe", name: "Xenon", m: "131.29", c: "noble-gas" },
  { n: 55, s: "Cs", name: "Cesium", m: "132.91", c: "alkali" },
  { n: 56, s: "Ba", name: "Barium", m: "137.33", c: "alkaline-earth" },
  { n: 57, s: "La", name: "Lanthanum", m: "138.91", c: "lanthanide" },
  { n: 58, s: "Ce", name: "Cerium", m: "140.12", c: "lanthanide" },
  { n: 59, s: "Pr", name: "Praseodymium", m: "140.91", c: "lanthanide" },
  { n: 60, s: "Nd", name: "Neodymium", m: "144.24", c: "lanthanide" },
  { n: 61, s: "Pm", name: "Promethium", m: "145", c: "lanthanide" },
  { n: 62, s: "Sm", name: "Samarium", m: "150.36", c: "lanthanide" },
  { n: 63, s: "Eu", name: "Europium", m: "151.96", c: "lanthanide" },
  { n: 64, s: "Gd", name: "Gadolinium", m: "157.25", c: "lanthanide" },
  { n: 65, s: "Tb", name: "Terbium", m: "158.93", c: "lanthanide" },
  { n: 66, s: "Dy", name: "Dysprosium", m: "162.50", c: "lanthanide" },
  { n: 67, s: "Ho", name: "Holmium", m: "164.93", c: "lanthanide" },
  { n: 68, s: "Er", name: "Erbium", m: "167.26", c: "lanthanide" },
  { n: 69, s: "Tm", name: "Thulium", m: "168.93", c: "lanthanide" },
  { n: 70, s: "Yb", name: "Ytterbium", m: "173.05", c: "lanthanide" },
  { n: 71, s: "Lu", name: "Lutetium", m: "174.97", c: "lanthanide" },
  { n: 72, s: "Hf", name: "Hafnium", m: "178.49", c: "transition" },
  { n: 73, s: "Ta", name: "Tantalum", m: "180.95", c: "transition" },
  { n: 74, s: "W", name: "Tungsten", m: "183.84", c: "transition" },
  { n: 75, s: "Re", name: "Rhenium", m: "186.21", c: "transition" },
  { n: 76, s: "Os", name: "Osmium", m: "190.23", c: "transition" },
  { n: 77, s: "Ir", name: "Iridium", m: "192.22", c: "transition" },
  { n: 78, s: "Pt", name: "Platinum", m: "195.08", c: "transition" },
  { n: 79, s: "Au", name: "Gold", m: "196.97", c: "transition" },
  { n: 80, s: "Hg", name: "Mercury", m: "200.59", c: "transition" },
  { n: 81, s: "Tl", name: "Thallium", m: "204.38", c: "post-transition" },
  { n: 82, s: "Pb", name: "Lead", m: "207.2", c: "post-transition" },
  { n: 83, s: "Bi", name: "Bismuth", m: "208.98", c: "post-transition" },
  { n: 84, s: "Po", name: "Polonium", m: "209", c: "metalloid" },
  { n: 85, s: "At", name: "Astatine", m: "210", c: "halogen" },
  { n: 86, s: "Rn", name: "Radon", m: "222", c: "noble-gas" },
  { n: 87, s: "Fr", name: "Francium", m: "223", c: "alkali" },
  { n: 88, s: "Ra", name: "Radium", m: "226", c: "alkaline-earth" },
  { n: 89, s: "Ac", name: "Actinium", m: "227", c: "actinide" },
  { n: 90, s: "Th", name: "Thorium", m: "232.04", c: "actinide" },
  { n: 91, s: "Pa", name: "Protactinium", m: "231.04", c: "actinide" },
  { n: 92, s: "U", name: "Uranium", m: "238.03", c: "actinide" },
  { n: 93, s: "Np", name: "Neptunium", m: "237", c: "actinide" },
  { n: 94, s: "Pu", name: "Plutonium", m: "244", c: "actinide" },
  { n: 95, s: "Am", name: "Americium", m: "243", c: "actinide" },
  { n: 96, s: "Cm", name: "Curium", m: "247", c: "actinide" },
  { n: 97, s: "Bk", name: "Berkelium", m: "247", c: "actinide" },
  { n: 98, s: "Cf", name: "Californium", m: "251", c: "actinide" },
  { n: 99, s: "Es", name: "Einsteinium", m: "252", c: "actinide" },
  { n: 100, s: "Fm", name: "Fermium", m: "257", c: "actinide" },
  { n: 101, s: "Md", name: "Mendelevium", m: "258", c: "actinide" },
  { n: 102, s: "No", name: "Nobelium", m: "259", c: "actinide" },
  { n: 103, s: "Lr", name: "Lawrencium", m: "266", c: "actinide" },
  { n: 104, s: "Rf", name: "Rutherfordium", m: "267", c: "transition" },
  { n: 105, s: "Db", name: "Dubnium", m: "268", c: "transition" },
  { n: 106, s: "Sg", name: "Seaborgium", m: "269", c: "transition" },
  { n: 107, s: "Bh", name: "Bohrium", m: "270", c: "transition" },
  { n: 108, s: "Hs", name: "Hassium", m: "277", c: "transition" },
  { n: 109, s: "Mt", name: "Meitnerium", m: "278", c: "unknown" },
  { n: 110, s: "Ds", name: "Darmstadtium", m: "281", c: "unknown" },
  { n: 111, s: "Rg", name: "Roentgenium", m: "282", c: "unknown" },
  { n: 112, s: "Cn", name: "Copernicium", m: "285", c: "post-transition" },
  { n: 113, s: "Nh", name: "Nihonium", m: "286", c: "unknown" },
  { n: 114, s: "Fl", name: "Flerovium", m: "289", c: "post-transition" },
  { n: 115, s: "Mc", name: "Moscovium", m: "290", c: "unknown" },
  { n: 116, s: "Lv", name: "Livermorium", m: "293", c: "unknown" },
  { n: 117, s: "Ts", name: "Tennessine", m: "294", c: "unknown" },
  { n: 118, s: "Og", name: "Oganesson", m: "294", c: "unknown" }
];

const container = document.getElementById('elementsContainer');
const searchInput = document.getElementById('searchInput');
const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');
const modal = document.getElementById('elementModal');
const closeModal = document.getElementById('closeModal');

// Color mapping for modal badges
const categoryColors = {
    'nonmetal': '#2ea043',
    'noble-gas': '#a371f7',
    'alkali': '#f85149',
    'alkaline-earth': '#d29922',
    'metalloid': '#e3b341',
    'halogen': '#3fb950',
    'transition': '#2f81f7',
    'post-transition': '#1f6feb',
    'lanthanide': '#ff7b72',
    'actinide': '#ffa657',
    'unknown': '#6e7681'
};

function renderElements(elements) {
    container.innerHTML = '';
    
    elements.forEach((el, index) => {
        const div = document.createElement('div');
        div.className = `element-card glass cat-${el.c} element-sorting`;
        div.style.animationDelay = `${index * 20}ms`;
        
        div.innerHTML = `
            <div class="atomic-top">
                <span class="atomic-number">${el.n}</span>
                <span class="atomic-mass">${el.m}</span>
            </div>
            <div class="symbol">${el.s}</div>
            <div class="name">${el.name}</div>
        `;
        
        // Modal functionality
        div.addEventListener('click', () => {
            document.getElementById('modalSymbol').textContent = el.s;
            document.getElementById('modalName').textContent = el.name;
            document.getElementById('modalAtomicNumber').textContent = el.n;
            document.getElementById('modalMass').textContent = el.m;
            
            const catBadge = document.getElementById('modalCategory');
            catBadge.textContent = el.c.replace('-', ' ');
            catBadge.style.backgroundColor = categoryColors[el.c] || categoryColors.unknown;
            
            modal.classList.add('active');
            
            // Automatically search for information and return a webpage
            if (typeof searchElementInfo === 'function') {
                searchElementInfo(el.name);
            }
        });
        
        div.addEventListener('animationend', (e) => {
            if (e.animationName === 'elementSortAnim') {
                div.classList.remove('element-sorting');
                div.style.animationDelay = '';
            }
        });
        
        container.appendChild(div);
    });
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = elementsData.filter(el => 
        el.name.toLowerCase().includes(term) || 
        el.s.toLowerCase().includes(term) ||
        el.n.toString() === term
    );
    renderElements(filtered);
});

// View toggles
gridBtn.addEventListener('click', () => {
    if (container.className !== 'element-grid') {
        container.className = 'element-grid';
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
        triggerSortingEffect();
    }
});

listBtn.addEventListener('click', () => {
    if (container.className !== 'element-list') {
        container.className = 'element-list';
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
        triggerSortingEffect();
    }
});

function triggerSortingEffect() {
    const cards = container.querySelectorAll('.element-card');
    cards.forEach((card, index) => {
        card.classList.remove('element-sorting');
        void card.offsetWidth; // trigger reflow
        card.classList.add('element-sorting');
        card.style.animationDelay = `${index * 20}ms`;
    });
}

// Modal close behavior
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});

// Initial render
renderElements(elementsData);

// ─── Background Music Toggle ───
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.classList.add('playing');
        musicToggle.title = 'Pause Music';
    } else {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
        musicToggle.title = 'Play Music';
    }
});
