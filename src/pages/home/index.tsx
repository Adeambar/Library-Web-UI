import { Button, Grid, Icon, InputAdornment, Pagination, Rating, TextField } from '@mui/material'
import { BookModel } from '../../components/home/bookModel';
import { NavigationBar } from '../../components/navigation';
import { Footer } from '../../components/footer';
import { BookData } from './data';
import type { IBook } from '../../interfaces/book.type';
import { SideContent } from '../../components/home/sideContent';
import { useState } from 'react';
import { BookInfo } from '../../components/home/bookInfo';

const HomePage = () => {
    const [isDetail, setDetail] = useState(false)
    const [SelectedItem, setSelectedItem] = useState<any>({
        id: "",
        author: "",
        country: "",
        image: "",
        language: "",
        synopsis: "",
        pages: "",
        title: "",
        year: "",
        rating: "",
    })

    const onDetail = (state: boolean, data?: IBook) => {
        setDetail(state)
        setSelectedItem(state ? data : {
            id: "",
            author: "",
            country: "",
            image: "",
            language: "",
            synopsis: "",
            pages: "",
            title: "",
            year: "",
            rating: "",
        })
    }

    return (
        <div className="min-h-screen w-full bg-neutral-100">
            <NavigationBar />
            <div className="px-8 pt-[20vh] pb-8 w-full flex flex-col gap-10">
                <div>
                    <p className="text-visitor-textprimary text-xl font-bold">Buku Terbaru</p>
                    <div className='w-16 bg-visitor-highlight h-1.5 rounded-full'></div>
                </div>
                <div className='w-full flex flex-row gap-8 items-start justify-between'>
                    <div className='w-[70%]'>
                        <Grid container rowSpacing={5} columnSpacing={3}>
                            {
                                BookData.map((item: IBook) => (
                                    <Grid size={{ md: 3, sm: 6, xs: 6 }} key={item.id}>
                                        <div className="w-full group flex flex-col items-center basis-full">
                                            <BookModel data={item} />
                                            <p className='text-center text-md text-visitor-textprimary mt-3 font-semibold overflow-hidden text-ellipsis line-clamp-2'>{item.title}</p>
                                            <div className='flex flex-row gap-1 items-center'>
                                                <Rating defaultValue={item.rating} size='small' readOnly precision={0.5} />
                                                <p className='text-sm text-visitor-textprimary'>{item.rating.toString()}</p>
                                            </div>
                                            <div className="w-full flex gap-2 mt-2">
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    onClick={() => onDetail(true, item)}
                                                    startIcon={<Icon color='action' fontSize='small'>info_outlined</Icon>}
                                                    sx={{
                                                        borderRadius: 50,
                                                        borderColor: 'rgba(0,0,0,0.15)',
                                                        color: '#444',
                                                        transition: 'all .25s',
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(0,0,0,0.04)',
                                                            borderColor: 'rgba(0,0,0,0.3)',
                                                        }
                                                    }}
                                                >
                                                    Info
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    fullWidth
                                                    disableElevation
                                                    sx={{
                                                        borderRadius: 50,
                                                        background: 'linear-gradient(135deg, #ff7a18, #ff9f43)',
                                                        transition: 'all .25s',
                                                        '&:hover': {
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 6px 16px rgba(255,122,24,.35)'
                                                        }
                                                    }}
                                                >
                                                    Pinjam
                                                </Button>
                                            </div>
                                        </div>
                                    </Grid>
                                )).slice(0, 12)
                            }
                        </Grid>
                        <div className='flex items-center justify-center w-full mt-10'>
                            <Pagination count={10} />
                        </div>
                    </div>
                    <div className='w-[30%]'>
                        <SideContent bookList={BookData} />
                    </div>
                </div>
            </div>
            <Footer />
            <BookInfo isOpen={isDetail} onClose={() => onDetail(false)} item={SelectedItem} />
        </div>
    );
}

export default HomePage;