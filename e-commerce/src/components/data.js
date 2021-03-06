import airpods from '../assets/images/Categories/Computers_Electronics/airpods.png'
import canon from '../assets/images/Categories/Computers_Electronics/canon.png'
import iphone from '../assets/images/Categories/Computers_Electronics/iphone.png'
import macbook from '../assets/images/Categories/Computers_Electronics/macbook.png'
import playstation from '../assets/images/Categories/Computers_Electronics/playstation.png'
import vestel from '../assets/images/Categories/Computers_Electronics/vestel.png'

import crime_and_punishment from '../assets/images/Categories/Books_Movies/crime-and-punishment.png'
import gramophone from '../assets/images/Categories/Books_Movies/gramophone.png'
import kafa from '../assets/images/Categories/Books_Movies/kafa.png'
import kapalı_gözler from '../assets/images/Categories/Books_Movies/kapalı-gözler.png'
import Kindle from '../assets/images/Categories/Books_Movies/Kindle.png'
import the_social_network from '../assets/images/Categories/Books_Movies/the-social-network.png'

import dyson from '../assets/images/Categories/SmartHome/dyson.png'
import light from '../assets/images/Categories/SmartHome/light.png'
import nespresso from '../assets/images/Categories/SmartHome/nespresso.png'
import sharp from '../assets/images/Categories/SmartHome/sharp.png'
import xenon from '../assets/images/Categories/SmartHome/xenon-smart.jpg'
import xiaomi from '../assets/images/Categories/SmartHome/xiaomi-robot-vacuum.png'

import celvin_klein from '../assets/images/Categories/Fashion/celvin-klein.png'
import fred_perry_shoes from '../assets/images/Categories/Fashion/fred-perry-shoes.png'
import fred_perry from '../assets/images/Categories/Fashion/fred-perry.png'
import lacoste from '../assets/images/Categories/Fashion/lacoste.png'
import nike from '../assets/images/Categories/Fashion/nike.png'
import tommy_hilfiger from '../assets/images/Categories/Fashion/tommy-hilfiger.png'

import garnier_skincare from '../assets/images/Categories/Cosmetics_Personal Care/garnier-skincare.png'
import lacoste_red from '../assets/images/Categories/Cosmetics_Personal Care/lacoste-red.png'
import oralB from '../assets/images/Categories/Cosmetics_Personal Care/oralB.png'
import philips from '../assets/images/Categories/Cosmetics_Personal Care/philips.png'
import tresemme from '../assets/images/Categories/Cosmetics_Personal Care/tresemme.png'
import la_roche_posay from '../assets/images/Categories/Cosmetics_Personal Care/la-roche-posay-sun-creame.png'

const data = {

    Computer_and_Electronics: [
        {
            id: 1,
            name: "AirPods",
            price: "199.00",
            categories: "Computer_and_electronics",
            description_1: "Chip: H1 headphone chip",
            description_2: "Connectivity: Bluetooth 5.0",
            description_3: "Sensors: Dual beamforming microphones",
            image: airpods
        }, 

        {
            id: 2,
            name: "Canon EOS R5",
            price: "3899.00",
            categories: "Computer_and_electronics",
            description_1: "Focusing: Dual Pixel CMOS AF",
            description_2: "Viewfinder: 0.5 inch OLED color EVF",
            description_3: "Flash: E-TTL II Auto Flash",
            image: canon
        }, 
        
        {
            id: 3,
            name: "Iphone 12 Pro Max",
            price: "1099.00",
            categories: "Computer_and_electronics",
            description_1: "Chip: A14 Bionic chip",
            description_2: "Operating System: iOS 14",
            description_3: "Sensors: LiDAR Scanner, Three‑axis gyro",
            image: iphone
        },
        
        {
            id: 4,
            name: "PlayStation 5",
            price: "499.99",
            categories: "Computer_and_electronics",
            description_1: "CPU: 8x Zen 2 Cores at 3.5GHz with SMT",
            description_2: "RAM: 16 GB GDDR6/256-bit RAM",
            description_3: "GPU: 10.28 TFLOPS, 36 CUs at 2.23GHz",
            image: playstation
        }, 
        
        {
            id: 5,
            name: "MacBook Pro",
            price: "1499.00",
            categories: "Computer_and_electronics",
            description_1: "Chip: M1 Chip with 8-Core",
            description_2: "Storage: 512GB SSD storage",
            description_3: "RAM: 8GB Accsess Memory",
            image: macbook
        }, 
        
        {
            id: 6,
            name: "Vestel 50U9510 TV",
            price: "599.00",
            categories: "Computer_and_electronics",
            description_1: "Resolution: 4K Ultra HD (3840 x 2160)",
            description_2: "Operating System: QUI",
            description_3: "Number of Cores: 4 Cores",
            image: vestel
        },
    ],

    Books_and_Movies: [
        {
            id: 7,
            name: "Crime & Punishment",
            price: "10.49",
            categories: "Books_and_Movies",
            description_1: "Print Length: 430 pages",
            description_2: "Publisher: Dover Publications",
            description_3: "Language: English",
            image: crime_and_punishment
        }, 
        
        {
            id: 8,
            name: "Crosley CR6016A-RE",
            price: "175.90",
            categories: "Books_and_Movies",
            description_1: "Connectivity Technology: Wired",
            description_2: "Material: Wood, Plastic and Metal",
            description_3: "Item Weight: 6 Pounds",
            image: gramophone
        }, 
        
        {
            id: 9,
            name: "The Social Network",
            price: "5.50",
            categories: "Books_and_Movies",
            description_1: "Director:‎ David Fincher",
            description_2: "Release date: ‎January 11, 2011",
            description_3: "Type: Drama/History",
            image: the_social_network
        }, 
        
        {
            id: 10,
            name: "Magazine",
            price: "1.75",
            categories: "Books_and_Movies",
            description_1: "Stock Code: KAFA.2107.S082",
            description_2: "Realesed Month: July",
            description_3: "Volume Number: 82",
            image: kafa
        }, 
        
        {
            id: 11,
            name: "Kindle Oasis",
            price: "269.69",
            categories: "Books_and_Movies",
            description_1: "Connectivity: 4GB LTE",
            description_2: "Storage: 32GB storage",
            description_3: "Number of Contents: 150",
            image: Kindle
        }, 
        
        {
            id: 12,
            name: "Close Eyes",
            price: "40.90",
            categories: "Books_and_Movies",
            description_1: "Record Type: 12' (inch)",
            description_2: "Music Genre: Classical",
            description_3: "Number of Pieces: 16",
            image: kapalı_gözler
        },         
    ],

    SmartHome: [
        {
            id: 13,
            name: "Mi Robot Vacuum-Mop",
            price: "690.00",
            categories: "SmartHome",
            description_1: "Battery Capacity: 3200mAh",
            description_2: "Wi-Fi: 2.4GHz 802.11 b/g/n",
            description_3: "Running Time: 60-130 minutes",
            image: xiaomi
        }, 
        
        {
            id: 14,
            name: "Pure Cool Air Purifier",
            price: "549.99",
            categories: "SmartHome",
            description_1: "Filter: 360 degrees Glass HEPA Filter",
            description_2: "Technology: Air MultiplierTM",
            description_3: "Certified: Asthma Friendly by AAFA",
            image: dyson
        }, 
        
        {
            id: 15,
            name: "Gina Coffee Machine",
            price: "260.00",
            categories: "SmartHome",
            description_1: "Raw Materials: Glass",
            description_2: "Module: Cold Drip",
            description_3: "Valve: Stainless Steel",
            image: nespresso
        }, 
        
        {
            id: 16,
            name: "Wi-Fi Smart Switch",
            price: "550.00",
            categories: "SmartHome",
            description_1: "Wi-Fi Security Mode: WEP.WPA/WPA2",
            description_2: "Remote Control: Android / IOSCE, RoHS",
            description_3: "Power Supply: AC 100-250V 50/60Hz",
            image: xenon
        }, 
        
        {
            id: 17,
            name: "Sharp Smart Oven",
            price: "2499.99",
            categories: "SmartHome",
            description_1: "Edge Performance: 8 Pass Upper-Element",
            description_2: "Voltage Height: 240V",
            description_3: "Control Panel: LCD Display",
            image: sharp
        }, 
        
        {
            id: 18,
            name: "Led Smart Light Bulbs",
            price: "119.99",
            categories: "SmartHome",
            description_1: "Maximum Compatible Wattage: ‎85 Watts",
            description_2: "Average Life: 20000 Hours",
            description_3: "Type of Bulb: LED",
            image: light
        },         
    ],

    Fashion: [
        {
            id: 19,
            name: "Shirt",
            price: "34.99",
            categories: "Fashion",
            description_1: "Brand: Fred Perry",
            description_2: "Gender: Male",
            description_3: "Color: Green",
            image: fred_perry
        }, 
        
        {
            id: 20,
            name: "v-necked T-Shirt",
            price: "35.00",
            categories: "Fashion",
            description_1: "Brand: Lacoste",
            description_2: "Gender: Female",
            description_3: "Type: 94% cotton",
            image: lacoste
        }, 
        
        {
            id: 21,
            name: "Casual Shoes",
            price: "95.50",
            categories: "Fashion",
            description_1: "Brand: Fred Perry",
            description_2: "Size: 44",
            description_3: "Color: Brown",
            image: fred_perry_shoes
        }, 
        
        {
            id: 22,
            name: "Bag",
            price: "69.99",
            categories: "Fashion",
            description_1: "Brand: Celvin Klein",
            description_2: "Gender: Female",
            description_3: "Color: Black",
            image: celvin_klein
        }, 
        
        {
            id: 23,
            name: "Dry Strke JSY",
            price: "10.50",
            categories: "Fashion",
            description_1: "Brand: Nike",
            description_2: "Gender: Female",
            description_3: "Color: Black",
            image: nike
        }, 
        
        {
            id: 24,
            name: "Hat",
            price: "30.00",
            categories: "Fashion",
            description_1: "Brand: Tommy Hilfiger",
            description_2: "Type: Unisex",
            description_3: "Color: Navy Blue",
            image: tommy_hilfiger
        },         
    ],

    Cosmetics_and_PersonalCare: [
        {
            id: 25,
            name: "Expert Step-2",
            price: "25.00",
            categories: "Cosmetics_and_PersonalCare",
            description_1: "Brand: TRESemmé",
            description_2: "Hair Type: Thick",
            description_3: "Liquid Volume: 25 Fluid Ounces",
            image: tresemme
        }, 
        
        {
            id: 26,
            name: "Power White",
            price: "6.99",
            categories: "Cosmetics_and_PersonalCare",
            description_1: "Brand: Garnier Men",
            description_2: "Including: Ultra-Absorbent Charcoal",
            description_3: "Duties: Cleansing, Exfoliation and Mask",
            image: garnier_skincare
        }, 
        
        {
            id: 27,
            name: "Shaver Hair Clipper",
            price: "235.00",
            categories: "Cosmetics_and_PersonalCare",
            description_1: "Shaving Area: Beard",
            description_2: "Type: Wireless",
            description_3: "Blade System: V-Track pro",
            image: philips
        }, 
        
        {
            id: 28,
            name: "Red Pour Homme Edt",
            price: "34.99",
            categories: "Cosmetics_and_PersonalCare",
            description_1: "Brand: Lacoste",
            description_2: "Ingredients: Aqua/Water/Eau",
            description_3: "Item Weight: 125 ml",
            image: lacoste_red
        }, 
        
        {
            id: 29,
            name: "Anthelios Melt in Milk",
            price: "20.00",
            categories: "Cosmetics_and_PersonalCare",
            description_1: "Brand: La Roche Posay",
            description_2: "Protection: UVA, UVB, Infrared-A rays",
            description_3: "Application: Face, Neck, Decollete area",
            image: la_roche_posay
        }, 
        
        {
            id: 30,
            name: "Vitality Cross Action",
            price: "17.50",
            categories: "Cosmetics_and_PersonalCare",
            description_1: "Brand: Oral-B",
            description_2: "Power Source: Rechargeable Battery",
            description_3: "Type: Electric Toothbrush",
            image: oralB
        },         
    ],
};

export default data
