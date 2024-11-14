function Hero(){
    return(
        <main className="flex flex-col gap-5 justify-around">
            <div className="flex gap-5 justify-around">
                <div className="bg-purple-900 h-80 w-1/2"></div>
                <div className="bg-yellow-900 h-80 w-1/2"></div>
            </div>
        <div className="flex gap-5 px-4">
            <div className="bg-blue-700 h-60 w-1/3 flex-1"></div>
            <div className="bg-green-900 h-60 w-1/3 flex-1 "></div>
            <div className="bg-pink-900 h-60 w-1/3 flex-1 "></div>
        </div>  
        <div className="flex gap-5 px-5">
            <div className="bg-blue-900 h-60 w-1/3 flex-1"></div>
            <div className="bg-green-900 h-60 w-1/3 flex-1 "></div>


        </div>  

         
        </main>
    

    )

}
export default Hero