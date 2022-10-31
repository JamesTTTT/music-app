import React from 'react'
import { useState,useEffect } from 'react';
import topTracks from '../models/topTracks'
const Home = () => {
    const [tracks, setTracks] = useState();

    
    useEffect(() => {
        async function fetchMyAPI() {
            setTracks(await topTracks.getTopTracks("metal"))
          }
          fetchMyAPI()
    }, [])
    
    

    const trackList = () => {
        //console.log(tracks)
        if(tracks){
            //console.log(tracks)
            return tracks.tracks.track.map((item, index)  => {
                return(
                    <div
                    key={index}
                    className='p-2 w-60'
                    >
                        <div
                            style={{backgroundImage: `url(${item.image[2]['#text']})`}}
                        >
                            <p>{item.name}</p>
                            <p>{item.artist.name}</p>
                        </div>
                    </div>
                )
            })
        }
        else {
            return (<div>is loading</div>)
        }
    }
    //
  return (
    <div className='flex flex-wrap'>
        {trackList()}
    </div>
  )
}

export default Home