import axios from 'axios'

const instant = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

// instant.get("")

export default instant