import {useState,useEffect} from 'react';
import axios from '../axios';
import requests from '../requests';
import './Banner.css'

const Banner = () => {
    const [movie,setMovie] = useState([]);
    
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(request.data.results[Math.floor(request.data.results.length*Math.random())]);

            return request;
        }
        fetchData();
    },[]);

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1)+'...' : str;
    }

    return ( 
        <header className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
            }}
        > 
            <div className='banner-contents'>
                <h1 className='banner-title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner-buttons">
                    <button className="banner-button">Play
                    </button>
                    <button className="banner-button">My List</button>
                </div>

                <p className="banner-overview">
                    {truncate(movie?.overview,150)}
                </p>
            </div>

            <div className="banner-fadeBottom"/>
        </header>
     );
}
 
export default Banner;