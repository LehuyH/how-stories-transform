export const backgrounds = {
    "ovid-pygmalion/intro": "/cyprus.png",
    "ovid-pygmalion/creating-galatea": "/workshop.png",
    "ovid-pygmalion/venus-prayer": "/prayer.png",
    "ovid-pygmalion/transformation": "/workshop.png",
    "shaw-pygmalion/act-1": "https://pygmalionblog.weebly.com/uploads/4/9/8/2/49828459/125801433.jpg",
} as Record<string,string>

export const map = {
    "ovid-pygmalion": ["intro","creating-galatea", "venus-prayer", "transformation"],
    "shaw-pygmalion": ["act-1","act-2", "act-3", "act-4", "act-5"],
    "lerner-my-fair-lady": ["act-1","act-2", "act-3", "act-4", "act-5"],
} as Record<string,string[]>

export const findClosestScene = (fromStory:string, fromScene:string, toStory:string) => {
    const fromScenes = map[fromStory]
    const toScenes = map[toStory]
    let index = fromScenes.findIndex(s=>s===fromScene)

    //Walk backwards until we find a non-null scene
    let prev = toScenes[index] ?? null
    while(prev===null){
        prev = toScenes[index] ?? null
        index--
    }

    return prev
}