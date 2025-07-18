function ModalDisclaimer({modalDisclaimer}) {
  





    return <div className=" order-confirmed  z-20  sm:w-[90%]  lg:max-w-[400px] bg-white p-4 rounded-xl ">
        <div className="flex flex-col">
            
            <p className="font-bold text-lg">DISCLAIMER</p>
            <p className="text-sm text-[var(--color-rose-500)]">THIS PAGE WAS MEDE AS A PERSONAL EDUCATIONAL PROJECT. This is NOT the official site of the company or brand identified on the page. The creator of this page is NOT afiliated with the company or brand in any way. This page is a personal project made in connection with an educational exercise.</p>
            <button onClick={()=>{modalDisclaimer(false)}} className="bg-[var(--color-red)] p-2 font-bold text-white my-3 max-w-[200px] rounded-full m-auto w-[200px] cursor-pointer active:scale-95">
    Aceptar
            </button>

       
        </div>
    </div>
}