---
layout: default-main
title: Mesopotamian Ancient Place-names Almanac
---

The Mesopotamian Ancient Place-names Almanac (MAPA) is planned as a long-term project for the historical geography of Mesopotamia in the age of Empires (first millennium BCE), aiming to incorporate both textual and remote-sensing data for large scale relational mapping of the landscape. The core of the project is made up of a gazetteer of place names in texts and surveys, both on the ground and via satellite. Names in texts will be linked to thousands of Akkadian everyday records, that are available in multiple formats: in transliteration, as summaries in English and German, and in English translation.

![map of Uruk](/images/MAPA/shai_2020_12_map4.jpg)

The first phase of MAPA focuses on the Mesopotamian deltaic city of Uruk ([modern Warka](<https://pleiades.stoa.org/places/912986)). In the first millennium BCE, the city became a central hub of cult, commerce and agriculture under the Assyrian, Babylonian and Achaemenid empires. We are still lacking a dynamic understanding of the city’s surroundings, the agricultural communities that served the city centre, and the massive and complex irrigation infrastructure that enabled the existence of its major horticulture industry. Due to the extensive textual record of Babylonia in the first millennium, however, numerous registers of place names have been generated, containing large numbers of places whose geographical location is unknown.

![map of Uruk with reconstruction of canals and places](/images/MAPA/shai_2020_12_map9_channels.jpg)

## MAPA Gazetteer

The MAPA team spent most of the first year of the project assembling the available sporadic registers (see *bibliography* below) into one gazetteer of Babylonia in the first millennium BCE, that is formatted according to the standards of the JSON-LD based [Linked Places format (LPF)](https://github.com/LinkedPasts/linked-places/blob/master/tsv_0.3.md) of the [World Historical Gazetteer](http://whgazetteer.org/). MAPA is an official partner in the Pelagios Network and is collaborating on its visualization activity. The JSON-LD syntax employed by the LPF is productive both as RDF and Geo-JSON, as well as providing for optional temporal scoping of names, geometry, place types, and place relations. At its core, the LPF allows to index metadata about place records from multiple gazetteers, based on stable URIs. The first version of the gazetteer is now available at TSV and JSON formats in the GitHub [MAPA repository](https://github.com/DigitalPasts/MAPA).

Already this gazetteer data can be visualized as a network, which shows the relational proximity of Uruk’s surrounding villages, fields, canals and other Urban centres. The results are based on computational analysis of relational data that does not take into account all known connections, but rather gravity and sequence according to the few known elements in the network. Nevertheless, they already provide a better imagined landscape than previous studies done in the 60’s and 70’s on a chosen subset of the texts. Especially interesting is the corroboration of recent identifications of the Chaldean tribal territories and Sumundar canal.

INSERT PICTURE OF GEPHI NETWORK

## Project Next Steps

The next step of the project, currently underway, is to enrich the gazetteer with data accumulated and tagged directly from texts or text summaries. This will be achieved by two parallel pipelines: a manual and a semi-automatic pipeline.

The manual pipeline will involve digitizing texts. The texts are entered in ATF format, the standard digital format for cuneiform text editions (see the [eBL-ATF standards](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md)). Then, the relevant information, text id, date, places and people, will be tagged using [Recogito](https://wiki.digitalclassicist.org/Recogito). Recogito produces TEI/XML files which can later be incorporated into the gazetteer.

The semi-automatic pipeline will use texts and text summaries which are already available in some digitized format. We will use different computational methods for detecting dates, places and people. Then, we will explore methods for automatic disambiguation of people and places, which is still a *desideratum* for cuneiform texts. Finally, these places and dates will be added to relevant entries in the gazetteer.

## Final Vision

The final vision of MAPA is to provide an online interface with an interactive map. This map will visualise the different places in the gazetteer, their periods of use, people who visited them, their connections to other places, the ancient texts in which they appeared, and modern citations. An interactive interface such as this will allow us to ask the deeper socio-historical questions: it will expose further connections between the city and its canals, between the canals themselves, and the placement of settlements and other pieces of the state infrastructure. It will allow the tracking of canal use and canal construction, shifts in the importance of agro-industry, and changes in the contemporaneous understanding of the landscape. It will allow tracking the movement of individuals and goods in the environment, such as the flow of trade or political connections between settlements, or journeys from agricultural regions to the major temples to perform rituals or engage in some other necessary activity. In other words, it will allow us to retrace and derive a far better understanding of the societies living more than three thousand years ago at the cradle of civilization.

### Acknowledgments

We would like to thank Ariel M. Bagg, Michael Jursa, Ran Zadok, Francis Joannès, and the team at [Achemenet](http://www.achemenet.com/) for providing us with text summaries and transliterations of texts from the relevant periods.

We would also like to extend our appreciation to our partners at [Pelagios](https://pelagios.org/), especially Elton Barker, Gethin Rees, and Simon Rainer, for their constant support and technical consultation.

Lastly, thanks to Karl Grossner from the World Historical Gazeetter, who assisted us with conforming to the JSON-LD based Linked Places format.

### Bibliography

Adams, Robert McC., and Hans J. Nissen. 1972. *The Uruk Countryside: The Natural Setting of Urban Societies*. Chicago: University of Chicago Press.

Bagg, Ariel M. 2020. *Die Orts- und Gewässernamen der neuassyrischen Zeit, Teil 3: Babylonien, Urartu und die östlichen Gebiete*. RGTC 7, Vol. 3. Weisbaden: Dr. Ludwing Reichert Verlag.

Ermidoro, Stefania. 2016 “New Data on the Babylonian Hydraulic Landscape: An Update to the Répertoire Géographique des Textes Cunéiformes Vol. 8.” *Kaskal* 13: 135–74.

Zadok, Ran. *Geographical Names According to New- and Late-Babylonian Texts*. RGTC 8. Weisbaden: Dr. Ludwing Reichert Verlag, 1985.

Zadok, Ran. 2020. “New Documents about Uruk, Its Countryside and the Sealand.” In *DES POLYTHEISMES AUX MONOTHEISMES: Melanges d’Assyriologie Offerts a Marcel Sigrist*, Uri Gabbay & Jean Jacques Pérennés (Eds.). Leuven: Peeters.