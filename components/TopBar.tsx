export default function TopBar() {
    return (
        <div className="flex justify-between">
            <img src="./logo.png" alt="Logo de l'entreprise Gratias Technology" className="max-h-16 w-auto" />
            <div className="flex justify-between py-2">
                <button className="text-[#1DAEFF] cursor-pointer border border-[#1DAEFF] rounded-xl px-5 py-2 hover:bg-[#1DAEFF] hover:text-white transition">
                    Commencer maintenant
                </button>
            </div>
        </div>
    );
}