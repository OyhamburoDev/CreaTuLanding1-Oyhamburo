
// Lista de objetos
const productos = [

{
    id: 1,
    title: "Remera",
    descripcion: "uasnfkjdnaskldnas",
    price: 1000,
    img: "https://picsum.photos/200/300?random=1",
    categoria: 1
},

{
    id: 2,
    title: "Gorra",
    descripcion: "uasnfkjdnaskldnas",
    price: 2000,
    img: "https://picsum.photos/200/300?random=2",
    categoria: 2
},

{
    id: 3,
    title: "Short", 
    descripcion: "uasnfkjdnaskldnas",
    price: 8000,
    img: "https://picsum.photos/200/300?random=3",
    categoria: 3
},
{
    id: 4,
    title: "Jean", 
    descripcion: "uasnfkjdnaskldnas",
    price: 8000,
    img: "https://picsum.photos/200/300?random=4",
    categoria: 4
},
{
    id: 5,
    title: "Calzado", 
    descripcion: "uasnfkjdnaskldnas",
    price: 8000,
    img: "https://picsum.photos/200/300?random=5",
    categoria: 5
},
{
    id: 6,
    title: "Remera Clasica",
    descripcion: "uasnfkjdnaskldnas",
    price: 1000,
    img: "https://picsum.photos/200/300?random=6",
    categoria: 1
},

{
    id: 7,
    title: "Gorra Retro",
    descripcion: "uasnfkjdnaskldnas",
    price: 2000,
    img: "https://picsum.photos/200/300?random=7",
    categoria: 2
},

{
    id: 8,
    title: "Short Oversize", 
    descripcion: "uasnfkjdnaskldnas",
    price: 8000,
    img: "https://picsum.photos/200/300?random=8",
    categoria: 3
},
{
    id: 9,
    title: "Jean total Black", 
    descripcion: "uasnfkjdnaskldnas",
    price: 8000,
    img: "https://picsum.photos/200/300?random=9",
    categoria: 4
},
{
    id: 10,
    title: "Calzado Nike", 
    descripcion: "uasnfkjdnaskldnas",
    price: 8000,
    img: "https://picsum.photos/200/300?random=10",
    categoria: 5
},
{
    id: 11,
    title: "Ojotas", 
    descripcion: "uasnfkjdnaskldnas",
    price: 8000,
    img: "https://picsum.photos/200/300?random=11",
    categoria: 5
},
{
    id: 12,
    title: "Remera Oversize",
    descripcion: "uasnfkjdnaskldnas",
    price: 1000,
    img: "https://picsum.photos/200/300?random=12",
    categoria: 1
},

{
    id: 13,
    title: "Gorra new era",
    descripcion: "uasnfkjdnaskldnas",
    price: 2000,
    img: "https://picsum.photos/200/300?random=13",
    categoria: 2
},

{
    id: 14,
    title: "Short Skinny", 
    descripcion: "uasnfkjdnaskldnas",
    price: 8000,
    img: "https://picsum.photos/200/300?random=14",
    categoria: 3
},
{
    id: 15,
    title: "Jean total white", 
    descripcion: "uasnfkjdnaskldnas",
    price: 8000,
    img: "https://picsum.photos/200/300?random=15",
    categoria: 4
},
{
    id: 16,
    title: "Calzado Adidas", 
    descripcion: "uasnfkjdnaskldnas",
    price: 8000,
    img: "https://picsum.photos/200/300?random=16",
    categoria: 5
},
]


export const getProductos = ()=>{
   return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },2000)
    })
} 



export const elegirProducto = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const respuesta = productos.find((item) => item.id === id);
            if (respuesta) {
                resolve(respuesta);
            } else {
                reject("Producto no encontrado");  
            }
        }, 2000);
    });
}

