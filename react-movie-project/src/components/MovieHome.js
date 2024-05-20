
import { useState, useEffect, } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";


function MovieHome(){
        const KEY = "2c40e19f417ee7df12838ef50e3e5af0"
        const DATE = "20240909"

        const [loading,setLoading] = useState(true);
        const [movies,setMovies] = useState([])
        const getMovies = async() => {
            const result = await axios.get( `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}`);
            console.log(result)
            setMovies(result);
            setLoading(false);
        }
        useEffect(() => {
        getMovies();
        }, [])
        return (
            <div>
            {/* {loading ? <h1>Loading...</h1> :
            <div>{movies.map(movie => 
            <div key={movie.movieCd}> <h3>{movie.movieNm}</h3> 
            <p>누적 관객 수 : {movie.audiAcc}명</p>
            <p>영화 개봉일 :  ({movie.openDt}) </p>
            </div>)} </div>} */}
            </div>
        );
}
export default MovieHome;