import { Breadcrumbs, Button, Grid, Icon } from "@mui/material";
import { SideBar } from "../../../components/admin/sidebar";
import { BarChart } from '@mui/x-charts/BarChart';
import moment from "moment";
import { AdminColors } from "../../../utilities/styles";

const headers = [
    {
        id: 1,
        type: 'Pengunjung',
        qty: 59,
        icon: 'person_search',
        color: 'bg-blue-400'
    },
    {
        id: 2,
        type: 'Pinjaman',
        qty: 12,
        icon: 'assessment_outlined',
        color: 'bg-red-400'
    },
    {
        id: 3,
        type: 'Buku',
        qty: 120,
        icon: 'collections_bookmark_outlined',
        color: 'bg-green-400'
    },
    {
        id: 4,
        type: 'Anggota',
        qty: 8,
        icon: 'person_search',
        color: 'bg-yellow-400'
    },
]

const dataset = [
    { value: 23, month: 'Jan' },
    { value: 30, month: 'Feb' },
    { value: 35, month: 'Mar' },
    { value: 29, month: 'Apr' },
    { value: 15, month: 'May' },
    { value: 55, month: 'Jun' },
    { value: 36, month: 'Jul' },
    { value: 33, month: 'Aug' },
    { value: 48, month: 'Sep' },
    { value: 21, month: 'Oct' },
    { value: 32, month: 'Nov' },
    { value: 51, month: 'Des' },
]

const DashboardPage = () => {
    return (
        <main className="w-full min-h-screen bg-admin-background">
            <SideBar id={1} />
            <div className="flex justify-end w-full">
                <div className="w-[calc(100%-240px)] max-sm:w-full">
                    <div className="w-full py-5 px-10 max-sm:p-5 flex flex-col gap-8">
                        <Breadcrumbs>
                            <p className='text-lg font-semibold'>Admin</p>
                            <p className='text-lg font-semibold'>Dashboard</p>
                        </Breadcrumbs>
                        <Grid container spacing={3}>
                            {
                                headers.map((item) => (
                                    <Grid size={{ md: 3, sm: 6, xs: 6 }} key={item.id}>
                                        <div className={`w-full rounded-lg pt-5 pb-10 px-3 flex items-start justify-between gap-3 ${item.color}`}>
                                            <div className="text-white">
                                                <p className="text-3xl font-bold">{item.qty}</p>
                                                <p className="text-sm">{item.type}</p>
                                            </div>
                                            <Icon sx={{ fontSize: 70, color: '#00000030' }}>{item.icon}</Icon>
                                        </div>
                                    </Grid>
                                ))
                            }
                        </Grid>
                        <div className="bg-white w-full rounded-xl p-5">
                            <p className="text-black text-lg font-semibold mb-10">Riwayat Pengunjung {moment().format('YYYY')}</p>
                            <BarChart
                                dataset={dataset}
                                xAxis={[{ dataKey: 'month', colorMap: { type: 'piecewise', thresholds: [1], colors: [AdminColors.Accent] } }]}
                                series={[{ dataKey: 'value' }]}
                                yAxis={[{ label: 'Jumlah Pengunjung' }]}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DashboardPage;