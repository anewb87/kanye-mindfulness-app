const setImages = (mood) => {
    let emoji;
    switch(mood) {
        case 1: 
            emoji='😠'; 
            break;
        case 2:
           emoji='😕';
           break;
        case 3:
            emoji='😑';
            break;
        case 4:
            emoji='😌';
            break;
        case 5:
            emoji='😺';
            break;

    }
    return emoji;
}

export default setImages;