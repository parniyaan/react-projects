import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PaymentIcon from '@mui/icons-material/Payment';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';

function Sidebar() {
    return (
        <div className="bg-[#141318] w-[15%] px-[20px] pt-[30px] h-[90%] rounded-[20px] ">
            <ul className="text-white w-[200px] mb-[180px]">
                <li className="flex hover:bg-[#0E0D12]  hover:text-white text-[#93949A] p-5 mr-0 rounded-[30px] cursor-pointer">
                    <HomeIcon />
                    <span className="ml-2">Dashboard</span>
                </li>
                <li className="flex hover:bg-[#0E0D12] hover:text-white text-[#93949A] p-5 mr-0 rounded-[30px] cursor-pointer">
                    <ShoppingBasketIcon />
                    <span className="ml-2">Markets</span>
                </li>
                <li className="flex hover:bg-[#0E0D12] hover:text-white text-[#93949A] p-5 mr-0 rounded-[30px] cursor-pointer">
                    <ReceiptLongIcon />
                    <span className="ml-2">Transactions</span>
                </li>
                <li className="flex hover:bg-[#0E0D12] hover:text-white text-[#93949A] p-5 mr-0 rounded-[30px] cursor-pointer">
                    <PaymentIcon />
                    <span className="ml-2">Payment</span>
                </li>
                <li className="flex hover:bg-[#0E0D12] hover:text-white text-[#93949A] p-5 mr-0 rounded-[30px] cursor-pointer">
                    <InfoIcon />
                    <span className="ml-2">Information</span>
                </li>
            </ul>
            <div className="flex flex-col items-center bg-[#1B1A1F] rounded-[20px] m-auto py-[20px] mb-[20px]">
                <h2 className="text-white text-lg font-bold">Try The Paid Version</h2>
                <p className="text-gray-400 w-[200px] text-center mt-[20px] mb-[30px] ">Try the paid version of our trading system and boost your investment returns.</p>
                <Button sx={{ backgroundColor: '#EB6B44', color: "white" ,width:"150px",borderRadius:"30px"}} >Buy</Button>
            </div>
        </div>
    );
}

export default Sidebar;
