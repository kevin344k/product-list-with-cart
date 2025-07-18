const {useState}=React
function Cart({ items,eliminarProd,showModal,setShowModal,onStartNewOrder }) {

const confirmOrder=()=>{
    setShowModal(true)
}

    console.log(items);

    const total = items.reduce((suma, p) => suma + p.price * p.cantidad, 0)




    

    return <div className="bg-white p-4 lg:min-w-[300px] lg:self-start">
        <p className="text-[var(--color-red)] font-bold">You Cart ({items.length})</p>
        <div className="flex flex-col gap-12 py-6">

            {
                items.length > 0 ? <>

                    {items.map((item) => (
                        <div className="flex items-center justify-between ">
                            <div >
                                <p className="font-bold text-sm">{item.name}</p>
                                <div className="flex items-center justify-between w-[100px]">
                                    <p className="text-[var(--color-red)] text-xs font-bold">{item.cantidad}x</p>
                                    <p className="text-xs">@ {item.price}</p>
                                    <p className=" text-[var(--color-rose-400)] text-xs">${item.price * item.cantidad}</p>
                                </div>
                            </div>
                            <button onClick={()=>eliminarProd(item.name)} className="rounded-full border-2 border-[var(--color-rose-400)]  p-1"><img src="./assets/images/icon-remove-item.svg"></img></button>
                        </div>


                    ))}
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-center"><p className="text-sm text-[var(--color-rose-900)]">Order Total</p><span className="font-bold text-md">${total}</span></div>
                        <div className="w-[90%] flex justify-center gap-2 items-center bg-[var(--color-rose-50)] p-2 rounded-md ">
                            <img src="./assets/images/icon-carbon-neutral.svg"></img> <p className="text-xs">This is a carbon-neutral delivery </p>
                        </div>
                        <button onClick={confirmOrder} className="bg-[var(--color-red)] rounded-full text-white p-3 font-bold active:scale-95">Confirm Order</button>
                    </div>
                </>

                    :
                    <div>
                        <img className="m-auto" src="./assets/images/illustration-empty-cart.svg"></img>
                        <p className="text-center text-xs font-bold text-[var(--color-rose-500)]">Your added items will appear here</p>
                    </div>


            }




        </div>

   

        <div className={`${showModal?" fade-in-top fixed inset-0 z-10 bg-black/60 backdrop-blur-xs transition-opacity ease-in-out duration-200 p-4 lg:flex lg:justify-center lg:items-center":"hidden"} `}>
             <OrderConfirmedModal isOpen={showModal} onClose={()=>{setShowModal(false)
             
             }} cartItems={items} total={total} onStartNewOrder={onStartNewOrder}></OrderConfirmedModal>
        </div>
    </div>
}