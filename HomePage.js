import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';

const HomePage = () => {
    const [cartItems, setCartItems] = useState([]);
    const location = useLocation();
    const username = location.state?.username || 'Guest';
    const backgroundStyle = {
        backgroundImage: 'url("https://img.freepik.com/premium-vector/simple-curve-background-business-with-space-text_336924-5376.jpg")', // Replace with your actual image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure the background covers the entire viewport height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px', // Adjust as needed
    };
    

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <div style={backgroundStyle}>
        <h2> <center>Welcome, {username}! </center></h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.v90dMCX70nBi-qj-MlLlJQAAAA?rs=1&pid=ImgDetMain${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '50%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Twisted Love</h5>
                        <p className="card-text">
                            $19
                        </p>
                        <Rating
                name="customized-color"
                defaultValue={2}
                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.fxmmOxBYVsxE3c63GVUjQQHaLf?w=720&h=1117&rs=1&pid=ImgDetMain${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '50%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">It Ends With Us</h5>
                        <p className="card-text">
                            $20
                        </p>
                        <Rating
                name="customized-color"
                defaultValue={2}
                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.BifG3SArXj9NtAd1Ko2IBwHaLJ?rs=1&pid=ImgDetMain${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '50%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Days at the Murasaki Bookshop </h5>
                        <p className="card-text">
                            $50
                        </p>
                        <Rating
                name="customized-color"
                defaultValue={2}
                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.1Wic5jTHsJHiqa_-q1DZ5AHaLf?w=190&h=295&c=7&r=0&o=5&dpr=1.5&pid=1.7${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '50%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Ugly Love</h5>
                        <p className="card-text">
                            $15
                        </p>
                        <Rating
                name="customized-color"
                defaultValue={2}
                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
                    <img
                        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnl-bmTzAutv34uNx8wD-ki3kXx-zWrbuzA&s${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '50%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">IGNITE ME</h5>
                        <p className="card-text">
                            $23
                        </p>
                        <Rating
                name="customized-color"
                defaultValue={2}
                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>
            ))}
            
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.6E84GQXIl7I10CLTvKsAsQHaLS?rs=1&pid=ImgDetMain${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '50%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Half Girlfriend</h5>
                        <p className="card-text">
                            $20
                        </p>
                        <Rating
                name="customized-color"
                defaultValue={2}
                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
                    <img
                        src={`https://i1.wp.com/bfdbookblog.net/wp-content/uploads/2018/12/Verity_Amazon_iBooks.jpg?w=1850&ssl=1${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '50%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Verity</h5>
                        <p className="card-text">
                            $20
                        </p>
                        <Rating
                name="customized-color"
                defaultValue={2}
                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/R.b5a7225f2d3cf38ee345cf5ba814c47a?rik=ruuPZGy4vDz15w&riu=http%3a%2f%2fstarcrossedbookblog.com%2fwp-content%2fuploads%2f2022%2f01%2flove-hypothesis.jpg&ehk=3tBjmwhTNPNNIgh1zYshL4KdnfNSklkdAwEVfgi27Is%3d&risl=&pid=ImgRaw&r=0${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '50%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">The Love Hypothesis</h5>
                        <p className="card-text">
                            $20
                        </p>
                        <Rating
                name="customized-color"
                defaultValue={2}
                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.lB53koXP1E9Hl_jtmbYQWQHaLu?w=736&h=1165&rs=1&pid=ImgDetMain${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '50%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">King of Pride</h5>
                        <p className="card-text">
                            $20
                        </p>
                        <Rating
                name="customized-color"
                defaultValue={2}
                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>
            ))}
             {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.MZhouHleYUaPZPiowy1JKwAAAA?w=423&h=650&rs=1&pid=ImgDetMain${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '50%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Tea for Two and a Piece of Cake</h5>
                        <p className="card-text">
                            $25
                        </p>
                        <Rating
                name="customized-color"
                defaultValue={2}
                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>
            ))}
             {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.5osj2WgfQKXdikpGFAeHwgHaLP?rs=1&pid=ImgDetMain${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '50%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Before the Coffee gets Cold</h5>
                        <p className="card-text">
                            $15
                        </p>
                        <Rating
                name="customized-color"
                defaultValue={2}
                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
                    <img
                        src={`https://th.bing.com/th/id/OIP.cGtOgBEKFYoKqXl8kNK3sgAAAA?rs=1&pid=ImgDetMain${index}`}
                        className="card-img-top"
                        alt={`Card Image ${index + 1}`}
                        style={{ width: '50%', height: 'auto', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">The Final Offer</h5>
                        <p className="card-text">
                            $30
                        </p>
                        <Rating
                name="customized-color"
                defaultValue={2}
                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>
            ))}

        </div>
        </div>
    );
};


export default HomePage;