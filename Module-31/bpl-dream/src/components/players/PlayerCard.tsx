import { FaUser } from "react-icons/fa";
import type { Iplayer } from "../../Type/player";
import { useState, type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";


interface IPlayerCardProps {
    player: Iplayer;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: Iplayer[];
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const PlayerCard = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }: IPlayerCardProps) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleSelectPlayer = () => {
        const newCoinPrice = coin - player.price;

        if (newCoinPrice >= 0) {
            setIsSelected(true);
            setCoin(newCoinPrice);
            setSelectedPlayers([...selectedPlayers, player]);
            toast.success(`${player.playerName} is purchased successfully`, {
                position: "top-center",
                autoClose: 5000,
                theme: "light",
                transition: Bounce,
            });
        } else {
            toast.error("Coin is not enough to purchase");
        }
    };



    return (
        <div className="card bg-base-100 border border-base-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">

            {/* Player Image */}
            <figure className="h-64 bg-base-200 overflow-hidden">
                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    className="w-full h-full  hover:scale-105 transition-transform duration-500"
                />
            </figure>

            {/* Card Body */}
            <div className="card-body p-5 space-y-4">

                {/* Player Name */}
                <h2 className="card-title text-xl font-bold text-gray-800">
                    <FaUser className="text-primary text-lg" />
                    {player.playerName}
                </h2>

                {/* Origin & Type */}
                <div className="flex justify-between items-center gap-4">
                    <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold">
                            Origin
                        </p>
                        <p className="text-gray-700 font-medium">
                            {player.origin}
                        </p>
                    </div>

                    <span className="badge badge-primary badge-outline px-3 py-3">
                        {player.playerType}
                    </span>
                </div>

                <div className="divider my-1"></div>

                {/* Rating */}
                <h2 className="font-bold text-gray-700 text-lg">
                    Rating
                </h2>

                {/* Batting & Bowling */}
                <div className="flex justify-between items-center gap-4">

                    <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold">
                            Batting
                        </p>

                        <p className="text-gray-700 font-medium">
                            {player.battingStyle}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold">
                            Bowling
                        </p>

                        <p className="text-gray-700 font-medium">
                            {player.bowlingStyle}
                        </p>
                    </div>

                </div>

                {/* Price & Add Button */}
                <div className="flex justify-between items-center gap-4 mt-3 p-3 bg-base-200 rounded-xl">

                    <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold">
                            Price
                        </p>

                        <h2 className="text-xl font-bold text-primary">
                            ${player.price}
                        </h2>
                    </div>

                    <button onClick={() => handleSelectPlayer()} className={`btn btn-primary rounded-xl px-5 hover:scale-105 transition-transform duration-200 shadow-sm`} disabled={isSelected === true ? true : false}>
                        {isSelected === true ? "Selected" : "ADD TEAM"}
                    </button>

                </div>

            </div>
        </div>
    );
};
export default PlayerCard;