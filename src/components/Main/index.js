import React, {useEffect, useState} from 'react';
import Card from './Card';
import Category from './Category';
import Footer from './Footer';
import Table from './Table';
import Header from './Header';
import Metrics from './Metrics';
import './Main.css'

/* Assets */
import dummy from './assets/images/product_dummy.svg';


const Main = () => {
	
	const [productosCount, setProductosCount] = useState(0)
	const [usuariosCount, setUsuariosCount] = useState(0)
	const [categoriasCount, setCategoriasCount] = useState(0)
	const [productos, setProductos] = useState([])
	const [productPage, setProductPage] = useState([])
	const [url, setUrl] = useState('http://localhost:3001/api/products/list')
	const [categorias, setCategorias] = useState([])
	const [lastproduct, setLastproduct] = useState({})
	
	// productsCount
	useEffect(() => {
		fetch(url)
		.then(res => res.json())
		.then(productosCount => {
			setProductosCount(productosCount.meta.count)
		})
		.catch((e) => {
			console.log(e);
		})
	}, [])
	
	// usersCount
	useEffect(() => {
		fetch('http://localhost:3001/api/users/')
		.then(res => res.json())
		.then(usuariosCount => {
			setUsuariosCount(usuariosCount.meta.count)
		})
		.catch((e) => {
			console.log(e);
		})
	}, [])
	
	// categoriesCount
	useEffect(() => {
		fetch('http://localhost:3001/api/products/categories')
		.then(res => res.json())
		.then(categoriasCount => {
			setCategoriasCount(categoriasCount.meta.count)
		})
		.catch((e) => {
			console.log(e);
		})
	}, [])
	
	// products
	useEffect(() => {
		fetch(url)
		.then(res => res.json())
		.then(productos => {
			setProductos(productos.data.products)
			setProductPage([productos.meta.previous, productos.meta.next])
			let categoriasArray = Object.entries(productos.meta.countByCategory)
			
			setCategorias(categoriasArray)
		})
		.catch((e) => {
			console.log(e);
		})
	}, [url])
	//last product
	useEffect(() => {
		fetch('http://localhost:3001/api/products/list')
		.then(result => result.json())
		.then(productos =>{
			let lastProductId = productos.data.products[0].id
			fetch('http://localhost:3001/api/products/' + lastProductId)
			.then(result =>
				result.json()
			)
			.then(product => {
				setLastproduct(product)
				console.log(lastproduct)
				console.log(lastProductId)
			})
			
		})
	}, [])	
			
		
	

	let previous
	if(productPage[0]==="") {
		previous = ""
	} else {
		previous = "style={display:none}"
	}
		return (
			<div id="content-wrapper" className="d-flex flex-column">
	
				<div id="content">
	
					<Header />

					<div className="container-fluid">
						<Metrics 
							title="Motorbike Zone Metrics"
							productosCount= {productosCount}
							usuariosCount= {usuariosCount}
							categoriasCount= {categoriasCount}

						/>
						<div className="row">
							{/* Cards - prueba de childrens */}
							
							<Card
								title="Last product in Data Dase"
							>
								<div className="text-center">
									<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src={dummy} alt="dummy" />
								</div>
								<p>{lastproduct.data.description}</p>
								<a target="_blank" rel="nofollow" href="/">View product detail</a>
							</Card>
	
							<Card 
								title="Categories in Data Base"
							>
								<div className="row">
									{categorias.map(categoria =>(
										
										
										<Category nombre={categoria[0]} cantidad={categoria[1]}/>
									))}		
								</div>	
										
							</Card>			
											
										
									
									
								
							
							
						</div>
						<Table 
							productos={productos}
							productPage={productPage}
							>
							<div className="tableButtons">
							{productPage[0] !== "" && <button className="tableButton" onClick={()=> setUrl(productPage[0])}>Previous</button>}
							{productPage[1] !== "" && <button className="tableButton" onClick={()=> setUrl(productPage[1])}>Next</button>}
							</div>
							</Table>
						
							
					</div>
				</div>
	
				<Footer />
	
			</div>
		);
}
export default  Main;

