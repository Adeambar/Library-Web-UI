import * as React from 'react';
import { Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Icon, Stack } from '@mui/material';
import { isMobile } from 'react-device-detect';
import moment from 'moment';
import { useNavigate } from 'react-router';
import { AdminColors } from '../../utilities/styles';

const contents = [
    { id: 1, label: 'Dashboard', icon: 'dashboard_outlined', navigate: '/admin/dashboard' },
    { id: 2, label: 'Pengunjung', icon: 'person_search', navigate: '/admin/visitor' },
    { id: 3, label: 'Data Pinjaman', icon: 'assessment_outlined', navigate: '#' },
    { id: 4, label: 'Daftar Buku', icon: 'collections_bookmark_outlined', navigate: '#' },
    { id: 5, label: 'Anggota', icon: 'group_outlined', navigate: '#' },
    { id: 6, label: 'Logout', icon: 'logout_outlined', navigate: '#' },
]

const SideContent = (props: { id: number; navigate: any; onLogout: any }) => (
    <div>
        <div className="flex items-center gap-3 p-5">
            {/* <img src="/images/logo.png" className="h-8 w-auto" alt="Logo" /> */}
            <span className="text-lg font-semibold text-white">
                Admin
            </span>
        </div>
        <Divider />
        <List sx={{ paddingX: 1 }}>
            {
                contents.map((item, index) => (
                    <ListItem
                        key={index}
                        disablePadding
                        sx={{
                            backgroundColor: props.id === item.id ? AdminColors.Primary : 'transparent',
                            borderRadius: 2,
                            marginBottom: 1
                        }}
                    >
                        <ListItemButton onClick={() => props.navigate(item.navigate)}>
                            <ListItemIcon>
                                <Icon sx={{ color: '#fff' }} baseClassName="material-icons-outlined">{item.icon}</Icon>
                            </ListItemIcon>
                            <ListItemText
                                sx={{ color: '#fff', marginY: 0 }}
                                primary={item.label}
                                slotProps={{
                                    primary: {
                                        fontSize: 14
                                    }
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>
    </div >
);

const drawerWidth = 240;
export const SideBar = (props: { window?: any; id: number }) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setClosing] = React.useState(false);
    const [isLogout, setLogout] = React.useState(false);
    const navigate = useNavigate()

    const handleDrawerClose = () => {
        setClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const onLogout = React.useCallback(() => {
        setLogout(true)
    }, [isLogout])

    const container = props.window !== undefined ? () => props.window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: AdminColors.TextPrimary },
                    }}
                >
                    <SideContent id={props.id} navigate={navigate} onLogout={onLogout} />
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: AdminColors.TextPrimary },
                    }}
                    open
                >
                    <SideContent id={props.id} navigate={navigate} onLogout={onLogout} />
                </Drawer>
            </Box>
        </Box>
    );
}
