
const inptBudget = document.getElementById('inptBudget');
const inptName = document.getElementById('inptName');
const inptPrice = document.getElementById('inptPric');

const btnBudget = document.getElementById('btnBudget');
const btnNamePrice = document.getElementById('btnNamePrice');

const budgetDisplay = document.getElementById('budgetDisplay');
const remaingBudget=document.getElementById("remaingBudget");
const productList = document.getElementById('prductList');


let currentBudget = 0;


let products = [];

btnBudget.addEventListener('click', () => {
  if (Number(inptBudget.value) > 0) {
    currentBudget += Number(inptBudget.value);
  
    display();
  };
});
btnNamePrice.addEventListener('click', () => {
  if(inptPrice.value===""||inptName.value.trim()==""){
    return;
  }; 
  let prodcut = {
    id: Date.now(),
    name: inptName.value,
    price: Number(inptPrice.value)
  }
  inptName.value ="";
  inptPrice.value ="";
  products.push(prodcut);
  display()
});
function display(){
  budgetDisplay.innerText=currentBudget;
  inptBudget.value = "";
  productList.innerText=''; 
  let allPricesProducts=0;
  let remaingNum=allPricesProducts
  
  products.forEach((element) => {
  
    allPricesProducts+=element.price;
   
      let li=document.createElement('li');
     let btnDelete=document.createElement('button');
     li.innerText=`${element.name} : ${element.price}`;
     btnDelete.innerText="remove";
     remaingBudget.innerText=remaingNum;
      btnDelete.addEventListener('click',()=>{
       products=products.filter(product=>product.id!==element.id);
        display();
       });
    
      productList.appendChild(li);
      li.appendChild(btnDelete);
    
   });
   remaingNum=currentBudget-allPricesProducts;
   remaingBudget.innerText=remaingNum;
  };


