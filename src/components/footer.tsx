import { Icon } from "@mui/material"

export const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-neutral-300 mt-24">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <h3 className="text-white text-lg font-semibold mb-3">
                        Perpustakaan Online
                    </h3>
                    <p className="text-sm leading-relaxed">
                        Sistem informasi perpustakaan untuk mendukung layanan literasi,
                        pencarian koleksi, dan pencatatan kunjungan secara digital.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-medium mb-3">Menu</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-white">Beranda</a></li>
                        <li><a href="/visit" className="hover:text-white">Kunjungan</a></li>
                        <li><a href="/guide" className="hover:text-white">Kontak</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-medium mb-3">Informasi</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <div className="flex flex-row items-center gap-3">
                                <Icon color="inherit" fontSize="small">location_pin</Icon>
                                <p>Jl. Pendidikan No. 12, Bekasi </p>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row items-center gap-3">
                                <Icon color="inherit" fontSize="small">schedule</Icon>
                                <p>Senin - Jumat, 08.00 - 16.00 </p>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row items-center gap-3">
                                <Icon color="inherit" fontSize="small">email</Icon>
                                <p>perpus@domain.go.id </p>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row items-center gap-3">
                                <Icon color="inherit" fontSize="small">phone</Icon>
                                <p>(021) 1234-5678 </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-400">
                © {new Date().getFullYear()} Sistem Perpustakaan · All rights reserved
            </div>
        </footer>
    )
}