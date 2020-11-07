
var inititalState = [
    {
        id: 1,
        productName: "Áo đầm",
        price: 30000000,
        images: "img/category/category_1.png"
    },
    {
        id: 2,
        productName: "Áo thun nam",
        price: 20000000,
        images: "img/category/category_2.png"
    },
    {
        id: 3,
        productName: "Áo sơ mi nữ",
        price: 50000000,
        images: "img/category/category_3.png"
    },
    {
        id: 4,
        productName: "Đầm đen",
        price: 33000000,
        images: "img/category/category_4.png"
    },
    {
        id: 5,
        productName: "Hoodie",
        price: 21000000,
        images: "img/category/category_5.png"
    },
    {
        id: 6,
        productName: "Áo body",
        price: 40000000,
        images: "img/category/category_6.png"
    }
];

// var getData = axios.get(`https://5f958b932de5f50016ca1fdb.mockapi.io/Product`)
//     .then(res => {
//         var data = res.data;
//         console.log(data);

//     });

const products = (state = inititalState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;