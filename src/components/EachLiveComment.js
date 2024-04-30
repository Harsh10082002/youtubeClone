const EachLiveComment=({data})=>{
    return<>
        <div className="flex items-center my-2">
            <img className="w-10 h-10" src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"/>
            <div className="">
                <span className="font-semibold text-lg px-2"> @{data.name + " " + Math.round(Math.random(2) *10) } - </span>
                <span className="">{data.message}</span>
            </div>
        </div>
    </>
}
export default EachLiveComment;