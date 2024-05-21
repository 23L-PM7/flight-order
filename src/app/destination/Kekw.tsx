import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const tripCardStyle: any = {
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

interface props {
  isHighLighted: boolean;
};

interface Destination {
  name: string;
  place: string;
  about: string;
  image: string;
  visited: string
}

const destinations: Destination[] = [
  {
    name: "Ulaanbaatar, Mongolia",
    place: "Yolyn Am",
    about:
      "Yolyn Am is a deep and narrow gorge in the Gurvan Saikhan Mountains of southern Mongolia. The valley is named after the Lammergeier, which is called Yol in Mongolian. The Lammergeier is an Old World vulture, hence the name is often translated to Valley of the Vultures or Valley of the Eagles.",
    image:
      "https://plus.unsplash.com/premium_photo-1661879229347-fd44309840ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9uZ29saWElMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D",
    visited: "",
  },
  {
    name: "London, UK",
    place: "The British Museum",
    about:
      "The first national public museum of the world.The British Museum is unique in bringing together under one roof the cultures of the world, spanning continents and oceans. No other museum is responsible for collections of the same depth and breadth, beauty and significance.Its eight million objects allow us to explore the extraordinary diversity of human cultures, from small communities to vast empires, to discover the many forms and expressions human beings have given to every aspect of life, and to realise how closely they are interconnected.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/278px-London_Skyline_%28125508655%29.jpeg",
    visited: "Tourist arrivals: 19.2 million",
  },
  {
    name: "Paris, France",
    place: "The Eiffel Tower",
    about:
      "What does the Eiffel Tower represent? The Eiffel Tower was initially built to serve as the entrance gateway to the International Exposition of 1889 as well as a testament to French industrial ingenuity. It has since come to represent the distinct character of the city of Paris. Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
    image:
      "https://cdn.britannica.com/36/135436-050-ED1D0FCE/skyline-Eiffel-Tower-France-Paris.jpg",
    visited: "Tourist arrivals: 14.4 million",
  },
  {
    name: "Turkey",
    place: "Istanbul",
    about:
      "Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here. In the Sultanahmet district, the open-air, Roman-era Hippodrome was for centuries the site of chariot races, and Egyptian obelisks also remain. The iconic Byzantine Hagia Sophia features a soaring 6th-century dome and rare Christian mosaics.",
    image:
      "https://cdn.britannica.com/58/93158-050-7719EB2B/view-Blue-Mosque-Istanbul-Hagia-Sophia.jpg",
    visited: "17.4 million tourist in 2023",
  },
  {
    name: "Dubai, UAE",
    place: "Burj Khalifa",
    about:
      "Dubai is the most visited city in the Middle East and the only city from the region to enter the list. From its beginnings as a desert port, Dubai has become a sprawling city with an iconic skyline, famous landmarks (including  Burj Khalifa), vibrant neighborhoods, and world-famous shopping centers. It’s also home to the world’s largest traditional gold market or souk. Thanks to its well-built infrastructure and transportation system, navigating the city as a tourist is efficient. It also takes pride in being a constant in various lists of top global destinations. According to Tripadvisor’s 2023 Travellers’ Choice Awards, the city is the most popular spot for holidaymakers. ",
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQNefIZtQTjIHV2jP5pjLXlnLy-9VEd3uVhvlja3wbt6Q3Hsv1Z",
    visited: "Tourist arrivals: 14.9 million",
  },
  {
    name: "Switzerland",
    place: "Jungfraujoch",
    about:
      "Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country is also known for its ski resorts and hiking trails. Banking and finance are key industries, and Swiss watches and chocolate are world renowned.",
    image:
      "https://media.istockphoto.com/id/1038943424/photo/scenic-view-of-lago-di-braies-in-dolomites.webp?b=1&s=170667a&w=0&k=20&c=qNMXsB-gtfQIhUa2icC2a2sDSXDvLIaeUrMo-hOzoAE=",
    visited: "12.2 million tourist visited in 2023",
  },
  {
    name: "Italy",
    place: "Rome",
    about:
      "Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome Capital, and a special comune named Comune di Roma Capitale.",
    image:
      "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQxE51Dkdjl6kfq-YTlHI8_ssGCjwPrSMVRMr0JvlA5S-JYfsWAuRur0ZHzYXQahpIB",
    visited: "35 million tourist in 2023",
  },
  {
    name: "Japan",
    place: "Hokkaido",
    about:
      "Japan's northernmost island is best loved for its natural hot springs and powdery snow that's made for skiing. But it's more than just one of the best winter holiday destinations in Japan. No matter the time of year you visit, you'll enjoy its delectable seafood, volcanic lakes, and unspoiled natural gems. It also offers a peek into the country's fascinating indigenous culture, and it's just a quick flight away from Tokyo.",
    image:
      "https://plus.unsplash.com/premium_photo-1691258211455-04a64e4edcfe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW4lMjBzdW1tZXJ8ZW58MHx8MHx8fDA%3D",
    visited: "25 million tourist visited in 2023",
  },
  {
    name: "Singapore",
    place: "Marina Bay",
    about:
      "The city-state of Singapore is one of the most famous Asian destinations. It’s a tourist magnet, attracting over 16 million foreigners — a figure substantially higher than its total population, which is under 6 million. Chinese, Indonesians and Australians are among the most frequent visitors. Besides tourism, the city’s business landscape and medical system are also commendable, making it even more enticing for foreigners. The “Garden City” has several innovative attractions, including Gardens by the Bay, Merlion and the world-class hotel Marina Bay Sands.",
    image:
      "https://economymiddleeast.com/cdn-cgi/imagedelivery/Xfg_b7GtigYi5mxeAzkt9w/economymiddleeast.com/2024/01/most-visited-cities-5.jpg/w=1200",
    visited: "Tourist arrivals: 16.6 million",
  },
  {
    name: "New York, USA",
    place: "Statue of Liberty",
    about:
      "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor, within New York City. The copper statue, a gift to the U.S. from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square",
    image:
      "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQWz3mfrE0TpNrF-Y6aeZ6cPkBAvkAVIuE-VOB4ZXZw2z2My5J6PUnSv7VN6tHwTkXT",
    visited: "61.8 million travelers",
  },
  {
    name: "Greece",
    place: "Athens",
    about: "The capital of Greece is not only the most visited place in the country but also one of the most visited places in the world. The magical city is the birthplace of civilization; the place where democracy was born.The Acropolis of Athens is the most famous archeological edifice in the entire Europe. It dates back to the 5th century BC and although it’s been through rises and declines, the place still shines under the Athens’ sky. A walk around the famous historic areas of Plaka, Thission and Psyri reveal the city’s long history; beautiful preserved old houses blend in with the shiny shops and traditional taverns. The heart of the city is, without a doubt, Syntagma Square. Just a few kilometers from the historical center, you’ll find excellent beaches to enjoy during the hot summers.",
    image: "https://media.istockphoto.com/id/1028749698/photo/the-acropolis-of-athens-greece.webp?b=1&s=170667a&w=0&k=20&c=jtwlTbUfW7UxTneszTjt3O6OUxVK6yPmGNV0iysNgVs=",
    visited: "",
  },
  {
    name: "Mexico",
    place: "The Mayan Metropolis",
    about: "A popular day trip for those visiting Cancún and Playa del Carmen or the Yucatán capital of Mérida, the magnificent Mayan city of Chichén Itzá is one of Mexico's most visited archaeological sites, as well as one of the biggest and best restored. Highlights of a visit to this UNESCO World Heritage Site are numerous. A must-see here is the massive El Castillo, also known as the Pyramid of Kukulkán, and at 30 meters high, the site's tallest structure. Another noteworthy point of interest here is the magnificent Caracol, an almost 1,000-year-old observatory that stands a testament to just how advanced the Mayans were. The building is notable for the narrow slits in its walls allowing the sun to penetrate twice per year, so priests could accurately determine the date. Also of interest are the site's numerous statues, including many examples of the famous Mayan Chacmools holding their sacrificial vessels as they continue to protect these old temples.",
    image: "https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWV4aWNvfGVufDB8fDB8fHww",
    visited: "",
  }
];

export default function InteractiveCard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleShowMore = () => {
    setIsOpen(!isOpen);
  };
  const displayPlace = isOpen ? destinations : destinations.slice(0,6); 
  return (
    <div className="m-auto flex w-10/12 flex-col gap-10">
      <div className="flex flex-col gap-10">
        <div className="flex w-full justify-between">
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-3xl leading-10 text-black">
              Plan your perfect trip
            </h1>
            <p className="text-base text-black opacity-50">
              Search Flights & Places Hire to our most popular destinations
            </p>
          </div>
          <div className="flex items-center">
            <button
              className="h-10 rounded border border-[#8DD3BB] px-4 py-2 text-[#4C4850] delay-75 duration-100 ease-in-out hover:bg-[#8DD3BB] max-[740px]:truncate"
              onClick={toggleShowMore}
            >
              {isOpen ? "Show more places" : "Show less places..."}
            </button>
          </div>
        </div>
            <div className={`shadow-md rounded-2xl grid grid-rows-3 grid-cols-3 gap-8`}>
              {displayPlace.map((destination, index) => {
                return (
                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      className=""
                    >
                      <div className="flex flex-row">
                        <img
                          src={destination.image}
                          className="w-20 h-20"
                          alt={destination.place}
                        />
                        <div className="flex flex-col ml-6">
                          <div className="font-bold text-base">
                            {destination.place}
                          </div>
                          <div className="">{destination.name}</div>
                        </div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>{destination.about}</AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
      </div>
    </div>
  );
}
