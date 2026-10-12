import { Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Icon, Rating, Slide } from "@mui/material"
import { type TransitionProps } from '@mui/material/transitions';
import { forwardRef } from "react";
import type { IBook } from "../../interfaces/book.type";

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const BookInfo = (props: { isOpen: boolean; onClose: any; item: IBook }) => {
    return (
        <Dialog
            open={props.isOpen}
            slots={{ transition: Transition }}
            keepMounted
            onClose={props.onClose}
            slotProps={{
                paper: { sx: { width: '50vw' } }
            }}
        >
            <DialogContent>
                <div className="bg-white p-3 w-full">
                    <div className="flex flex-row items-start gap-5 w-full">
                        <div className='w-[25%] aspect-2/3 h-auto rounded-md overflow-hidden relative'>
                            <img draggable={false} src={props.item.image} className='w-full h-full rounded-md hover:scale-[1.2] transition-all duration-300' alt={props.item.title} />
                        </div>
                        <div className='flex flex-1 flex-col items-start'>
                            <p className='text-lg font-semibold text-ellipsis line-clamp-2 text-black'>{props.item.title}</p>
                            <p className='text-visitor-textsecondary text-sm mb-1'>by {props.item.author} | {props.item.year}</p>
                            <div className='flex flex-row gap-1 items-center'>
                                <Rating defaultValue={props.item.rating} size='small' readOnly precision={0.5} />
                                <p className='text-sm text-visitor-textprimary'>{props.item.rating.toString()}</p>
                            </div>
                            <div className='flex flex-row gap-1 items-center mt-3'>
                                <Chip label={`${props.item.pages} halaman`} />
                                <Chip label={props.item.language} />
                                <Chip label={props.item.country} />
                            </div>
                        </div>
                    </div>
                    <p className="font-bold text-black text-lg mt-5">Sinopsis</p>
                    <p className="text-black text-sm">{props.item.synopsis} Sint dolore aliqua enim exercitation magna. Consectetur anim sit fugiat excepteur. Cillum incididunt consectetur culpa esse eiusmod minim laborum nostrud labore culpa. Nisi nostrud Lorem ad eu exercitation sint culpa fugiat deserunt nisi eu mollit excepteur. Reprehenderit irure qui non consequat irure. Reprehenderit anim dolore proident qui duis pariatur.</p>
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="outlined"
                    size="medium"
                    onClick={props.onClose}
                    sx={{
                        borderRadius: 50,
                        borderColor: 'rgba(0,0,0,0.15)',
                        color: '#444',
                        paddingX: 3,
                        transition: 'all .25s',
                        '&:hover': {
                            backgroundColor: 'rgba(0,0,0,0.04)',
                            borderColor: 'rgba(0,0,0,0.3)',
                        }
                    }}
                >
                    Tutup
                </Button>
                <Button
                    variant="contained"
                    size="medium"
                    disableElevation
                    sx={{
                        borderRadius: 50,
                        background: 'linear-gradient(135deg, #ff7a18, #ff9f43)',
                        paddingX: 3,
                        transition: 'all .25s',
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 16px rgba(255,122,24,.35)'
                        }
                    }}
                >
                    Pinjam
                </Button>
            </DialogActions>
        </Dialog>
    )
}