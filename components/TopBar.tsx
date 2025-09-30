export default function TopBar() {
    return (
        <div className="dark:bg-white/10 px-2 md:px-5 py-1 rounded-t md:rounded-xl bg-white">
            <div className="flex justify-between items-end">
                <img src="/logo.png" alt="Logo de l'entreprise Gratias Technology" className="max-h-8 md:max-h-16 w-auto dark:hidden" />
                <img src="./logo-dark.png" alt="Logo de l'entreprise Gratias Technology" className="max-h-8 md:max-h-16 w-auto hidden dark:block" />
                <div className="flex justify-between py-0 md:py-2">
                    
                </div>
            </div>
        </div>
    );
}