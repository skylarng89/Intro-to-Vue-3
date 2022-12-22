const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            colours: ['Blue', 'Green', 'Yellow'],
            footSizes: [
                { id: 123, size: 'Small'},
                { id: 234, size: 'Medium'},
                { id: 345, size: 'Large'},
                { id: 456, size: 'Extra Large'},
                { id: 567, size: 'Extra Extra Large'}
            ]
        }
    }
})
