import * as React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
    id: string,
    image: string,
    title: string,
    description: string
}

function Card (props: CardProps) {
    return (
        <div className="card card-custom-style bg-light">
            <div className="row card-first-row">
                <div className="wishlist-icon mr-right">
                    <a href="/">
                    <svg className="bi bi-heart" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z" clipRule="evenodd"/>
                    </svg>
                    </a>
                </div>
            </div>
            <div className="row card-image-row">
                <Link to={`/${props.id}`}><img src={props.image} alt="product-card" className="card-img-top custom-card-image"/></Link>
            </div>
            <div className="row card-third-row">
                <div className="col card-body card-title">
                    <p className="card-title">{props.title}</p>
                </div>
            </div>
        </div>
    );
}




export default Card;
