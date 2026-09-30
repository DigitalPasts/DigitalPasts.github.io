---
title: "Babylonian Engine"
short_name: "BEn"
summary: "An AI platform for cuneiform analysis and text curation, from tablet image or printed edition to lemmatized text."
status: current
kind: Tool
image: /images/projects/ben.jpg
image_alt: "Cuneiform tablet with detected signs outlined. © Yale Babylonian Collection"
featured: true
order: 1
links:
  - label: BEn app on GitHub
    url: https://github.com/ludovicus-hispanicus/Ben-App
---

Approximately five thousand years ago, the first cipher was invented between the rivers Tigris and Euphrates, in modern-day Iraq. There was a need for a more effective way to preserve and convey information over time and distances. They came up with a system of basic words and numbers. Slowly, that system developed and was able to convey more complex words, able to encode full human language. Their cipher was highly effective - it remained in use for more than three millennia.

<div class="embed"><iframe width="500" height="400" loading="lazy" title="ANE-cunei-HeatMap" src="https://www.arcgis.com/apps/Embed/index.html?webmap=0d1d589823824487b3825237481824ca&extent=1.2935,16.3724,88.0855,52.5025&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&legend=true&basemap_toggle=true&alt_basemap=topo&disable_scroll=true&theme=light"></iframe></div>

<p class="fig">Fig 1: An interactive map highlighting sites where cuneiform writing was found. Based on Rattenborg, Rune, Johansson, Carolin, Nett, Seraina, Smidt, Gustav Ryberg, & Andersson, Jakob. (2021). Cuneiform Inscriptions Geographical Site Index (CIGS) (1.3) [Data set]. Zenodo. [https://doi.org/10.5281/zenodo.5217600](https://doi.org/10.5281/zenodo.5217600)</p>

Alas, after it fell out of use, no one kept proper documentation, as happens to many good and successful projects. The knowledge of this cipher was lost for close to two thousand years. It was deciphered in the middle of the 19th century by the pure human efforts of 
[Edward Hincks](https://en.wikipedia.org/wiki/Edward_Hincks),
[Sir Henry Creswicke Rawlinson](https://en.wikipedia.org/wiki/Sir_Henry_Rawlinson,_1st_Baronet), 
[Hormuzd Rassam](https://en.wikipedia.org/wiki/Hormuzd_Rassam), and 
[Sir Austen Henry Layard](https://en.wikipedia.org/wiki/Austen_Henry_Layard). This cipher was named by modern scholars cuneiform.

![early assyriologists and Behistun](/images/BEn/early_assyriologists.jpg)

<p class="fig">Fig 2: From left to right, Hormuzd Rassam, Edward Hincks, Sir Henry Creswicke Rawlinson, and Sir Austen Henry Layard. Below them is the [Behistun Inscription](https://en.wikipedia.org/wiki/Behistun_Inscription) of king [Darius I](https://en.wikipedia.org/wiki/Darius_the_Great), written using the cuneiform script in three different languages: Old Persian, Elamite, and Babylonian Akkadian. Thanks to knowledge of Middle Persian, it was possible to crack the cuneiform script, as well as Elamite and Akkadian, which by this point have not been read for close to two millennia.</p>

Cuneiform writings informed us regarding many things we did not know about our past - the emerging cultures, states and empires of the ancient Near East, their thousands of years of history, literature, and scientific endeavors. Their contribution to world heritage does not stand on its own, either. Our astronomical knowledge and sixty-based numerical system are owed to the ancient Mesopotamians, to name a few, as well as further knowledge of neighboring cultures such as the Egyptians and Greeks, and the historical background for the emergence of monotheistic Judaism and the writings of the Bible. 

But is our knowledge so far derived from a representative sample of the data? Estimations on how many cuneiform texts are published to date, compared to excavated tablets discovered overall, are difficult to come by. Scholars estimate that sources written in cuneiform constitute one of the largest corpora of ancient texts, second only to Greek. Even the most optimistic estimations would have to admit that there are tens of thousands of texts waiting to be published, if not far more. They are sitting in their hundreds on museum shelves, and new excavations only continue to add to their number, and to their wait.

## Purpose

Nowadays, cuneiform is being redeciphered - by machines. The purpose of the Babylonian Engine is to create a platform for digital assyriology in the 21st century. One of the greatest obstacles of assyriology from the very inception of the field is an incredible amount of data, and at the same time an extremely limited number of people able to access it and make it accessible for the rest of the world. Traditional methods have not found a solution for this problem. Assyriological training is exhilarating, but complex, and requires the development of several specialized skills in ancient languages and scripts. Furthermore, the process of reading the texts is extremely time-consuming, and requires that many scholars devote a large portion of their time only to publishing texts. Yet, the countless tablets are of vital importance to world history and cultural heritage. They ought to be made accessible, be researched, and the information they hold should be widely spread and known.

The artificial intelligence revolution and general developments in computer science can give us the long awaited solutions for these problems. With enough data for training, machine learning models should be able to identify cuneiform signs from images, transliterate and translate cuneiform texts into modern languages with the press of a button, and even more textual post-processing. With enough online data, assyriologists will have easier and quicker access to hundreds of thousands of texts, and they will be able to create more comprehensive, more sustainable, and more replicable research.

This is not to say that we will not need the specialized experts any more. Many of these experts will now also learn computer languages or collaborate with computer scientists, data experts and archivists. Such research groups' designs and models will always need to be guided and corrected by assyriologists. It is humans who tell the models what is right and what is wrong, and the models are there to help us to be consistent, work faster, or provide new insight. Furthermore, the models can be a huge pedagogical help in training a new generation of assyriologists, by assisting the process of acquiring and learning the cuneiform script, as well as the dead languages written with it; and adding, perhaps, some modern programming languages. 

## The BEn app

The Babylonian Engine is now being rebuilt as a single, modular application for Assyriologists, developed [on GitHub](https://github.com/ludovicus-hispanicus/Ben-App). It runs on a researcher's own computer, keeps its texts in a local database, and lets each user switch tools and recognition models on or off.

- **CuReD** transliterates printed and hand-copied editions into editable text, and is the core of every installation.
- **Library** stores, browses and searches the texts a user has processed.
- **Optional modules** add sign recognition from images (CuRe), page layout detection, segmentation, lemmatization and batch recognition.
- **Recognition models** can be chosen to fit the task and the budget: an offline fallback (Kraken), open vision-language models running on a local GPU, or cloud models.

Human curation stays at the centre. The models propose readings, and the scholar corrects and approves them, so every corrected text also becomes new training data.

## Earlier models

- **Atrahasis** restores missing words in broken cuneiform texts. Trained on Achaemenid-period Babylonian records from the [Achemenet](http://www.achemenet.com/) programme, it predicts the missing word 85% of the time, and the right word is among its top ten suggestions 94% of the time ([PNAS 2020](https://doi.org/10.1073/pnas.2003794117)).
- **Akkademia** transliterates and segments Unicode cuneiform signs, reaching 96.7% accuracy on the Royal Inscriptions of the Neo-Assyrian Period ([PLOS ONE 2020](https://doi.org/10.1371/journal.pone.0240511)).
- **Akkadian machine translation** translates cuneiform into English from signs or from transliteration ([PNAS Nexus 2023](https://doi.org/10.1093/pnasnexus/pgad096)).
