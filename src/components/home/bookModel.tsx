import type { IBook } from '../../interfaces/book.type';
import './bookStyle.css'

export const BookModel = (props: { data: IBook }) => {
    return (
        <div className="container">
            <div className="book">
                <div className="front">
                    <div className="cover">
                        <img src={props.data.image} alt={props.data.title} draggable={false} />
                    </div>
                </div>
                <div className="left-side bg-visitor-highlight brightness-90">
                    <div className="spine-text">
                        {props.data.author} • {props.data.year}
                    </div>
                </div>
            </div>
        </div>
    );
}
