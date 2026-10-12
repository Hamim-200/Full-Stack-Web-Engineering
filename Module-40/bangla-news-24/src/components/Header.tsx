import Image from "next/image";
import NavLinks from "./NavLinks";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2 sm:px-5">

                {/* Logo and Date */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo.webp"
                        width={36}
                        height={36}
                        alt="বাংলা নিউজ ২৪ লোগো"
                        className="h-9 w-9 object-contain"
                    />

                    <div>
                        <h2 className="text-base font-bold text-gray-900 sm:text-lg">
                            বাংলা নিউজ <span className="text-red-600">২৪</span>
                        </h2>

                        <p className="text-[10px] text-gray-500 sm:text-xs">
                            {date}
                        </p>
                    </div>
                </div>

                {/* Authentication Buttons */}
                <div className="flex items-center gap-1.5">
                    <button className="rounded-md px-2.5 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-100 sm:px-3 sm:text-sm">
                        সাইন ইন
                    </button>

                    <button className="rounded-md bg-red-600 px-2.5 py-1.5 text-xs font-medium text-white transition hover:bg-red-700 sm:px-3 sm:text-sm">
                        সাইন আপ
                    </button>
                </div>
            </nav>

            <NavLinks />
        </header>
    );
};

export default Header;

