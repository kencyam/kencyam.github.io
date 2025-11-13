import {Route, Routes} from 'react-router';

import BestSongs from '../components/music-blog/best-songs-of-2025';
import WorstSongs from '../components/music-blog/worst-songs-of-2025';

function Music(){
  const router = (
      <Routes>
        <Route path = "/music/best-songs-of-2025" element = {<BestSongs />}/>
        <Route path = "/music/worst-songs-of-2025" element = {<WorstSongs />}/>
      </Routes>
  )
  return router;
}

export default Music;