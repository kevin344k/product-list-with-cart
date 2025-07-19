const { useEffect, useState } = React
function App() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [carr, setCarr] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [modalDisclaimerShow,setModalDisclaimerShow]=useState(true)








    useEffect(() => {
   


         fetch("./data.json")
            .then(res => {
                if (!res.ok) { throw new Error("Error al cargar los datos") }
                return res.json()
            })
            .then(data => {
                setProductos(data)

             

            })
            .catch(error => {
                console.error("Error:", error)
                setLoading(false)
            }
            )


    },[modalDisclaimerShow])



    const disminuir = (nombre) => {
        console.log("disminuir");
        setCarr(prev => {
            const item = prev.find(p => p.name === nombre)
            if (!item) return prev
            if (item.cantidad === 1) {
                return prev.filter(p => p.name !== nombre)

            }

            return prev.map(p => p.name === nombre ? { ...p, cantidad: p.cantidad - 1 } : p)


        })

    }

    const aumentar = (nombre) => {
        console.log("aumentar");
        setCarr(prev => {
            const existe = prev.find(p => p.name === nombre)
            if (existe) {
                return prev.map(p => p.name === nombre ? { ...p, cantidad: p.cantidad + 1 } : p)
            }
        })

    }


    const addToCart = (p) => {
        console.log(p);

        setCarr(
            prev => {
                const existe = prev.find(p => {
                    p.name === p.name
                })
                if (existe) {
                    return prev.map(p => p.name === p.name ? { ...p, cantidad: p.cantidad + 1 } : p)
                } else {
                    return [...prev, { ...p, cantidad: 1 }]
                }
            }
        )

    }

    const eliminarProd = (nombre) => {
        setCarr(prev => prev.filter(p => p.name !== nombre))

    }

    console.log(carr);

    const resetApp = () => {
        setCarr([])
        setShowModal(false)

    }


    const handlerModalDisclaimer=()=>{
        setModalDisclaimerShow(false)
          const timer= setTimeout(() => {
                    setLoading(false)
                }, 3000)

                return ()=>clearInterval(timer)
    }

 

    return <> {!modalDisclaimerShow ? loading?<LoadingBar duration={3000}></LoadingBar> : <div className="p-4 ">
        <p className="font-bold text-2xl mb-4">Desserts</p>
        <div className="flex flex-col gap-15 lg:max-w-[1200px] lg:flex-row  lg:justify-center lg:items-center">

            <div className=" grid  grid-cols-1  gap-15 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2">

                {(
                    productos.map((p, index) => {
                        const item = carr.find(c => c.name === p.name)
                        const cantidad = item ? item.cantidad : 0

                        return <Card key={index} p={p} i={index} addToCart={addToCart} disminuir={disminuir} aumentar={aumentar} cantidadEnCarrito={cantidad}></Card>
                    }))}


            </div>
            <Cart items={carr} eliminarProd={eliminarProd} showModal={showModal} onStartNewOrder={resetApp} setShowModal={setShowModal}></Cart>
        </div>

    </div>:""
    }

{
   
        <div className={`${modalDisclaimerShow?" fade-in-top fixed inset-0 z-10 bg-black/60 backdrop-blur-xs transition-opacity ease-in-out duration-200 p-4 flex justify-center items-center":"fade-in-top hidden"} `}>
         

         <ModalDisclaimer modalDisclaimer={handlerModalDisclaimer}></ModalDisclaimer>

        </div>
}

    </>

}