---
layout: default-main
title: Mesopotamian Ancient Place-names Almanac
---

The Mesopotamian Ancient Place-names Almanac (MAPA) is planned as a long-term project for the historical geography of Mesopotamia in the age of Empires (first millennium BCE), aiming to incorporate both textual and remote-sensing data for large scale relational mapping of the landscape. The core of the project is made up of a gazetteer of place names in texts and surveys, both on the ground and via satellite. Names in texts will be linked to thousands of Akkadian everyday records.

![map of Uruk](/images/MAPA/Shay_2020_10_figure2_preview.jpeg)

<p class="fig">Fig 1: The archeological sites and ancient canals around the city of Uruk, as surveyed from the air and ground by different teams from the US, Iraq, and England. We would like to thank Mark Altaweel (UCL) for providing us with the survey data.</p>

MAPA focuses on the Mesopotamian deltaic city of Uruk ([modern Warka](https://pleiades.stoa.org/places/912986)). In the first millennium BCE, the city became a central hub of cult, commerce and agriculture under the Assyrian, Babylonian and Achaemenid empires. We are still lacking a dynamic understanding of the city’s surroundings, the agricultural communities that served the city centre, and the massive and complex irrigation infrastructure that enabled the existence of its major horticulture industry. Due to the extensive textual record of Babylonia in the first millennium, however, numerous registers of place names have been generated, containing large numbers of places whose geographical location is unknown.

![administrative texts mentioning locations around Uruk](/images/MAPA/imittu.jpg)

<p class="fig">Fig 2: A selection of <em>imittu</em> records, tax evaluations of annual date palm yields which can help reconstruct fields around Uruk along the main canals. &copy; Yale Babylonian Collection.</p>

## MAPA Gazetteer

The MAPA team spent most of the first year of the project assembling the available sporadic registers (see *bibliography* below) into one gazetteer of Babylonia in the first millennium BCE, that is formatted according to the standards of the JSON-LD based [Linked Places format (LPF)](https://github.com/LinkedPasts/linked-places/blob/master/tsv_0.3.md) of the [World Historical Gazetteer](http://whgazetteer.org/). MAPA is an official partner in the [Pelagios Network](https://pelagios.org/) and is collaborating on its visualization activity. The JSON-LD syntax employed by the LPF is productive both as RDF and Geo-JSON, as well as providing for optional temporal scoping of names, geometry, place types, and place relations. At its core, the LPF allows to index metadata about place records from multiple gazetteers, based on stable URIs. The first version of the gazetteer is now available as TSV and JSON formats in the GitHub [MAPA repository](https://github.com/DigitalPasts/MAPA).

Already this gazetteer data can be visualized as a network (see Fig. 3), which shows the relational proximity of Uruk’s surrounding villages, fields, canals and other urban centres. The results are based on computational analysis of relational data that does not take into account all known connections, but rather gravity and sequence according to the few known elements in the network.

![modern vs. previous reconstruction of the landscape based on textual data](/images/MAPA/LandscapeReconstruct.jpg)

<p class="fig">Fig 3: On the left is a reconstructed network of Urukean landscape based on cuneiform texts. Each place is marked by a three letter code. On the right is the same imagined landscape based on studies done in the 60's and 70's (Cocquerillat 1968). Especially interesting is the corroboration of recent identifications of the Chaldean tribal territories (BDKR and BAMK) and Sumundar canal (SUM).</p>

## Project Next Steps

We are continuing to enrich the gazetteer. Some of the data we collected from earlier publications is outdated, or missing information needed for our purposes. Place name instances for each entry are being added, according to the most up-to-date textual editions, as well as unpublished references, and linking them to the gazetteer. We are also curating site biographies for each of the ancient canals around Uruk. The biography describes each settlement in both physical and social terms: what kinds of social groups are active there, what are its main economic activities, and what natural features and agricultural systems and technologies are attested there. Most interesting are the outgoing and incoming elements in each site (documented e.g. in administrative texts or correspondence).

Furthermore, we are using the latest available declassified satellite and aerial imagery ([available at USGS](https://earthexplorer.usgs.gov/)) to identify ground features (canals and settlements), and tagging them accordingly. We will also enrich this dataset by scanning more declassified imagery available on site at the [National Archives](https://www.archives.gov/). In the last phase of the project, we will attempt to use these taggings with machine learning methods in order to identify ground features, compare them with known site surveys, and link them to possible identifications from the gazetteer.

## Final Vision

The final vision of MAPA is to provide an online interface with an interactive map. This map will visualise the different places in the gazetteer, their periods of use, people who visited them, their connections to other places, the ancient texts in which they appeared, and modern citations. An interactive interface such as this will allow us to ask the deeper socio-historical questions: it will expose further connections between the city and its canals, between the canals themselves, and the placement of settlements and other pieces of the state infrastructure. It will allow the tracking of canal use and canal construction, shifts in the importance of agro-industry, and changes in the contemporaneous understanding of the landscape. It will allow tracking the movement of individuals and goods in the environment, such as the flow of trade or political connections between settlements, or journeys from agricultural regions to the major temples to perform rituals or engage in some other necessary activity.

### Acknowledgments

We would like to thank Ariel M. Bagg, Michael Jursa, Ran Zadok, Francis Joannès, and the team at [Achemenet](http://www.achemenet.com/) for providing us with text summaries and transliterations of texts from the relevant periods.

We would also like to extend our appreciation to our partners at [Pelagios](https://pelagios.org/), especially Elton Barker, Gethin Rees, and Simon Rainer, for their constant support and technical consultation.

Lastly, thanks to Karl Grossner from the [World Historical Gazetteer](http://whgazetteer.org/), who assisted us with conforming to the JSON-LD based Linked Places format.

### Bibliography

Adams, Robert McC., and Hans J. Nissen. 1972. *The Uruk Countryside: The Natural Setting of Urban Societies*. Chicago: University of Chicago Press.

Bagg, Ariel M. 2020. *Die Orts- und Gewässernamen der neuassyrischen Zeit, Teil 3: Babylonien, Urartu und die östlichen Gebiete*. RGTC 7, Vol. 3. Weisbaden: Dr. Ludwing Reichert Verlag.

Cocquerillat, Denise. 1968. *Palmeraies et cultures de l’Eanna d’Uruk (559-520)*. ADFU 8. Berlin: Mann.

Ermidoro, Stefania. 2016. “New Data on the Babylonian Hydraulic Landscape: An Update to the Répertoire Géographique des Textes Cunéiformes Vol. 8.” *Kaskal* 13: 135–74.

Zadok, Ran. 1985. *Geographical Names According to New- and Late-Babylonian Texts*. RGTC 8. Weisbaden: Dr. Ludwing Reichert Verlag.

Zadok, Ran. 2020. “New Documents about Uruk, Its Countryside and the Sealand.” In *DES POLYTHEISMES AUX MONOTHEISMES: Melanges d’Assyriologie Offerts a Marcel Sigrist*, Uri Gabbay & Jean Jacques Pérennés (Eds.). Leuven: Peeters.
