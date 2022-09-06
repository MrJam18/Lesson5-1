const API = "http://api.mediastack.com/v1/news?access_key=51c39ba9f4a74200213d76065722ee50&languages=ru&&countries=ru";

const changeNews = (news) => ({
    type: 'NEWS::CHANGE_NEWS',
    news
});
const setError = (error) => ({
    type: 'NEWS::SET_ERROR',
    error
})
const setLoading = (loading) => ({
    type: 'NEWS::SET_LOADING',
    loading
})
export const fetchNews = () => async (dispatch) => {
    dispatch(setError(false));
    dispatch(setLoading(true));
    try {
        const res = await fetch(API);
        if (!res.ok) {
            setError(res.status);
            throw new Error(`Request failed with status ${res.status}`);
        }
        const result = await res.json();
        dispatch(changeNews(result.data));
    }
    catch (err) {
        dispatch(setError(err.message));
    }
    finally {
        dispatch(setLoading(false));
    }
    

}



// const fetchReq = () => {
//     setErr(false);
//     fetch(API)
//     .then((res)=> {
//         if (!res.ok) {
//             setErr(res.status);
//             throw new Error(`Request failed with status ${res.status}`);
//         }
//         return res.json();
//     })
//     .then((result) => setNews(result.data))
//     .catch((err)=> console.log(err));
// };