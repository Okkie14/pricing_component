const slider= document.getElementById('checkbox');

slider.addEventListener('click', () => {
    const basicOption = document.getElementById('basic-price');
    const proOption = document.getElementById('pro-price');
    const masterOption = document.getElementById('master-price');

    if (slider.checked) {
        basicOption.setHTML(19.99);
        proOption.setHTML(24.99);
        masterOption.setHTML(39.99);
    } else {
        basicOption.setHTML(199.99);
        proOption.setHTML(249.99);
        masterOption.setHTML(399.99);
    }
})