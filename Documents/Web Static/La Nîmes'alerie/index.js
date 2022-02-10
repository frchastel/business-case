function Products(pic,name,price){
    this.pic = pic,
        this.name = name,
        this.price = price
}

const product1 = new Products('img/6189zN6zKyL1.jpg', '6189zN6zKyL1', 199);
const product2 = new Products('img/dog-camera_1.jpg', 'dog-camera_1', 299);
const product3 = new Products('img/hills-canine-dental-care.jpg', 'hills-canine-dental-care', 4.49);
const product4 = new Products('img/large_pedigree-vitalite.jpg', 'large_pedigree-vitalite', 27.76);


let products = [];
products.push(product1,product2,product3,product4);

function populateTableList(){
    let listOfProducts = '';

    products.forEach(
        function(item, index, array, done) {

            $('#productList').append('' +
                '<tr class="text-center">\n            <td>' +
                '<img src=${item.pic} class="img-fluid img-thumbnail w-50"></td>\n            ' +
                '<td class="w-25 align-middle">'+item.name+'</td>\n            ' +
                '<td class="w-25 align-middle">+item.price+</td>\n            ' +
                '<td class="w-25 align-middle"><button class="btn btn-info">View</button></td>\n            ' +
                '</tr>');
            console.log("add line !");
            }
    );



}

    function setImageVisible(id, visible) {
        var img = document.getElementById(id);
        img.style.visibility = (visible ? 'visible' : 'hidden');
    }
