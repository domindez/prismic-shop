'use client'

import { PrismicImage } from "@prismicio/react";
import type { IProduct } from "../types/IProduct";
import { useState } from "react";

interface Props {
	product: IProduct;
}

const ItemGallery = ({ product }: Props) => {
	const [imgToShow, setImgToShow] = useState(product.gallery[0].image);
	
	const handleHoverThumbnail = (image: any) => {
		setImgToShow(image);
	}

	return (
		<div style={galleryStyle}>
			<div style={mainImgStyle}>
				<PrismicImage field={imgToShow} style={imgStyle} />
			</div>
			<div style={thumbnailsStyle} >
				{product.gallery.slice(1).map((item) => (
						<PrismicImage
							field={item.image.thumbnail}
							key={item.image.thumbnail.url}
							style={imgStyle}
							onMouseEnter={() => handleHoverThumbnail(item.image)}
							/>
				))}
			</div>
		</div>
	);
};


const galleryStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
};

const mainImgStyle: React.CSSProperties = {
	height: '70vh',
	width: '70vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	overflow: 'hidden',
	border: '1px solid #1a3657',
	borderRadius: '5px',
};

const imgStyle: React.CSSProperties = {
	height: '100%',
	width: '100%',
	objectFit: 'contain',
	borderRadius: '5px',
	cursor: 'pointer',
};

const thumbnailsStyle: React.CSSProperties = {
	display: 'grid',
	gridTemplateColumns: "repeat(auto-fill, minmax(50px, 1fr))",
	gap: '10px',
	border: '1px solid #1a3657',
	padding: '5px',
};

export default ItemGallery;

