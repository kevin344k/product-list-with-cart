const {useState,useEffect,useRef}=React
function Card({ p,disminuir,aumentar,addToCart,cantidadEnCarrito,i }) {
const [clickCart,setClickCard]=useState(false)
const [contador,setCcontador]=useState(1)
const [visible,setVisible]=useState(false)
    const ref=useRef()



useEffect(()=>{
setCcontador(cantidadEnCarrito)

},[cantidadEnCarrito])

useEffect(()=>{
if (cantidadEnCarrito===0) {
   
    setClickCard(false)
}
},[cantidadEnCarrito])




const handlerClickCart=(nombre)=>{
 
    
    if (!clickCart ) {
        setClickCard(true)

    addToCart(p)
       
    }
}

const handlerBlur=()=>{
  
    if (contador==0) {
        setClickCard(false)
    }
    
}

const handlerIncrement=(nombre)=>{
 setCcontador(prev=>prev+1)
 aumentar(nombre)
}

const handlerDecrement=(nombre)=>{
    disminuir(nombre);
    

   setCcontador(prev=>(prev>0?prev-1:0))  
   if (contador===0) {
    setClickCard(false)
   }
   
}

   useEffect(()=>{
        const observer=new IntersectionObserver(
         ([entry])=>{
            if (entry.isIntersecting) {
                setVisible(true);
                            observer.unobserve(ref.current) //solo una vez
            }


         },{
            threshold:0.2
         }
        )

     if (ref.current)  observer.observe(ref.current);
       console.log(ref.current);
       
        return ()=>{
            if(ref.current)
                observer.unobserve(ref.current)
        }
     

    },[])



    return <div ref={ref} className= {`fadeInUp-card ${visible? "show":""}`} style={{
        transitionDelay: `${i*100}ms`
       
    }}>
        <div className=" w-full ">
            <div className="relative w-full h-full mb-6">
                <img className={ `${clickCart?"border-2 border-[var(--color-red)]":""} rounded-lg`}  src={p.image.mobile}></img>
              <div className="absolute -bottom-5 w-full flex justify-center items-center">
                  <button onClick={()=>handlerClickCart(p.name)} onBlur={handlerBlur
                  } className=" border border-neutral-400 rounded-full   active:scale-95 transition-scale duration-100 ease-in">
                    {
                        !clickCart?(
                           <div className="bg-white flex  items-center justify-center rounded-full  w-[130px] h-full px-4  py-2">
                             <img src="./assets/images/icon-add-to-cart.svg"></img>
                    <span className="text-xs font-bold">Add to Cart</span>
                           </div>
                        ):(
                           <div className="bg-[var(--color-red)] rounded-full flex w-[130px]  items-center justify-between rounded-full  h-full px-2   py-2  ">
                             <div className="border p-2 py-3 rounded-full border-neutral-200 active:bg-black/20" onClick={()=>handlerDecrement(p.name)}>
                                <img src="./assets/images/icon-decrement-quantity.svg"></img>
                            </div>
                            <p className="text-white ">{contador}</p>
                             <div className="border p-2 rounded-full border-neutral-200 active:bg-black/20" onClick={()=>handlerIncrement(p.name)}>
                                <img src="./assets/images/icon-increment-quantity.svg"></img>
                            </div>
                           </div>
                        )
                    }
                </button>
              </div>
            </div>
            <p className="text-[var(--color-rose-500)] text-xs">{p.category}</p>
            <p className="font-bold">{p.name}</p>
            <span className="text-[var(--color-red)] text-xs ">${(p.price).toFixed(2)}</span>

        </div>

    </div>
}