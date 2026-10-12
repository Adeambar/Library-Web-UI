import { Breadcrumbs, Button, Icon } from "@mui/material";
import { SideBar } from "../../../components/admin/sidebar"
import { AdminColors } from "../../../utilities/styles";
import { RiseLoader } from "react-spinners";
import { useState } from "react";
import moment from "moment";

const Fields = ['NO', 'NAMA PENGUNJUNG', 'E-MAIL', 'NOMOR IDENTITAS', 'KEPERLUAN']

const VisitorPage = () => {
    const [isLoading, setLoading] = useState(false)
    const [Outlet, setOutlet] = useState('')
    const [Period, setPeriod] = useState('')
    const [OrderData, setOrderData] = useState<any[]>([])
    const [pagination, setPagination] = useState({ total: 0, page: 0, limit: 0, totalPages: 0 })

    return (
        <main className="w-full min-h-screen bg-admin-background">
            <SideBar id={2} />
            <div className="flex justify-end w-full">
                <div className="w-[calc(100%-240px)] max-sm:w-full">
                    <div className="w-full py-5 px-10 max-sm:p-5 flex flex-col gap-8">
                        <Breadcrumbs>
                            <p className='text-sm font-semibold'>Admin</p>
                            <p className='text-sm font-semibold'>Data Pengunjung</p>
                            {/* <div className="flex items-center gap-1">
                                <Icon fontSize="small" color="inherit">person_search</Icon>
                            </div> */}
                        </Breadcrumbs>
                        {
                            isLoading ?
                                <div className="py-15 w-full flex items-center justify-center rounded-2xl bg-white shadow-md">
                                    <RiseLoader color={AdminColors.Secondary} loading={true} size={30} />
                                </div>
                                :
                                <div className="relative overflow-x-auto rounded-2xl shadow-md" style={{ backgroundColor: '#fff' }}>
                                    <table className="w-full text-sm text-left min-h-125" style={{ color: '#fff' }}>
                                        <thead className="text-sm uppercase bg-[#F8FAFC] border-gray-200 border">
                                            <tr>
                                                {
                                                    Fields.map((item) => (
                                                        <th scope="col" className="px-6 py-5 whitespace-nowrap text-gray-500 font-medium" key={item}>{item}</th>
                                                    ))
                                                }
                                            </tr>
                                        </thead>
                                        {
                                            OrderData.length == 0 ?
                                                <tbody>
                                                    {
                                                        [...Array(10).keys()].map((item: any, index: number) => (
                                                            <tr key={index} className="border-gray-100 border" style={{ backgroundColor: '#fff', color: '#000' }}>
                                                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                                                <td className="px-6 py-4 whitespace-nowrap capitalize">Luke Rodgers</td>
                                                                <td className="px-6 py-4 whitespace-nowrap">keide@wuhad.eg</td>
                                                                <td className="px-6 py-4 whitespace-nowrap">c2b544a2da305afa8561</td>
                                                                <td className="px-6 py-4 whitespace-nowrap">Penelitian</td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                                :
                                                <tbody>
                                                    <tr style={{ backgroundColor: '#fff' }}>
                                                        <td colSpan={Fields.length} className="py-5 text-center text-xl text-gray-500">Data tidak ditemukan</td>
                                                    </tr>
                                                </tbody>
                                        }
                                        <tfoot className='bg-[#F8FAFC]'>
                                            <tr>
                                                <td colSpan={Fields.length} className="py-4 px-6 text-sm text-black">Menampilkan <b>{OrderData.length}</b> dari <b>{pagination.total}</b> data</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default VisitorPage;