const productlist = [
    {
        'id':1,
        'name':'silent patient',
        'price':250,
        'description':"product1"
    },
    {
        'id':2,
        'name':'verity',
        'price':350,
        'description':"product2"
    },
    {
        'id':3,
        'name':'good girls guide to murder',
        'price':750,
        'description':"product3"
    },
    {
        'id':4,
        'name':'as good as dead',
        'price':450,
        'description':"product4"
    },
    {
        'id':5,
        'name':'prince of sins',
        'price':500,
        'description':"product5"
    }
];

const productcontainer = document.getElementById('productcontainer');
productlist.forEach((product)=>{
    const prodcrd = document.createElement('div')
    prodcrd.classList.add('prodcrd')
    productcontainer.appendChild(prodcrd)

    const prodnm = document.createElement('h2')
    prodnm.classList.add('prodnm')
    prodnm.innerHTML=product.name
    prodcrd.appendChild(prodnm)

    const prodprs = document.createElement('h4')
    prodprs.classList.add('prodprs')
    prodprs.innerHTML=product.price
    prodcrd.appendChild(prodprs)

    const proddes = document.createElement('h5')
    proddes.classList.add('proddes')
    proddes.innerHTML=product.description
    prodcrd.appendChild(proddes)

    const prodbtn =document.createElement('button')
    prodbtn.classList.add('prodbtn')
    prodbtn.innerHTML="add to cart"
    prodcrd.appendChild(prodbtn)

    let count=0
    const btn=document.querySelector('.prodbtn')
    const count1 = document.getElementById('count')

    prodbtn.addEventListener('click',()=>{
        count++
        count1.innerHTML=count
    })

    let total=0
    const val=document.querySelector('.prodprs')
    const total1 = document.getElementById('total')

    prodbtn.addEventListener('click',()=>{
        total=eval(total+product.price)
        total1.innerHTML=total
    })
})




