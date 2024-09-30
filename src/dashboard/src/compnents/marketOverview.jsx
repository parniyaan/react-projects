function MarketOverview () {


    const data=[
        {
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png",
            name:"BTC",
            value:"$57,499.00",
            des:"- 0.24%",
            pos:"-"
        },
        {
            img:"https://cdn.worldvectorlogo.com/logos/ethereum-eth.svg",
            name:"ETH",
            value:"2,451.50",
            des:"- 0.24%",
            pos:"-"

        },
        {
            img:"https://cdn.prod.website-files.com/5e73a1e3ba24f2cd5dd2232a/65847d5cdc48ee90fbb44d28_620b31921bac94c44de5969d_bnb.webp",
            name:"BNB",
            value:"$489.10",
            des:"+ 0.24%",
            pos:"+"
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rlhx2RTdIxFoL-kKH1ETAp9yQl_YG3vw9A&s",
            name:"XRP",
            value:"$0.6161",
            des:"+ 19.33%",
            pos:"+"
        },
    ]

    return(
        <div className="w-[33%] h-[65%] bg-[#141318] p-[20px] rounded-[20px]">
            <h1 className="text-white text-[26px] font-[500] mb-[80px]">Markets Overview</h1>
            <ul className="ml-[10px]">
                {data.map(currency => (
                    <li className="flex items-center justify-between mb-[20px] rounded-full mx-auto border border-[#93949A] p-[10px]">
                        <div className="flex items-center">
                            <img src={currency.img} alt={currency.name}
                                 className="w-[35px] h-[35px] rounded-full mr-[10px]"/>
                            <h3 className="text-[#93949A] mr-[30px]">{currency.name}</h3>
                        </div>
                        <h3 className="text-[white] text-[18px] font-bold mr-[50px]">{currency.value}</h3>
                        <h2 className={`${
                            currency.pos === '+' ? 'text-green-500' :
                                currency.pos === '-' ? 'text-red-500' :
                                    'text-gray-500'}`}>{currency.des}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MarketOverview