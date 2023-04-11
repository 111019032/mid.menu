// import products from "../json/products.json";
// import ProductItem from "./ProductItem"
// import styles from './ProductList.module.css'


// export default function ProductList({ products }) {
//   return (
//     <div className="row">
//       {products.map(product => (
//             //   <div className={styles.box}
//             //   key={product.id}>
//             //     <div className={styles.pic}>
//             //       <a href="#">
//             //         <img className="w-100"
//             //           src="./images/korea1.jpg"
//             //           alt="Rustic mug" />
//             //       </a>
//             //     </div>
//             //     <div className={styles.p - 4}>
//             //       <h5 className={styles.theme}>
//             //         food
//             //       </h5>
//             //     </div>
//             // </div>
//             <ProductItem key={product.id} product={product}/>
//             ))}
//     </div>
//   );
// }




import React from 'react'
//*當還沒有product item的時候*//
import styles from './ProductList.module.css'
export default function ProductList(){
    
  return(
  <div className="row">
    
 

            
            <div className={styles.bestseller}>
                <div className={styles.bestselltitle}>
                    <h2>Best Seller Top3</h2>
                 </div>
                 <div className={styles.bestsellpic}> 
                    <div className={styles.solid}>
                        <a href="#">
                            <img className="w-100" src="images/bs1.jpg" alt="" />
                        </a>
                        <div className={styles.bestsellprice}>
                        <a href="#"><h6>Shu Uemura Makeup Mist</h6></a>
                            <h6>$900TWD</h6>
                        </div>
                    </div>  
                    <div className={styles.solid}>
                        <a href="#">
                            <img className="w-100" src="images/bs2.jpg" alt="" />
                        </a>
                        <div className={styles.bestsellprice}>
                        <a href="#"><h6>Stylenanda Velvet Crop</h6></a>
                            <h6>$1500TWD</h6>
                        </div>
                    </div>  
                    <div className={styles.solid}>
                        <a href="#">
                            <img className="w-100" src="images/bs3.jpg" alt="" />
                        </a>
                        <div className={styles.bestsellprice}>   
                        <a href="#"><h6>Muji Sofabett Mit</h6></a>
                            <h6>$5500TWD</h6>
                        </div>
                    </div>  
                </div> 
                
            </div>
            <div className="korea">
                <div className={styles.countryname}>
                    <h2>Korea</h2>
                </div>
                <div className={styles.korea2container}>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <a href="#">
                                <img className="w-100" 
                                src="./images/korea1.jpg"
                                alt="Rustic mug" />
                            </a>     
                        </div>
                        <div className={styles.p-4}>    
                            <h5 className={styles.theme}>
                                Food
                            </h5>   
                        </div>   
                    </div> 
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <a href="#">
                                <img className="w-100" 
                                src="./images/korea2.jpg"
                                alt="Rustic mug" />
                            </a>     
                        </div>
                        <div className={styles.p-4}>    
                            <h5 className={styles.theme}>
                                Clothes
                            </h5>   
                        </div>   
                    </div> 
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <a href="#">
                                <img className="w-100" 
                                src="./images/korea3.jpg"
                                alt="Rustic mug" />
                            </a>     
                        </div>
                        <div className={styles.p-4}>    
                            <h5 className={styles.theme}>
                                Idol
                            </h5>   
                        </div>   
                    </div> 
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <a href="#">
                                <img className="w-100" 
                                src="./images/korea4.jpg"
                                alt="Rustic mug" />
                            </a>     
                        </div>
                        <div className={styles.p-4}>    
                            <h5 className={styles.theme}>
                                Makeup
                            </h5>   
                        </div>   
                    </div>  
                </div>
                
                <div className={styles.seemore}>
                    <h6>See More</h6>
                    <div className="seemorepic">
                        <a href="#">
                        <img className="w-100" src="images/seemore.png" alt="" />
                        </a>
                    </div>
                </div>  
            </div>
            <div className="korea">
                <div className={styles.countryname}>
                    <h2>Japan</h2>
                </div>
                <div className={styles.korea2container}>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <a href="#">
                                <img className="w-100" 
                                src="./images/japan1.jpg"
                                alt="Rustic mug" />
                            </a>     
                        </div>
                        <div className={styles.p-4}>    
                            <h5 className={styles.theme}>
                                Food
                            </h5>   
                        </div>   
                    </div> 
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <a href="#">
                                <img className="w-100" 
                                src="./images/japan2.jpg"
                                alt="Rustic mug" />
                            </a>     
                        </div>
                        <div className={styles.p-4}>    
                            <h5 className={styles.theme}>
                                Clothes
                            </h5>   
                        </div>   
                    </div> 
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <a href="#">
                                <img className="w-100" 
                                src="./images/japan3.jpg"
                                alt="Rustic mug" />
                            </a>     
                        </div>
                        <div className={styles.p-4}>    
                            <h5 className={styles.theme}>
                                Animate
                            </h5>   
                        </div>   
                    </div> 
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <a href="#">
                                <img className="w-100" 
                                src="./images/japan4.jpg"
                                alt="Rustic mug" />
                            </a>     
                        </div>
                        <div className={styles.p-4}>    
                            <h5 className={styles.theme}>
                                Makeup
                            </h5>   
                        </div>   
                    </div>  
                </div>
                
                <div className={styles.seemore}>
                    <h6>See More</h6>
                    <div className="seemorepic">
                        <a href="#">
                        <img className="w-100" src="images/seemore.png" alt="" />
                        </a>
                    </div>
                </div>  
            </div> 
            <div className="korea">
                <div className={styles.countryname}>
                    <h2>United States</h2>
                </div>
                <div className={styles.korea2container}>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <a href="#">
                                <img className="w-100" 
                                src="./images/us1.jpg"
                                alt="Rustic mug" />
                            </a>     
                        </div>
                        <div className={styles.p-4}>    
                            <h5 className={styles.theme}>
                                Food
                            </h5>   
                        </div>   
                    </div> 
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <a href="#">
                                <img className="w-100" 
                                src="./images/us2.jpg"
                                alt="Rustic mug" />
                            </a>     
                        </div>
                        <div className={styles.p-4}>    
                            <h5 className={styles.theme}>
                                Clothes
                            </h5>   
                        </div>   
                    </div> 
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <a href="#">
                                <img className="w-100" 
                                src="./images/us3.jpg"
                                alt="Rustic mug" />
                            </a>     
                        </div>
                        <div className={styles.p-4}>    
                            <h5 className={styles.theme}>
                            Celeb
                            </h5>   
                        </div>   
                    </div> 
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <a href="#">
                                <img className="w-100" 
                                src="./images/us4.jpg"
                                alt="Rustic mug" />
                            </a>     
                        </div>
                        <div className={styles.p-4}>    
                            <h5 className={styles.theme}>
                            Makeup
                            </h5>   
                        </div>   
                    </div>  
                </div>
                
                <div className={styles.seemore}>
                    <h6>See More</h6>
                    <div className="seemorepic">
                        <a href="#">
                        <img className="w-100" src="images/seemore.png" alt="" />
                        </a>
                    </div>
                </div>  
            </div>
            <div className={styles.htu}>
                <div className={styles.howtousetitle}>
                   <h3> How To Use</h3>
                </div>
                <div className={styles.howtouse}>
                    <a href="#">
                        <img className="w-100" src="images/1.jpg" alt="" />
                    </a>
                    <a href="#">
                        <img className="w-100" src="images/2.jpg" alt="" />
                    </a>
                    <a href="#">
                        <img className="w-100" src="images/3.jpg" alt="" />
                    </a>
                </div> 
            </div>  
</div>
        );

}