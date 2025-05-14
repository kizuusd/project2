// Script untuk menangani error loading gambar
document.addEventListener('DOMContentLoaded', function() {
    // Tangani semua error gambar
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            console.warn('Failed to load image:', img.src);
            // Ganti dengan gambar placeholder
            img.src = 'https://via.placeholder.com/200x200?text=Image+Not+Found';
        };
    });

    // Tangani background image yang gagal load
    document.querySelectorAll('.track-cover, .track-thumb').forEach(el => {
        // Cek apakah background image berhasil di-load
        setTimeout(() => {
            if (window.getComputedStyle(el).backgroundImage === 'none') {
                console.warn('Failed to load background image for element:', el);
                el.style.backgroundColor = '#444';
                el.style.backgroundImage = 'none';
                
                // Tambahkan teks pengganti
                const textNode = document.createElement('div');
                textNode.textContent = 'No Image';
                textNode.style.color = '#aaa';
                textNode.style.display = 'flex';
                textNode.style.alignItems = 'center';
                textNode.style.justifyContent = 'center';
                textNode.style.height = '100%';
                textNode.style.fontSize = '12px';
                el.appendChild(textNode);
            }
        }, 1000);
    });
}); 