const { useState, useEffect } = React


function LoadingBar({ duration }) {

    const [progress, setProgress] = useState(0)


    
    useEffect(() => {
        const stepTime = 50
        const steps = duration / stepTime
        const increment = 100 / steps
        const interval = setInterval(() => {
            setProgress(prev => {
                const next = prev + increment
                if (next >= 100) {
                    clearInterval(interval)
                    return 100
                }
                return next
            })
        }, stepTime)
        return () => clearInterval(interval)
    }, [duration])



    return <div className="w-full h-screen flex flex-col justify-center bg-gradient-to-t from-[var(--color-rose-100)] to-[var(--color-rose-50)] items-center ">
        <p className="animate-pulse">Loading ...</p>
        <div className="w-1/2 lg:w-[300px] md:w-[200px] h-3 bg-gray-300 rounded-full overflow-hidden">

    <div className="h-full bg-[var(--color-red)] rounded-full transition-all duration-75" style={{width:`${progress}%`}}>

    </div>
        </div>
    </div>
}