import Play from '../assets/image/MyAlbum/play';

const PlayListCard = (props: any) => {
  function millisToMinutesAndSeconds(millis: any) {
    var minutes: any = Math.floor(millis / 60000);

    var seconds: any = ((millis % 60000) / 1000).toFixed(0);

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
  const Datefix = (props: any) => {
    let date = new Date(props.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    });
    return <p>{date}</p>;
  };
  return (
    <>
      <div className="btn-hover group">
        <div className="playlist-tracks-grid tracked hover:bg-[#B3B3B3] hover:bg-opacity-[30%] btn-hover ">
          <div className="block">
            <div className="flex">
              <div className="flex group-hover:hidden track-order">
                <div className="text-description">{props.count}</div>
              </div>
              <div className="hidden pt-1 group-hover:block track-play-button">
                <div className="flex">
                  <div className="play-icon svg-icon-play icon">
                    <Play />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="track-cover">
              <div
                className="media-cover-2"
                style={{
                  backgroundImage: `url(${props.url})`
                }}
              ></div>
            </div>
            <div className="flex flex-col">
              <div className="ellipsis-one-line text-base text-white"> {props.name} </div>
              <div className="flex">
                {props.artists.map((artist: any, index: any) => (
                  <>
                    <a
                      className="text-description link-subtle ellipsis-one-line hover:underline"
                      href="#"
                    >
                      {' '}
                      {artist.name}{' '}
                    </a>
                    {index != props.artists.length - 1 && (
                      <span className="mr-1 comma-separator ng-star-inserted">,</span>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>

          <a className="text-description link-subtle hover:underline" href="#">
            {' '}
            {props.albumname}{' '}
          </a>

          <div className="text-description">
            {/* {item.added_at} */}
            <Datefix date={props.added_at} />
          </div>

          <div className="text-description"> {millisToMinutesAndSeconds(props.duration_ms)} </div>
        </div>
      </div>
    </>
  );
};

export default PlayListCard;
