export const backgrounds = {
    "ovid-pygmalion/intro": "/cyprus.png",
    "ovid-pygmalion/creating-galatea": "/workshop.png",
    "ovid-pygmalion/venus-prayer": "/prayer.png",
    "ovid-pygmalion/transformation": "/workshop.png",
    "shaw-pygmalion/act-1": "https://images.unsplash.com/photo-1702397365951-53dd126e4fac?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3p",
    "shaw-pygmalion/act-2": "https://images.unsplash.com/photo-1455593984172-9f753a2e1ebd?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
    "shaw-pygmalion/act-3": "https://images.unsplash.com/photo-1533477579100-e9a9fdf5be71?q=80&w=2276&auto=format&fit=crop&ixlib=rb-4.0.3",
    "shaw-pygmalion/act-4": "https://images.unsplash.com/photo-1455593984172-9f753a2e1ebd?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
    "shaw-pygmalion/act-5": "https://images.unsplash.com/photo-1533477579100-e9a9fdf5be71?q=80&w=2276&auto=format&fit=crop&ixlib=rb-4.0.3",
    "lerner-my-fair-lady/act-1": "/street.png",
    "lerner-my-fair-lady/act-2": "/higginshouse.png",
    "lerner-my-fair-lady/alfred": "/alfred-bg.png",
    "lerner-my-fair-lady/training": "/training.png",
    "lerner-my-fair-lady/eliza-transforms": "/training-success.png",
    "lerner-my-fair-lady/act-3": "/act-3.png",
    "lerner-my-fair-lady/freddy": "/freddy.png",
    "lerner-my-fair-lady/act-4": "/act-4.png",
    "lerner-my-fair-lady/act-5": "/act-5.png",
} as Record<string,string>

export const map = {
    "ovid-pygmalion": ["intro","creating-galatea", "venus-prayer", "transformation"],
    "shaw-pygmalion": ["act-1","act-2", "act-3", "act-4", "act-5"],
    "lerner-my-fair-lady": ["act-1","act-2", "alfred", "training", "eliza-transforms", "act-3", 
        "freddy","act-4", "act-5"],
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