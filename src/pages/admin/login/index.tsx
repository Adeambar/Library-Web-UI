import {
    TextField,
    InputAdornment,
    Icon,
    Button,
    IconButton
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { HTTPGetProfile, HTTPLogin } from "../../servers/users";
import { toast } from "react-toastify";

const LoginPage = () => {
    const navigate: any = useNavigate()
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    // const [isRemember, setRemember] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [isShowPassword, setShowPassword] = useState(false)

    const onLogin = async () => {
        setLoading(true)
        try {
            // const result = await HTTPLogin({
            //     username: Email,
            //     password: Password
            // })
            // if (result.data.tokenku) {
            //     localStorage.setItem('token', result.data.tokenku)
            //     const profile = await HTTPGetProfile({ token: result.data.tokenku })
            //     localStorage.setItem('profile', JSON.stringify(profile.data.jwt))
            //     localStorage.setItem('status', 'Login')
            //     navigate('/')
            // }
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
            toast.error('Failed to Login')
        }
        setLoading(false)
    }

    return (
        <main className="w-full h-screen">
            <img src="/images/login-bg.jpg" className="w-screen h-screen object-cover" alt="login-bg" />
            <div className="flex items-center justify-center absolute top-0 bottom-0 left-0 right-0">
                <div
                    className="w-[30vw] shadow-xl rounded-4xl px-8 py-10"
                    // style={{ background: 'linear-gradient(180deg, #14B8A6 0%, #ffffff 53%, #ffffff 100%)' }}
                    style={{ backgroundColor: '#fff' }}
                >
                    <div className="text-center mb-6 flex items-center justify-center flex-col">
                        <div className="bg-admin-primary rounded-2xl flex items-center justify-center p-3 shadow-lg mb-5">
                            <Icon fontSize="large" sx={{ color: '#fff' }}>login</Icon>
                        </div>
                        <p className="text-2xl font-semibold text-black">
                            Admin Perpustakaan
                        </p>
                        <p className="text-base text-gray-500 mt-1">
                            Silahkan masuk dengan akun yang terdaftar sebagai admin
                        </p>
                    </div>
                    <div className="mb-4">
                        <TextField
                            // value={ClientID}
                            // onChange={(e) => setClientID(e.target.value)}
                            placeholder="Email"
                            size="small"
                            fullWidth
                            slotProps={{
                                input: {
                                    sx: { borderRadius: 3 },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Icon color="action">badge</Icon>
                                        </InputAdornment>
                                    ),
                                }
                            }}
                        />
                    </div>
                    <div className="mb-8">
                        <TextField
                            // value={ClientSecret}
                            // onChange={(e) => setClientSecret(e.target.value)}
                            placeholder="Kata Sandi"
                            size="small"
                            type={isShowPassword ? "text" : "password"}
                            fullWidth
                            slotProps={{
                                input: {
                                    sx: { borderRadius: 3 },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Icon color="action">key</Icon>
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowPassword(!isShowPassword)}>
                                                <Icon>
                                                    {isShowPassword ? "visibility_off" : "visibility"}
                                                </Icon>
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }
                            }}
                        />
                    </div>
                    <Button
                        fullWidth
                        variant="contained"
                        size="large"
                        disableElevation
                        onClick={() => navigate('/admin/dashboard')}
                        sx={{
                            borderRadius: 3,
                            textTransform: "none",
                            fontWeight: 600,
                            color: '#fff',
                            backgroundColor: '#000'
                        }}
                    // disabled={!ClientID || !ClientSecret || !POSType}
                    >
                        Masuk
                    </Button>
                </div>
            </div>
        </main>
    )
}

export default LoginPage;