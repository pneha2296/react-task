export const CreateOrders = {
    "itemTypes": [
        {
            "id": 1,
            "itemTypeName": "Electronics"
        },
        {
            "id": 2,
            "itemTypeName": "Groceries"
        }
    ],
    "allItems": [
        {
            "id": 1,
            "itemTypeId": 1,
            "itemName": "iPhone 13 Max Pro",
            "temDescription": "This is iPhone",
            "itemSpecifications": { "memory": "512 GB", "colorChoice": true, "color": "RED" }
        },
        {
            "id": 2,
            "itemTypeId": 1,
            "itemName": "Android phone",
            "temDescription": "This is Android phone",
            "itemSpecifications": { "memory": "512 GB" }
        },
        {
            "id": 3,
            "itemTypeId": 2,
            "itemName": "Parle G Biscuit 70 gram",
            "temDescription": "This is a parle g biscuit of 70 Gram",
            "itemSpecifications": null
        },
        {
            "id": 4,
            "itemTypeId": 2,
            "itemName": "Rice Packet",
            "temDescription": "This is Rice Packet",
            "itemSpecifications": { "sizeInKG": 1 }
        }
    ]
}