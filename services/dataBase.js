const users = [
    {
        id: 1,
        name: "Fernando",
        email: "fernando268a@gmail.com",
        password: "hello",
        address: "7655 BL wilfrid Hamell",
        car: [
            "arduino Uno",
            "Steppers Motors",
        ]
    },
    {
        id: 2,
        name: "Tomas",
        email: "tomas@gmail.com",
        password: "hp",
        address: "7656 BL wilfrid Hamell"
    }
]

const products = [
    {
        "id": "e812f73c-3a89-46ac-b577-e6eec148cb1d",
        "name": "Ergonomic Fresh Pants",
        "price": 962,
        "image": "http://placeimg.com/640/480",
        "isBlock": false
    },
    {
        "id": "2de2ae90-712e-4b77-8989-fb9ec607db77",
        "name": "Ergonomic Metal Bike",
        "price": 129,
        "image": "http://placeimg.com/640/480",
        "isBlock": true
    },
    {
        "id": "cf843311-3fcb-4944-ae5a-90922b0cf546",
        "name": "Refined Soft Chair",
        "price": 145,
        "image": "http://placeimg.com/640/480",
        "isBlock": false
    },
]

module.exports = {users, products};