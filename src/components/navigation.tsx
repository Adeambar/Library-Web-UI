import { Button, Icon } from "@mui/material"

const Menus = [
    {
        label: 'Beranda',
        navigate: '/'
    },
    {
        label: 'Kunjungan',
        navigate: '/visit'
    },
]

export const NavigationBar = () => {
    return (
        <header className="fixed top-0 inset-x-0 z-30 backdrop-blur bg-white/90 border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-8 h-14 flex items-center justify-between">
                <a href="/" className="flex items-center gap-3">
                    <img src="/images/logo.png" className="h-8 w-auto" alt="Logo" />
                    <span className="text-lg font-semibold text-neutral-900">
                        Perpustakaan Online
                    </span>
                </a>
                <div className="hidden md:flex items-center gap-6 text-sm">
                    <Button
                        variant="contained"
                        size="medium"
                        disableElevation
                        onClick={() => window.open('/admin/login', '_blank', 'noopener noreferrer')}
                        endIcon={<Icon sx={{ color: '#fff' }} fontSize='small'>launch</Icon>}
                        sx={{
                            borderRadius: 50,
                            background: '#171717',
                            transition: 'all .25s',
                            paddingX: 3,
                            '&:hover': {
                                background: '#262626',
                            }
                        }}
                    >
                        Login Admin
                    </Button>
                </div>
            </div>
            <div className="hidden md:block">
                <nav className="max-w-7xl mx-auto px-8">
                    <ul className="flex items-center gap-8 h-12 text-sm font-medium text-neutral-700">
                        {Menus.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.navigate}
                                    className="relative py-2 hover:text-neutral-900 transition
                               after:absolute after:left-0 after:-bottom-1
                               after:h-0.5 after:w-0 after:bg-neutral-900
                               hover:after:w-full after:transition-all"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="md:hidden border-t border-neutral-200">
                <nav className="px-8 py-4 space-y-3 text-sm font-medium text-neutral-700">
                    {
                        Menus.map((item, index) => (
                            <a
                                key={index}
                                href={item.navigate}
                                className="block px-3 py-2 rounded-lg hover:bg-neutral-100"
                            >
                                {item.label}
                            </a>
                        ))
                    }
                    <a
                        href="/admin/login"
                        className="block text-center px-8 py-2 rounded-full bg-neutral-900 text-white"
                    >
                        Login
                    </a>
                </nav>
            </div>
        </header>
    )
}