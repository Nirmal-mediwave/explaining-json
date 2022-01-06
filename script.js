// let userName = "Frodo";
// let greeting = "Hello " + userName;

// console.log(greeting)

// userName = "Bilbo";
// greeting = "Hello " + userName;
// console.log(greeting)


// const userName = "Frodo";
// const greeting = "Hello " + userName;

// console.log(greeting)

// userName = "Bilbo";
// greeting = "Hello " + userName;
// console.log(greeting)




// const productId1 = 1
// const productName1 = "Sofa";
// const productPrice1 = 120;
// const productRating1 = 3;

// const productId2 = 2
// const productName2 = "Chair";
// const productPrice2 = 100;
// const productRating2 = 4;


// const likes = [
//     "kalam", 'einstein', 'newton'
// ]
// console.log(likes[0]);

// const product = {
//     id: 1,
//     name: 'Sofa',
//     price: 120,
//     rating: 3
// }
// console.log(product['id']);
// // or
// console.log(product.id);

// function printProducts(products) {
//     console.log('Printing products')
//     for (let i = 0; i < products.length; i++) {
//         console.log(products[i]['name'])
//     }
// }

// const products = [{
//     id: 1,
//     name: 'Sofa',
//     price: 120,
//     rating: 3
// }, {
//     id: 2,
//     name: 'Chair',
//     price: 100,
//     rating: 4
// }, {
//     id: 3,
//     name: 'Chair',
//     price: 90,
//     rating: 3
// }]

// printProducts(products)
// products.push({ id: 4, name: 'Recliner', price: 300, rating: 5 })
// printProducts(products)

/**
{
    id: 1,
    name: 'Sofa',
    price: 120,
    rating: 3,
    materials: ['cloth', 'teak wood'],
    manufacturer: {
        location: 'Delhi',
        name: 'MS furnitures'
    }
}
 */

const products = [{
        id: 1,
        name: 'Sofa',
        price: 120,
        rating: 3,
    }, {
        id: 2,
        name: 'Chair',
        price: 100,
        rating: 4
    }, {
        id: 3,
        name: 'Chair',
        price: 90,
        rating: 3
    },
    {
        id: 4,
        name: 'Recliner',
        price: 390,
        rating: 5
    }
]


// for (let i = 0; i < products.length; i++) {
//     const product = products[i]
//     console.log(product['name'])
// }



function buildProductHTML(products) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    // console.log('=========')
    for (let product of products) {
        /*
        <div class="item">
            <h2>Chair</h2>
            <p>Rs 300</p>
            <p>Rating: 4</p>
        </div>
        */
        // item div
        const divItem = document.createElement('div')
        divItem.classList.add('item');

        // h2
        const h2 = document.createElement('h2')
        h2.textContent = product.name;
        divItem.append(h2)

        // p - price
        const pPrice = document.createElement('p');
        pPrice.textContent = 'Rs. ' + product.price;
        divItem.appendChild(pPrice)

        // p - rating
        const pRating = document.createElement('p');
        pRating.textContent = `Rating: ${product.rating}`;
        divItem.appendChild(pRating)


        container.appendChild(divItem)
    }
}