'use client';

import { useState, useEffect } from 'react';

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // أفلام تجريبية حتى نربط TMDB API لاحقاً
    const demoMovies: Movie[] = [
      {
        id: 1,
        title: "Dune: Part Two",
        release_date: "2026-06-11",
        poster_path: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
        vote_average: 8.9,
        overview: "الجزء الثاني من ملحمة Dune"
      },
      {
        id: 2,
        title: "Batman Beyond",
        release_date: "2026-08-02",
        poster_path: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
        vote_average: 8.5,
        overview: "باتمان الجديد في المستقبل"
      },
      {
        id: 3,
        title: "Avengers Reborn",
        release_date: "2026-10-18",
        poster_path: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6",
        vote_average: 8.7,
        overview: "عودة الأبطال الخارقين"
      }
    ];
    setMovies(demoMovies);
    setLoading(false);
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white p-6" dir="rtl">
      <header className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-3">MovieTime</h1>
        <p className="text-zinc-400 text-xl">تابع أحدث الأفلام القادمة</p>
      </header>

      <div className="max-w-2xl mx-auto mb-10">
        <input
          type="text"
          placeholder="ابحث عن فيلم..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-3xl px-6 py-5 text-lg focus:border-red-600 outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p>جاري التحميل...</p>
        ) : (
          filteredMovies.map(movie => (
            <div key={movie.id} className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-red-600 transition-all">
              <img 
                src={movie.poster_path} 
                alt={movie.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">موعد الإصدار: {movie.release_date}</p>
                <p className="text-sm text-zinc-500 line-clamp-3 mb-4">{movie.overview}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-yellow-400">⭐ {movie.vote_average}</span>
                  <button className="bg-red-600 hover:bg-red-500 px-5 py-2 rounded-2xl text-sm">
                    مشاهدة التريلر
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}