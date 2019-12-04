import React from 'react'

function PhotoStory(props) {
    return (
        <div>
            {"photo story: " + props.story}
        </div>
    )
}

function VideoStory(props) {
    return (
        <div>
            {"video story: " + props.story}
        </div>
    )
}

const components = {
    photo: PhotoStory,
    video: VideoStory
};

function Story(props) {
    let {storyType, story} = props.data;

    const SpecificStory = components[storyType];

    return <SpecificStory story={story} />;
}

function Behavior() {
    let stories = [
        {
            storyType: "photo",
            story: "Portret",
            id: '1'
        },
        {
            storyType: "video",
            story: "About",
            id: '2'
        }
    ];

    const fn = (story) => <Story key = {story.id} data = {story} />;
    const list = stories.map(fn);

    return (
        <>
            {list}
        </>
    )

}

export default Behavior;
