function OrderConfirmedModal({ isOpen, onClose, cartItems, total,onStartNewOrder }) {
    if (!isOpen) return null





    return <div className="absolute order-confirmed  z-20  bottom-0 left-0 w-full bg-white p-4 rounded-tl-xl rounded-tr-xl lg:max-w-[500px] lg:static lg:rounded-bl-xl lg:rounded-br-xl">
        <div>
            <img className="mb-4" src="./assets/images/icon-order-confirmed.svg"></img>
            <p className="font-bold text-4xl">Order <br className="lg:hidden"></br> Confirmed</p>
            <p className="text-sm text-[var(--color-rose-500)]">We hope you enjoy your food!</p>

            <div className="flex flex-col gap-8 py-6 px-4">
                {
                    cartItems.map((item,index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex gap-4">
                                <img className="w-10 h-10 rounded-md" src={item.image.thumbnail}></img>
                                <div >
                                    <p className=" text-xs">{item.name}</p>
                                    <div className="flex items-center justify-between w-[70px]">
                                        <p className="text-[var(--color-red)] text-xs font-bold">{item.cantidad}x</p>
                                        <p className="text-xs text-[var(--color-rose-500)]">@  ${item.price}</p>

                                    </div>
                                </div>
                            </div>
                            <p className=" p-1">
                                $ {item.price * item.cantidad}
                            </p>
                        </div>


                    ))}
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center py-7"><p className="text-sm text-[var(--color-rose-900)]">Order Total</p><span className="font-bold text-xl">${total.toFixed(2)}</span></div>

                <button onClick={onStartNewOrder} className="bg-[var(--color-red)] rounded-full w-[70%] m-auto text-white p-3  active:scale-95">Start New Order</button>
            </div>
        </div>
    </div>
}