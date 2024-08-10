"use client"
import { routes } from "@/routes";
import { Button, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemContent, Modal, ModalClose, Sheet, Stack, useTheme } from "@mui/joy";
import NavLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bars2Icon } from "@heroicons/react/16/solid";
import { useState } from "react";
import Image from "next/image";

function NavMenu() {
    const pathname = usePathname()
    const theme = useTheme()
    const [open, setOpen] = useState(false)
    return (
        <>
            <IconButton
                sx={{ position: 'fixed', top: '1rem', left: '1rem', zIndex: theme.zIndex.modal - 1, display: { sm: 'none' } }}
                onClick={() => setOpen(o => !o)}
                color='neutral'
            >
                <Bars2Icon height={18} />
            </IconButton>
            <Drawer slotProps={{ content: { sx: { bgcolor: 'transparent', boxShadow: 'none', p: 1 } } }} open={open} anchor='top' onClose={() => setOpen(o => !o)}>
                <Sheet sx={{ border: 1, borderRadius: 'sm', borderColor: theme.palette.divider, boxShadow: theme.shadow['sm'] }}>
                    <List>
                        <ListItem sx={{ marginBottom: 2}}>
                            <ListItemContent sx={{ justifyContent: 'space-between', alignItems: 'center', display: "flex" }}>
                                <Stack>
                                    <NavLink href={'/'} onClick={() => setOpen(o => !o)}>
                                    <Image src="/logo.ico" width={30} height={30} alt="logo" />                                    </NavLink>
                                    <ModalClose />
                                </Stack>
                            </ListItemContent>
                        </ListItem>
                        {routes.map((item,index) => {
                            const NavItemLink = item.type === 'route' ? NavLink : Link;
                            return (
                                <ListItem key={index}>
                                    <ListItemButton
                                        onClick={() => setOpen(o => !o)}
                                        selected={pathname.includes(item.route)}
                                    >
                                        <NavItemLink style={{ textDecoration: 'none', width: '100%' }} target={item.type === 'link' ? '_blank' : undefined} href={item.route}>
                                            <ListItemContent
                                                sx={(theme) => ({
                                                    textDecoration: 'none',
                                                    ...theme.typography['body-lg'],
                                                    fontFamily: "Open Sans",
                                                    lineHeight: 3
                                                })}
                                            >
                                                {item.title}
                                            </ListItemContent>
                                        </NavItemLink>
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Sheet>

            </Drawer>
        </>
    )
}

export default NavMenu;