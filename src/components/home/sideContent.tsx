import { Icon, InputAdornment, Rating, TextField } from "@mui/material"
import type { IBook } from "../../interfaces/book.type"

export const SideContent = (props: { bookList: IBook[] }) => {
    return (
        <div className='w-full'>
            <TextField
                placeholder="Cari Buku..."
                size="small"
                fullWidth
                slotProps={{
                    input: {
                        sx: { borderRadius: 5 },
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon color="disabled" fontSize="medium">search</Icon>
                            </InputAdornment>
                        ),
                    },
                }}
                variant="outlined"
                sx={{ marginBottom: 3 }}
            />
            <div>
                <p className='text-visitor-textprimary text-lg font-bold mb-5'>Populer</p>
                {
                    props.bookList.map((item) => (
                        <div className='w-full flex flex-row gap-3 mb-3' key={item.id}>
                            <div className='w-[25%] aspect-2/3 h-auto rounded-md overflow-hidden relative'>
                                <img draggable={false} src={item.image} className='w-full h-full rounded-md hover:scale-[1.2] transition-all duration-300' alt={item.title} />
                            </div>
                            <div className='flex flex-1 flex-col items-start cursor-pointer select-none text-visitor-textprimary transition-all duration-300 hover:text-visitor-highlight'>
                                <p className='text-base font-semibold text-ellipsis line-clamp-2'>{`${item.title} (${item.year})`}</p>
                                <p className='text-visitor-textsecondary text-sm mb-1'>by {item.author}</p>
                                <div className='flex flex-row gap-1 items-center'>
                                    <Rating defaultValue={item.rating} size='small' readOnly precision={0.5} />
                                    <p className='text-sm text-visitor-textprimary'>{item.rating.toString()}</p>
                                </div>
                            </div>
                        </div>
                    )).slice(18, 23)
                }
            </div>
            <div className='mt-5'>
                <p className='text-visitor-textprimary text-lg font-bold mb-3'>Tanggal Rilis</p>
                <div className='h-75 overflow-y-auto'>
                    {
                        [...Array(50).keys()].map((item, index) => (
                            <div className='w-full flex flex-row gap-3 py-3 items-center justify-between border-b border-gray-400' key={index}>
                                <div className='flex items-center gap-2'>
                                    <Icon color='disabled' fontSize='medium'>play_arrow</Icon>
                                    <p className='text-visitor-textprimary text-base font-semibold'>{1975 + index}</p>
                                </div>
                                <p className='text-visitor-textprimary text-sm'>520</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}