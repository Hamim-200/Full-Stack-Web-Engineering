import Logo from '../assets/logo.png';
import { TbCoinTakaFilled } from "react-icons/tb";


const Navbar = ({ coin }: { coin: number }) => {
    return (
        <nav className="  bg-red-100">
            <div className=" container mx-auto flex justify-between items-center">
                <img src={Logo} alt="" />

                <ul className="flex gap-4 items-center">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Players</li>
                    <li>Schedule</li>
                </ul>


                <h2 className="flex items-center gap-2 font-bold text-3xl text-yellow-500">
                    <TbCoinTakaFilled className="text-yellow-500 drop-shadow-md" />
                    <span>{coin}</span>
                </h2>
            </div>
        </nav>
    );
};

export default Navbar;