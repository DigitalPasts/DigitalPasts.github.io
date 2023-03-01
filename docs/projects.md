---
layout: default+toc
title: Projects
---

## Current Projects

### Babylonian Engine (BEn)

The Babylonian Engine is a growing repository for tools designed to aid the research, teaching, and knowledge distribution of the ancient cultures of Mesopotamia. One of the greatest obstacles of assyriology is an incredible amount of data, and at the same time an extremely limited number of people able to access it and make it accessible for the rest of the world. The artificial intelligence revolution and general developments in computer and data science can give us the long awaited solutions for that problem, by creating an appropriate interface. For our existing tools and more information, see the [Babylonian Engine Page](BEn.md). For tools in the making, see other projects in this page.

{% include BEn_new.html %}
{% include BEn_old.html %}

### Mesopotamian Ancient Place-names Almanac (MAPA)

MAPA is an historical geography project of the city of Uruk, one of the largest and most important cities of Mesopotamia, in the age of Empires (first millennium BCE). It incorporates both textual and remote-sensing data for large scale relational mapping of the landscape. The core of the project is made up of a gazetteer of placenames in texts and surveys, both on the ground and via remote sensing. This gazetteer is formatted according to the standards of the JSON-LD based 
<a href="https://github.com/LinkedPasts/linked-places/blob/master/tsv_0.3.md" target="_blank">Linked Places format (LPF)</a> of the 
<a href="http://whgazetteer.org/" target="_blank">World Historical Gazetteer</a>. For more information, see the [MAPA page](MAPA.md).

### 3D Scanning of Cuneiform Tablets

When taking 2D images of cuneiform tablets, which are 3D objects, some information is always lost, no matter how high the image quality. Capturing them in 3D models is the ideal way to document them digitally and keep all the information they hold, both for scholars wanting to study them, and for computer vision applications, such as sign identification. For this purpose, the lab has acquired a 
<a href="https://www.creativeinfocom.com/pdfs/smartscan-specification-he-r5-c5.pdf" target="_blank">3D Hexagon scanner</a>. We are currently in the process of creating 3D models of tablets held at the Israel Museum and the Bible Lands Museum. We also enthusiastically welcome solicitations for scanning other historical artifacts, and providing technical support for publishing them. Contact us for more information (<{{ site.email}}>).

### Archaeomagnetic Analysis of Ancient Clay Bricks

Archaeomagentic research on Bronze and Iron Age materials has become a flourishing field with proven contributions to both archaeology (chronology and site formation processes) and geophysics (the study of the Earth’s magnetic field and related phenomenon). This is a multi-faceted archaeomagnetic research on baked clays from the ancient Near East, in which we are analyzing dozens of bricks from Mesopotamia in various museum collections. The collaborative work includes Tel Aviv University (hosting institute), Scripps Institution of Oceanography at UC San Diego (Paleomagnetic Laboratory), Digital Pasts Lab at Ariel University (Mesopotamian History and Digital Humanities), and Institute of Archaeology at UCL (Mesopotamian history/archaeology).

Collaborators: Prof. <a href="http://magician.ucsd.edu/" target="_blank">Lisa Tauxe</a> (UC San Diego), Prof. <a href="https://telaviv.academia.edu/ErezBenYosef" target="_blank">Erez Ben-Yosef</a>

### Cuneiform in Augmented 3D Space

With approximately 250 cuneiform tablets in storage, the collection at the National Museums of Scotland is the largest of its kind in Scotland. The pilot project examines possibilities for augmented holographic displays with HoloLens2, for a combination of metadata and 3D Cuneiform artefacts from NMS. Of particular interest within the topic are the epistemic issues of 2D/3D data translation and representation, eye-tracking navigation and multi-channel interaction in the educational and museal context. The project is in collaboration with <a href="https://creativeinformatics.org/" target="_blank">Creative Informatics</a>, <a href="https://www.napier.ac.uk/about-us" target="_blank">Edinburgh Napier University</a>.
 
Collaborator: Dr <a href="https://uk.linkedin.com/in/wamposzyc" target="_blank">Michael Wamposzyc</a> (Edinburgh Napier University)

### CuRe (Cuneiform Recognition)

In the 19<sup>th</sup> and 20<sup>th</sup> centuries, the most efficient way to publish cuneiform tablets was creating hand-copies, drawings imitating cuneiform signs in black and white. This is still widely used to this day in assyriological publications. Therefore, there are tens of thousands of these hand-copies, which, because of their relative simplicity, can be an easier first step into optical character recognition of cuneiform. We trained a machine learning model to identify hand-drawn signs. After achieving successful results with hand-copies, we hope to apply our model to 2D images. A demo of the current capabilities of this model is currently available through the new Babylonian Engine portal.

{% include BEn_new.html %}

Collaborators: Dr 
<a href="https://scholar.google.com/citations?user=zLuqh-0AAAAJ&hl=en" target="_blank">Ethan Fetaya</a> (Bar Ilan University, Faculty of Engineering), Dr 
<a href="https://datascience.tau.ac.il/team/moni-shahar" target="_blank">Shimon Shahar</a> (Tel Aviv University, Center for Artificial Intelligence & Data Science).

### CuReD (Cuneiform Recognition Documents)

Machine learning models need as much data as we can give them. Although digital cuneiform text editions available online, are growing fast in recent years, there are still countless more in traditional print publications. Usually, existing OCR models perform very well in extracting text from images, such as scanned pdfs - if it is written in a modern language, like English. Although cuneiform text editions are written in the Latin alphabet, they include special characters and peculiar markings that make off-the-shelf OCR models useless. For this reason, we developed an OCR model specifically trained for cuneiform text editions. This will enable exponentially increasing the available corpus of cuneiform texts.

Collaborators: Prof. 
<a href="https://scholar.google.com/citations?user=xCYHonIAAAAJ&hl=en" target="_blank">Jonathan Berant</a> (Tel Aviv University, The Blavatnik School of Computer Science).

### Deeplomatics

This project focuses on cuneiform tablet shape analysis. Previous works in the field of diplomatics applied to cuneiform have noted that tablet shapes are highly indicative of dating as well as text genre. We have confirmed that this is the case with preliminary experiments in training an image classifier to predict tablet dating taking the tablet’s shape as input. We intend to deepen this line of research, using explainable AI (XAI) techniques to understand exactly how tablet shape correlates with tablet dating and genre, and whether this aligns with the claims in the Assyriological literature. This will enable us to automatically extract another source of information about tablet dating as well as gaining further insights into how cuneiform was used.

Collaborator: Dr <a href="https://data4goodlab.github.io/MichaelFire/" target="_blank">Michael Fire</a> (Ben-Gurion University of the Negev).

### Digital Cuneiform Paleography

Cuneiform palaeography is in its infancy. The last attempt at producing a comprehensive repertoire of the cuneiform signs of all periods, was almost a hundred years ago, in 1926 (Fossey’s magnum opus, *Manuel d’Assyriologie*). It is still widely cited, but largely obsolete, and clearly unsuited for today’s needs. As a result, there is no set criteria to date cuneiform tablets based on the shape of the signs alone, and leading cuneiform experts often offer widely diverging dates for one and the same document, which can differ by a margin of well over a millennium. We thus hope to create a modern, online database of signs per-period and a tool for dating texts based on their palaeography.

Collaborators: Prof. 
<a href="https://www.assyriologie.uni-muenchen.de/personen/professoren/jimenez/index.html" target="_blank">Enrique Jiménez</a> (LMU Munich, Institut für Assyriologie und Hethitologie), Dr
<a href="https://scholar.google.com/citations?user=zLuqh-0AAAAJ&hl=en" target="_blank">Ethan Fetaya</a> (Bar Ilan University, Faculty of Engineering).

### Machine Translation of Akkadian

Language is one of the biggest barriers between human cultures. But today, this barrier is getting smaller and smaller - no need to say more than "google translate" on that front. But what about low-resource languages, and ancient languages? We are currently developing a machine translation model for translating Akkadian into English. Most people have experienced by now that machine translation is far from perfect, even between modern languages. Nevertheless, it is still able to give a general understanding of a text at hand. Therefore, having such a tool at your fingertips will make instantly accessible millennia of cultural heritage and history.

Collaborators: Prof. 
<a href="https://scholar.google.com/citations?user=xCYHonIAAAAJ&hl=en" target="_blank">Jonathan Berant</a> (Tel Aviv University, The Blavatnik School of Computer Science), Dr
<a href="https://scholar.google.co.il/citations?user=PZVd2h8AAAAJ&hl=en" target="_blank">Omer Levy</a> (Tel Aviv University, The Blavatnik School of Computer Science).

### Metaphor Detection in Akkadian Letters

Metaphor detection is a high-level semantic task that has only recently become a research interest in natural language processing (NLP) due to the abstract nature of the target object. This project seeks to develop a method for automatic metaphor detection in Akkadian, leveraging the insights of conceptual metaphor theory and frame semantics that are the basis for a number of large metaphor databases (such as UC Berkeley’s <a href="https://metanet.icsi.berkeley.edu/metanet/" target="_blank">MetaNet</a>). We work with the corpus of Neo-Assyrian letters, which is available in lemmatized form on ORACC and is written in a more colloquial style than royal inscriptions or administrative documents. Besides developing a new, richly-annotated set of Akkadian texts available for future use, this project hopes to show the value of cognitive linguistics to NLP research.

Collaborator: Prof. 
<a href="https://github.com/niekveldhuis" target="_blank">Niek Veldhuis</a> (UC Berkely, Dept. of Middle Eastern Languages and Cultures).

## Past Projects

### Stroke Recognition for Cuneiform

An OCR model for recognizing cuneiform signs from 2D or 3D images is one of the biggest *desiderata* for assyriology in the 21<sup>st</sup> century. We developed an OCR model for recognizing horizontal strokes of cuneiform signs from 2D images of tablets. Cuneiform signs are created by different combination of a limited number of strokes: horizontals, verticals, obliques. This work was a first step in establishing a pipeline for cuneiform OCR from 2D images. The model is able to create a vectorized hand-copy, which will be easier for further OCR applications.

Collaborators: Prof. 
<a href="https://orcid.org/0000-0002-3959-5406" target="_blank">Josef Pavlíček</a> (CULS Prague),
<a href="https://orcid.org/0000-0002-1012-650X" target="_blank">Adéla Hamplová</a> (CULS Prague).

### Word-Sense Induction for Low-Resource Semitic Languages

Contextual understanding in the humanities is its bread and butter - and NLP applications using word-embedding for contextualization is a revolutionizing method of doing just that. It provides the ability for an emic understanding of a text at 
, in the context of its own language, often forcing us to confront the biases with which we read the text before. When attempting to apply such models to Akkadian and biblical Hebrew, however, they offer particular challenges: these models work best with large datasets, but Akkadian and biblical Hebrew are low-resource languages. We developed a word-sense induction model that can provide productive, contextual results for these two languages.

Collaborators: Dr 
<a href="https://scholar.google.co.il/citations?user=sdfKs_sAAAAJ&hl=en" target="_blank">Amos Azaria</a> (Ariel University, Department of Computer Science).
