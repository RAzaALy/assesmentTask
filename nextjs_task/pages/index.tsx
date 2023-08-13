import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import axios from 'axios';


const Home = (): JSX.Element => {




  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load initial data
    loadBooks();
  }, []);

  const loadBooks = async () => {
    setLoading(true);
    try {
      // Make an API request using axios to fetch more books
      const response = await axios.get(`https://nestjs-production-b63f.up.railway.app/books`, {
        params: {
          offset: books.length,
          limit: 20,
        },
      });
      const newBooks = response.data;
      setBooks([...books, ...newBooks]);
    } catch (error) {
      console.error('Error loading books:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    const scrollThreshold = 0.8;
    if (!loading && window.innerHeight + window.scrollY >= document.body.scrollHeight * scrollThreshold) {
      loadBooks();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [books, loading]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Book Storage Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-gray-600 body-font">



        <div className="container px-5 py-24 mx-auto">
          <h1 className='text-center text-lg font-bold '>Books</h1>
          <div className="flex flex-wrap  justify-center ">


            {books.map(book => {
              return (

                <div key={book.id} className="p-4  ">
                  <div className="h-full w-60 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="h-70  w-60 object-fill " src={book.cover} alt="blog" />
                    <div className='p-2'>
                      <h1 className="title-font text-lg font-medium text-gray-900 py-3 ">{book.title}</h1>
                      <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>

                      <div className="flex justify-between items-center px-3">
                        <a className="text-red-500 font-bold  ">10%

                        </a>

                        <span className="text-black  text-sm font-bold">
                          50,000 $
                        </span>

                      </div>
                    </div>
                  </div>

                </div>

              )
            })}








          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;
