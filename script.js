const slider= document.getElementById('checkbox');

slider.addEventListener('click', () => {
    const basicOption = document.getElementById('basic-price');
    const proOption = document.getElementById('pro-price');
    const masterOption = document.getElementById('master-price');

    if (slider.checked) {
        basicOption.innerHTML = 19.99;
        proOption.innerHTML = 24.99;
        masterOption.innerHTML = 39.99;
    } else {
        basicOption.innerHTML = 199.99;
        proOption.innerHTML = 249.99;
        masterOption.innerHTML = 399.99;
    }
})