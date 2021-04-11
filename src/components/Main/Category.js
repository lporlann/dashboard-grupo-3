import React , {useState , useEffect} from 'react';




const Category = () => {
    const [products, setProducts] = useState({});
    const [url, setUrl] = useState('http://localhost:3001/api/products/list')
    // traemos las categoras y el count
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(products =>{
           setProducts(products.meta.countByCategory)
        })
        .catch(e =>{
            console.log(e)
        })
    },[ ])
        
     
    
    
    
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
				<div className="card-body">.</div>
            </div>
		</div>
    );
}

export default Category;
