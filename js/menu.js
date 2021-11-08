const cardsMenu = document.querySelector('.cards-menu');

const changeTitle = (restaraunt) => {
    const restaurantTitle = document.querySelector('.restaurant-title') 
    const rating = document.querySelector('.rating')
    const price = document.querySelector('.price')
    const category = document.querySelector('.category')
    category.textContent = restaraunt.kitchen
    price.textContent = (`ОТ ${restaraunt.price} ₽`)
    rating.textContent = restaraunt.stars
    restaurantTitle.textContent = restaraunt.name
}



const renderItems = (data) => {
     data.forEach(({description, id, image, name , price}) => {
        const div = document.createElement ('div');
        div.classList.add ('card')
        
        div.innerHTML = `<img src="${image}" alt="image" class="card-image" />
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title card-title-reg">${name}</h3>
            </div>
            <div class="card-info">
                <div class="ingredients">${description}
                </div>
            </div>
            <div class="card-buttons">
                <button class="button button-primary button-add-cart">
                    <span class="button-card-text">В корзину</span>
                    <span class="button-cart-svg"></span>
                </button>
                <strong class="card-price-bold">${price}₽</strong>
            </div>
        </div>`

        cardsMenu.append(div);
     });
}

if (localStorage.getItem('restaraunts')) {

    const restaraunt = JSON.parse(localStorage.getItem('restaraunts'))

    changeTitle(restaraunt)

    fetch (`./db/${restaraunt.products}`)
    .then((response) => response.json()) 
    .then ((data) => {
        renderItems(data)
    })
    .catch ((error) => {
        console.log(error);
    }) 
}
else {
    window.location.href = '/index.html'
}



