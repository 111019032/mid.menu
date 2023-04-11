import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Home from './pages/Home'
import 'antd/dist/reset.css';

 

function App() {
  return(
    <Home />
    // <div class="container main-layout">
    //     <header class="text-center d-flex row flex-column header">
    //       <div class="row2">
            
    //         <div class="col3">
    //             <div class="iconsearch">
    //                 <a href="#">
    //                     <img class="w-100" src="images/iconsearch.png" alt="" />
    //                 </a>
    //             </div>
    //          </div>
    //          <div className="col4">
//     <div className="iconlogo">
//     <a href="#">
//         <img className="w-100" src="images/menulogo.png" alt="" />
//     </a>
//   </div>
// </div>  
               
             

    //          <div class="col5">  
    //             <div class="col2">
    //                 <div class="iconsearch">
    //                     <a href="#">
    //                         <img class="w-100" src="images/iconsearch.png" alt="" />
    //                     </a>
    //                 </div>
    //             </div>
                
    //             <div class="col2">
    //                 <div class="iconlanguage">
    //                     <a href="#">
    //                         <img class="w-100" src="images/iconlanguage.png" alt="" />
    //                     </a>
    //                 </div>
    //             </div>
            
    //             <div class="col2">
    //                 <div class="iconlogin">
    //                     <a href="#">
    //                         <img class="w-100" src="images/iconlogin.png" alt="" />
    //                     </a>
    //                 </div>
    //             </div>
            
    //             <div class="col2">
    //                 <div class="iconcart">
    //                     <a href="#">
    //                         <img class="w-100" src="images/iconcart.png" alt="Pom Pom cushion 45x45 cm" />
    //                     </a>
    //                 </div>
    //             </div>
    //         </div>  
    //     </div>
        

    //         {/* <!-- 水平分隔線 --> */}
    //         <div class="flex mt-6 justify-center">
    //             <hr class="hr-header-line rounded" />
    //         </div> 
            
    //     </header>
       
        // <div class="row content">
        //     <div class="bestseller">
        //         <div class="bestselltiitle">
        //             <h2>Best Seller Top3</h2>
        //          </div>
        //          <div class="bestsellpic">
        //             <div class="solid">
        //                 <a href="#">
        //                     <img class="w-100" src="images/bs1.jpg" alt="" />
        //                 </a>
        //                 <div class="bestsellprice">
        //                     <h6>Shu Uemura Makeup Mist</h6>
        //                     <h6>$900TWD</h6>
        //                 </div>
        //             </div>  
        //             <div class="solid">
        //                 <a href="#">
        //                     <img class="w-100" src="images/bs2.jpg" alt="" />
        //                 </a>
        //                 <div class="bestsellprice">
        //                     <h6>Stylenanda Velvet Crop</h6>
        //                     <h6>$1500TWD</h6>
        //                 </div>
        //             </div>  
        //             <div class="solid">
        //                 <a href="#">
        //                     <img class="w-100" src="images/bs3.jpg" alt="" />
        //                 </a>
        //                 <div class="bestsellprice">   
        //                     <h6>Muji Sofabett Mit</h6>
        //                     <h6>$5500TWD</h6>
        //                 </div>
        //             </div>  
        //         </div> 
                
        //     </div>
        //     <div class="korea">
        //         <div class="countryname">
        //             <h2>Korea</h2>
        //         </div>
        //         <div class="korea2container">
        //             <div class="box">
        //                 <div class="pic">
        //                     <a href="#">
        //                         <img class="w-100" src="images/korea1.jpg" alt="Rustic mug" />
        //                     </a>     
        //                 </div>
        //                 <div class="p-4">    
        //                     <h5 class="theme">
        //                         Food
        //                     </h5>   
        //                 </div>   
        //             </div> 
        //             <div class="box">
        //                 <div class="pic">
        //                     <a href="#">
        //                         <img class="w-100" src="images/korea2.jpg" alt="Rustic mug" />
        //                     </a>     
        //                 </div>
        //                 <div class="p-4">    
        //                     <h5 class="theme">
        //                         Clothes
        //                     </h5>   
        //                 </div>   
        //             </div> 
        //             <div class="box">
        //                 <div class="pic">
        //                     <a href="#">
        //                         <img class="w-100" src="images/korea3.jpg" alt="Rustic mug" />
        //                     </a>     
        //                 </div>
        //                 <div class="p-4">    
        //                     <h5 class="theme">
        //                         Idol
        //                     </h5>   
        //                 </div>   
        //             </div> 
        //             <div class="box">
        //                 <div class="pic">
        //                     <a href="#">
        //                         <img class="w-100" src="images/korea4.jpg" alt="Rustic mug" />
        //                     </a>     
        //                 </div>
        //                 <div class="p-4">    
        //                     <h5 class="theme">
        //                         MakeUp
        //                     </h5>   
        //                 </div>   
        //             </div>  
        //         </div>
                
        //         <div class="seemore">
        //             <h6>See More</h6>
        //             <div class="seemorepic">
        //                 <a href="#">
        //                 <img class="w-100" src="images/seemore.png" alt="" />
        //                 </a>
        //             </div>
        //         </div>  
        //     </div>
        //     <div class="korea">
        //         <div class="countryname">
        //             <h2>Japan</h2>
        //         </div>
        //         <div class="korea2container">
        //             <div class="box">
        //                 <div class="pic">
        //                     <a href="#">
        //                         <img class="w-100" src="images/japan1.jpg" alt="Rustic mug" />
        //                     </a>     
        //                 </div>
        //                 <div class="p-4">    
        //                     <h5 class="theme">
        //                         Food
        //                     </h5>   
        //                 </div>   
        //             </div> 
        //             <div class="box">
        //                 <div class="pic">
        //                     <a href="#">
        //                         <img class="w-100" src="images/japan2.jpg" alt="Rustic mug" />
        //                     </a>     
        //                 </div>
        //                 <div class="p-4">    
        //                     <h5 class="theme">
        //                         Clothes
        //                     </h5>   
        //                 </div>   
        //             </div> 
        //             <div class="box">
        //                 <div class="pic">
        //                     <a href="#">
        //                         <img class="w-100" src="images/japan3.jpg" alt="Rustic mug" />
        //                     </a>     
        //                 </div>
        //                 <div class="p-4">    
        //                     <h5 class="theme">
        //                         Animate
        //                     </h5>   
        //                 </div>   
        //             </div> 
        //             <div class="box">
        //                 <div class="pic">
        //                     <a href="#">
        //                         <img class="w-100" src="images/japan4.jpg" alt="Rustic mug" />
        //                     </a>     
        //                 </div>
        //                 <div class="p-4">    
        //                     <h5 class="theme">
        //                         MakeUp
        //                     </h5>   
        //                 </div>   
        //             </div>  
        //         </div>
                
        //         <div class="seemore">
        //             <h6>See More</h6>
        //             <div class="seemorepic">
        //                 <a href="#">
        //                 <img class="w-100" src="images/seemore.png" alt="" />
        //                 </a>
        //             </div>
        //         </div>  
        //     </div> 
        //     <div class="korea">
        //         <div class="countryname">
        //             <h2>United States</h2>
        //         </div>
        //         <div class="korea2container">
        //             <div class="box">
        //                 <div class="pic">
        //                     <a href="#">
        //                         <img class="w-100" src="images/us1.jpg" alt="Rustic mug" />
        //                     </a>     
        //                 </div>
        //                 <div class="p-4">    
        //                     <h5 class="theme">
        //                         Food
        //                     </h5>   
        //                 </div>   
        //             </div> 
        //             <div class="box">
        //                 <div class="pic">
        //                     <a href="#">
        //                         <img class="w-100" src="images/us2.jpg" alt="Rustic mug" />
        //                     </a>     
        //                 </div>
        //                 <div class="p-4">    
        //                     <h5 class="theme">
        //                         Clothes
        //                     </h5>   
        //                 </div>   
        //             </div> 
        //             <div class="box">
        //                 <div class="pic">
        //                     <a href="#">
        //                         <img class="w-100" src="images/us3.jpg" alt="Rustic mug" />
        //                     </a>     
        //                 </div>
        //                 <div class="p-4">    
        //                     <h5 class="theme">
        //                         Celeb
        //                     </h5>   
        //                 </div>   
        //             </div> 
        //             <div class="box">
        //                 <div class="pic">
        //                     <a href="#">
        //                         <img class="w-100" src="images/us4.jpg" alt="Rustic mug" />
        //                     </a>     
        //                 </div>
        //                 <div class="p-4">    
        //                     <h5 class="theme">
        //                         MakeUp
        //                     </h5>   
        //                 </div>   
        //             </div>  
        //         </div>
                
        //         <div class="seemore">
        //             <h6>See More</h6>
        //             <div class="seemorepic">
        //                 <a href="#">
        //                 <img class="w-100" src="images/seemore.png" alt="" />
        //                 </a>
        //             </div>
        //         </div>  
        //     </div>
        //     <div class="htu">
        //         <div class="howtousetitle">
        //            <h3> How To Use</h3>
        //         </div>
        //         <div class="howtouse">
        //             <a href="#">
        //                 <img class="w-100" src="images/1.jpg" alt="" />
        //             </a>
        //             <a href="#">
        //                 <img class="w-100" src="images/2.jpg" alt="" />
        //             </a>
        //             <a href="#">
        //                 <img class="w-100" src="images/3.jpg" alt="" />
        //             </a>
        //         </div> 
        //     </div>  
        // </div>
        
        
    // </div>
  );
}

export default App;

