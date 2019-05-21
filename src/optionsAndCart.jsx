import React from 'react';
import {Option} from "./option.jsx"
import {PeopleWantThis} from "./peoplewantthis.jsx"
var optionHead = ""


export const Options = (props) => {
  if(props.options[0] !== "xSmall") {
    optionHead = "Color"
  } else {
    optionHead = "Size"
  }

return(
    <div className="tjn-flex tjn-flex-col tjn-flex-around">
      <div className="tjn-optionHead">{optionHead}</div>
      <div className="tjn-options-drop-down">
        <select>
          {props.options.map((elem) => <Option key={elem+"0230"} option={elem} />
          )}
        </select>
      </div>
      <button>Buy it now</button>
      <button>Add to cart</button>
      <div>
        <PeopleWantThis want={props.peoplewantthis} />
      </div>
    </div>
)
}


// var VideoList = (props) => (
//   <div className="video-list">
//     {props.videos.map((video) => {
//       return <VideoListEntry click={props.click} video={video} key={video.id.videoId} />
//     })}
//   </div>
// );



// import React from 'react';

// export var Main = () =>  (
//     <div><h1>I fry dumplings</h1></div>
//   )