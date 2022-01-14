import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from '../css/news.module.css';
import '../css/App.css'
import { getError, getLoading, getNews } from '../store/news/selectors';
import { fetchNews } from '../store/news/actions';
import {useSelector, useDispatch} from 'react-redux';
import { CircularProgress } from '@material-ui/core';
 let newsID = 0;

const News = () => {
    const news = useSelector(getNews);
    const err = useSelector(getError);
    const loading = useSelector(getLoading);
    const dispatch = useDispatch();

    const ErrorComp = () => {
        return (
            <div className={styles.errorBox}>
            <div className={styles.error}>Error! {err}. </div>
            <button onClick={()=> dispatch(fetchNews())}>Retry</button>
            </div>
        )
    }
    const Content = () => news.map((el)=> {
        newsID++;
        return(
        <a href={el.url} className={styles.newsBlock} key = {newsID}>
        <div className={'small-header ' + styles.boldText}>{el.title}</div>
               {el.image != null && <img src={el.image} alt={el.source} className={styles.image}/>}
               <div className={styles.text}>{el.description}</div>
            <div className={styles.source}>Источник: {el.source}.</div>
        </a>
        )
    })

    useEffect(() => dispatch(fetchNews()), [])
    
    return (
        <div className={styles.news}>
        {loading && <div className={styles.loading}><CircularProgress color="secondary" size= '200px'/></div>}
        {err ? <ErrorComp/> : <Content/>}
        </div>
    );
};

export default News;