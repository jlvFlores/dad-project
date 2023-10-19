import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Courses = ({ selectedCourse }) => {
  const { videos } = selectedCourse;
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const sliderVideos = videos.filter((video) => video.key !== selectedVideo.key);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <div>
        <iframe
          className="primary-vid"
          src={`https://www.youtube.com/embed/${selectedVideo.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <p className="primary-vid-title">{selectedVideo.title}</p>
      </div>

      {sliderVideos.length > 0 && (
        <div className="slider">
          {sliderVideos.map((video) => (
            <button type="button" className="slider-box" key={video.key} onClick={() => handleVideoClick(video)}>
              <img src={`https://img.youtube.com/vi/${video.key}/0.jpg`} alt={video.title} />
              <h4>{video.title}</h4>
            </button>
          ))}
        </div>
      )}

      <p>
        Description:
        {selectedCourse.description}
      </p>
    </>
  );
};

Courses.propTypes = {
  selectedCourse: PropTypes.instanceOf(Object).isRequired,
};

export default Courses;
