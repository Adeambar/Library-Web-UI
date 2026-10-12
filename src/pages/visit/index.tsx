import { Box, Button, MenuItem, Paper, TextField, Typography } from "@mui/material";
import { NavigationBar } from "../../components/navigation";
import { useState } from "react";
import { Footer } from "../../components/footer";

const VisitPage = () => {
    const [form, setForm] = useState({
        name: "",
        category: "",
        email: "",
        purpose: "",
        identity: ""
    });

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const payload = {
            ...form,
            visit_time: new Date().toISOString()
        };

        console.log("Submit visit:", payload);
        // TODO: kirim ke API
    };

    return (
        <div className="min-h-screen w-full bg-neutral-100">
            <NavigationBar />
            <div className="px-8 pt-[20vh] pb-8 w-full">
                <div className="w-full min-h-screen flex items-center justify-center px-4">
                    <div className="flex w-[70vw] flex-row items-stretch shadow-xl">
                        <div className="w-1/2 h-auto">
                            <img src="/images/visit-bg.jpg" className="w-full h-full object-cover" alt="visit-bg" />
                        </div>
                        <div className="p-10 w-1/2 bg-white flex flex-col items-center justify-center">
                            <p className="text-3xl text-visitor-highlight font-bold text-center">LIBRARY VISIT</p>
                            <p className="text-sm text-visitor-textsecondary mb-10 text-center">Silakan isi data berikut sebelum memasuki perpustakaan</p>
                            <div className="flex flex-col gap-3 w-full">
                                <TextField
                                    label="Nama Lengkap"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    fullWidth
                                    slotProps={{
                                        input: { sx: { borderRadius: 3 } }
                                    }}
                                />
                                <TextField
                                    label="E-mail"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    fullWidth
                                    slotProps={{
                                        input: { sx: { borderRadius: 3 } }
                                    }}
                                />
                                <TextField
                                    label="No. Identitas"
                                    name="identity"
                                    value={form.identity}
                                    onChange={handleChange}
                                    fullWidth
                                    slotProps={{
                                        input: { sx: { borderRadius: 3 } }
                                    }}
                                />
                                <TextField
                                    select
                                    label="Keperluan"
                                    name="purpose"
                                    value={form.purpose}
                                    onChange={handleChange}
                                    fullWidth
                                    slotProps={{
                                        input: { sx: { borderRadius: 3 } }
                                    }}
                                >
                                    <MenuItem value="Membaca">Membaca</MenuItem>
                                    <MenuItem value="Meminjam Buku">Meminjam Buku</MenuItem>
                                    <MenuItem value="Penelitian">Penelitian</MenuItem>
                                    <MenuItem value="Lainnya">Lainnya</MenuItem>
                                </TextField>
                                <Button
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    disableElevation
                                    sx={{
                                        borderRadius: 50,
                                        background: 'linear-gradient(135deg, #ff7a18, #ff9f43)',
                                        transition: 'all .25s',
                                        marginTop: 5,
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 6px 16px rgba(255,122,24,.35)'
                                        }
                                    }}
                                >
                                    Masuk Perpustakaan
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default VisitPage;