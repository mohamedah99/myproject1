
// window.alert('hello');
// document.getElementById('demo').innerHTML ="Mohamed";
// console.log('hay');

// var mem= null;
// console.log( typeof(mem) );

//////// window.prompt ////////

// var num1 = window.prompt("enter frist num");
// var num2 = window.prompt("enter sec num");

// var result = Number(num1) + Number(num2);

// console.log( result );


//////// contitional statments ////////

// var user = 22 ;

// if( user > 18)
// {
//     console.log("Welcome");
// }
// else
// {
//     console.log("go home");
// }

// var user = {
//     fname: 'mohamed',
//     lname: 'ahmed',
//     age: 22,
//     gender: 'male',
//     course: {web: 'full stack', ios: 'swift'},
//     eat: function (meal){
//         return 'the meal is'+ meal;
//     }
// };

// var x = user.eat(' koshary');
// console.log(user.eat('koshary'));
// console.log(user.fname);

// function ate(meal2){
//     return 'the meal is '+ meal2;
// }

// var y = ate('pizza');

// console.log(ate('pizza'));

// console.log(typeof(user));

// console.log(user);

//////////// array ////////////

// var friends = ['mohamed', 'ahmed', 'omar', 'seif', 'ameen'];

// var x = friends.splice(3);
// friends.push(x);
// // friends.slice
// console.log(friends);




////////////  project CRUD opreation /////////////

var prodNameInput = document.getElementById('productname');
var prodPriceInput = document.getElementById('productprice');
var prodCatgInput = document.getElementById('productcatagory');
var prodDsecInput = document.getElementById('productdsec'); 
var updateBtn = document.getElementById('updateBtn');
var tmp;
// var prodContainer = [];
 var prodContainer;
 if(localStorage.getItem('products') == null)
 {
     prodContainer = [];
 }
 else
 {
     prodContainer = JSON.parse(localStorage.getItem('products'));
     displayproduct(prodContainer);
 };

function addProduct (){
    if(updateBtn.innerHTML == "add product")
    {
        var product = {
                name: prodNameInput.value,
                price: prodPriceInput.value,
                catg: prodCatgInput.value,
                dsec: prodDsecInput.value
            }

            prodContainer.push(product);
            localStorage.setItem("products", JSON.stringify(prodContainer));
            displayproduct(prodContainer);
            clearform();        
    }
    else
    {
        prodContainer[tmp].name = prodNameInput.value;
        prodContainer[tmp].price = prodPriceInput.value;
        prodContainer[tmp].catg = prodCatgInput.value;
        prodContainer[tmp].dsec = prodDsecInput.value;
        displayproduct(prodContainer);
        localStorage.setItem("products", JSON.stringify(prodContainer));
        updateBtn.innerHTML = 'add product';
        clearform();   
    };
    
};

function clearform(){
    prodNameInput.value = ""
    prodPriceInput.value = ""
    prodCatgInput.value = ""
    prodDsecInput.value = ""
};

function displayproduct(prodIndex){
    var cartoona = ``;
    for(var i = 0; i<prodIndex.length; i++ ){
        cartoona += ` <tr>
        <td>${i}</td>
        <td>${prodIndex[i].name}</td>
        <td>${prodIndex[i].price}</td>
        <td>${prodIndex[i].catg}</td>
        <td>${prodIndex[i].dsec}</td>
        <td> <button onclick="updateProduct(${i})" class="btn btn-warning">update</button> </td>
        <td> <button onclick="deleteProduct(${i})" class=" btn btn-danger">delete</button> </td>
    </tr>`;
    };

    document.getElementById('tablerow').innerHTML = cartoona;
};

displayproduct(prodContainer);


/////// delete function ///////

function deleteProduct (pIndex){
    prodContainer.splice(pIndex,1)
    localStorage.setItem("products", JSON.stringify(prodContainer));
    displayproduct(prodContainer);
};


////////// search function /////////

function searchProducts (term){
    var searchProducts = [];
    for (var i=0; i < prodContainer.length ;i++ )
    {
        if(prodContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true)
        {
            searchProducts.push(prodContainer[i]);
        }
    }
    displayproduct(searchProducts);
};

function updateProduct(ii){
    prodNameInput.value = prodContainer[ii].name;
    prodPriceInput.value = prodContainer[ii].price;
    prodCatgInput.value = prodContainer[ii].catg;
    prodDsecInput.value = prodContainer[ii].dsec;
    updateBtn.innerHTML = 'Update';
    tmp = ii;
};

