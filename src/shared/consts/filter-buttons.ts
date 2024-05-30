import { FilterTags, type FilterSection } from '../types';

import destroyer from '../assets/icons/destroyer.svg';
import cruiser from '../assets/icons/cruiser.svg';
import battleship from '../assets/icons/battleship.svg';
import aircarrier from '../assets/icons/aircarrier.svg';
import submarine from '../assets/icons/submarine.svg';
import commonwealth from '../assets/icons/commonwealth.png';
import europe from '../assets/icons/europe.png';
import france from '../assets/icons/france.png';
import germany from '../assets/icons/germany.png';
import italy from '../assets/icons/italy.png';
import japan from '../assets/icons/japan.png';
import netherlands from '../assets/icons/netherlands.png';
import panAmerica from '../assets/icons/pan-america.png';
import panAsia from '../assets/icons/pan-asia.png';
import spain from '../assets/icons/spain.jpg';
import UK from '../assets/icons/uk.png';
import USA from '../assets/icons/usa.png';
import USSR from '../assets/icons/ussr.png';

export const filterType: FilterSection[] = [
    {
        icon: destroyer,
        tag: FilterTags.Destroyer
    },
    {
        icon: cruiser,
        tag: FilterTags.Cruiser
    },
    {
        icon: battleship,
        tag: FilterTags.Battleship
    },
    {
        icon: aircarrier,
        tag: FilterTags.Aircarrier
    },
    {
        icon: submarine,
        tag: FilterTags.Submarine
    }
];

export const filterNation: FilterSection[] = [
    {
        icon: commonwealth,
        tag: FilterTags.Commonwealth
    },
    {
        icon: europe,
        tag: FilterTags.Europe
    },
    {
        icon: france,
        tag: FilterTags.France
    },
    {
        icon: germany,
        tag: FilterTags.Germany
    },
    {
        icon: italy,
        tag: FilterTags.Italy
    },
    {
        icon: japan,
        tag: FilterTags.Japan
    },
    {
        icon: netherlands,
        tag: FilterTags.Netherlands
    },
    {
        icon: panAmerica,
        tag: FilterTags.PanAmerica
    },
    {
        icon: panAsia,
        tag: FilterTags.PanAsia
    },
    {
        icon: spain,
        tag: FilterTags.Spain
    },
    {
        icon: UK,
        tag: FilterTags.UK
    },
    {
        icon: USA,
        tag: FilterTags.USA
    },
    {
        icon: USSR,
        tag: FilterTags.USSR
    }
];

export const filterLevel: FilterSection[] = [
    {
        title: 'I',
        tag: FilterTags.I
    },
    {
        title: 'II',
        tag: FilterTags.II
    },
    {
        title: 'III',
        tag: FilterTags.III
    },
    {
        title: 'IV',
        tag: FilterTags.IV
    },
    {
        title: 'V',
        tag: FilterTags.V
    },
    {
        title: 'VI',
        tag: FilterTags.VI
    },
    {
        title: 'VII',
        tag: FilterTags.VII
    },
    {
        title: 'VIII',
        tag: FilterTags.VIII
    },
    {
        title: 'IX',
        tag: FilterTags.IX
    },
    {
        title: 'X',
        tag: FilterTags.X
    }
];