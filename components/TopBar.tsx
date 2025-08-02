export default function TopBar() {
    return (
        <div className="bg-white px-2 md:px-5 py-1 rounded-t md:rounded-b">
            <div className="flex justify-between items-end">
                <img src="./logo.png" alt="Logo de l'entreprise Gratias Technology" className="max-h-8 md:max-h-16 w-auto" />
                <div className="flex justify-between py-0 md:py-2">
                    <button className="text-[#1DAEFF] cursor-pointer text-sm md:text-base border border-[#1DAEFF] rounded md:rounded-xl px-2 md:px-5 py-1 md:py-2 hover:bg-[#1DAEFF] hover:text-white transition">
                        Commencer maintenant
                    </button>
                </div>
            </div>
        </div>
    );
}