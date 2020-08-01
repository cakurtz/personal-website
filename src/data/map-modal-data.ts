export const MAP_DATA: CountryData[] = [
    {
        name: 'Denmark',
        imagePath: '../../assets/map/Denmark.jpeg',
        date: 'September 2018',
        cities: 'Copenhagen',
        description: 'My trip to Denmark was my first trip to Europe. It will ' +
            'always be a special place for that reason. One of the coolest things ' +
            'I experienced in Copenhagen was Nyhavn. Pictured in the image above, ' +
            'Nyhavn is a canal lined with colorful buildings filled with restaurants ' +
            'that feature many fresh seafood dishes and plenty of outdoor seating. ' +
            'The atmosphere was something really special and something I will not ever ' +
            'forget. Another highlight of this visit was visiting the Amelienborg Palace. ' +
            'Seeing how the royal family lived and the beautiful architecture during a ' +
            'self guided tour was pretty spectacular. Another fun stop was Rosenborg Castle. ' +
            'This castle featured a breathtaking landscape, a labyrinth of rooms and treasures ' +
            'to discover on a self guided tour. At the top of the castle was a real throne ' +
            'room filled with silver and gold. The tour ended going into the cellar and ' +
            'seeing all the heirlooms such as the King\'s and Queen\'s crowns. Another thing ' +
            'I loved about the city was how green it was. Most people walked, rode bikes, ' +
            'or utilized the fully electronic and automated metro rail system. Copenhagen ' +
            'is also very proud to be a gay friendly place and all over the city you can ' +
            'find little indicators of this from souveneirs to pride flags. Copenhagen ' +
            'was a truly magical city that I hope I will get the chance to explore again ' +
            'someday in the future.'
    },
    {
        name: 'Greece',
        imagePath: '../../assets/map/Greece.jpeg',
        date: 'August/September 2019',
        cities: 'Athens, Sounion, Mykonos, Fira, Oia',
        description: ''
    }
];

export interface CountryData {
    name: string;
    imagePath: string;
    date: string;
    cities: string;
    description: string;
};
