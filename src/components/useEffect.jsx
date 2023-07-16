import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {

    const [dados, setDados] = useState([]);

    const keyApi = YOUR_KEY;
    const urlApi = `https://www.googleapis.com/youtube/v3/videos?key=${keyApi}&part=snippet&chart=mostPopular&regionCode=BR`;

    useEffect(() => {
        const myApi = async () => {
            try {
                const response = await axios.get(urlApi);
                setDados(response.data.items);
                // console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

        myApi()


    }, [])

    const trucateDescription = (description, maxLength) => {
        return description.length > maxLength ? description.substring(0, maxLength) + '...' : description
    }


    return (
        <>
                <section id="container">
            {
                dados.map((videos, index) => (
                

                        <div className="card-main" key={index}>
                           <div className="divImg">
                                <img src={videos.snippet.thumbnails.medium.url} />
                           </div>
                           <div className="divChannelTitle">
                                <h1 className="channelTitle">{videos.snippet.channelTitle}</h1>
                           </div>
                           <div className="divTitleDescription">
                                 <h3 className="title">{videos.snippet.title}</h3>
                                 <p className="description">{trucateDescription(videos.snippet.description,70)}</p>
                                 {/* <p>description: {videos.snippet.description}</p> */}
                           </div>
                           
                        </div>
                ))
            }
            </section>
        </>
    )
}
