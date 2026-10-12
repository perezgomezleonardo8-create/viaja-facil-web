const HomeController = {
    init: function() {
        const paquetes = PackageModel.getFeaturedPackages();
        this.renderPackages(paquetes);
    },
    
    renderPackages: function(paquetes) {
        const grid = document.getElementById('packages-grid');
        if(!grid) return;
        
        grid.innerHTML = '';
        
        paquetes.forEach(pkg => {
            const card = document.createElement('div');
            card.className = 'package-card';
            card.innerHTML = `
                <div class="card-body">
                    <h4>${pkg.nombre}</h4>
                    <p>${pkg.descripcion}</p>
                    <div class="card-meta">
                        <span class="badge">⏱️ ${pkg.duracion}</span>
                        <span class="price">${pkg.price || pkg.precio}</span>
                    </div>
                    <button class="btn-card">Cotizar Ahora</button>
                </div>
            `;
            grid.appendChild(card);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => HomeController.init());
