---
layout: default-main
title: Projects
---

## Babylonian Engine (BEn)

The Babylonian Engine is a growing repository for tools designed to aid the research, teaching, and knowledge distribution of the ancient cultures of Mesopotamia. One of the greatest obstacles of assyriology is an incredible amount of data, and at the same time an extremely limited number of people able to access it and make it accessible for the rest of the world. The artificial intelligence revolution and general developments in computer and data science can give us the long awaited solutions for that problems, by creating an appropriate interface. For our existing tools and more information, see the [Babylonian Engine Page](BEn.md). For tools in the making, see other projects in this page.

## Mesopotamian Ancient Place-names Almanac (MAPA)

MAPA is an historical geography project of the city of Uruk, one of the largest and most important cities of Mesopotamia, in the age of Empires (first millennium BCE). It aims to incorporate both textual and remote-sensing data for large scale relational mapping of the landscape. The core of the project is made up of a gazetteer of place names in texts and surveys, both on the ground and via satellite. This gazetteer is formatted according to the standards of the JSON-LD based [Linked Places format (LPF)](https://github.com/LinkedPasts/linked-places/blob/master/tsv_0.3.md) of the [World Historical Gazetteer](http://whgazetteer.org/). For more information, see the [MAPA page](MAPA.md).

## 3D Scanning of Cuneiform Tablets

When taking 2D images of cuneiform tablets, which are 3D objects, some information is always lost, no matter how high the image quality. Capturing them in 3D models is the ideal way to document them digitally and keep all the information they hold, both for scholars wanting to study them, and for computer vision applications, such as sign identification. For this purpose, the lab has acquired a 3D Hexagon scanner (Smartscan R5 with Led blue). We are currently in the process of creating 3D models of tablets held at the Israel Museum, and we have future plans to cooperate with the Bible Lands Museum, creating more online databases of 3D cuneiform tablets. We also enthusiastically welcome solicitations for scanning other historical artifacts, and providing technical support for publishing them.

## Akkadian Parser

One of the main tasks in reading any language, but particularly ancient languages, is parsing the words and finding their lemmas in the dictionaries. In the case of Akkadian, this task is sometimes especially difficult due to its rich morphology, and due to the fact that it is a low-resource language: although online repositories of Akkadian texts are growing faster than ever in recent years, there are still many genres and periods which are severally under-represented in the current digital corpora. We are developing a tool that attempts to combat both these difficulties, by combining rule-based methods with the robustness of statistical analysis for providing comprehensive suggestions for a given word in a sentence. We hope that this will be able to complemenet recent advancement in machine learning methods for Akkadian parsing by providing a similar tool that is not period or genre dependent.

## Cuneiform Stroke Recognition (Marie)

An OCR model for recognizing cuneiform signs from 2D or 3D images is one of the biggest *desiderata* for assyriology in the 21<sup>st</sup> century. Marie is an OCR model currently under development for recognizing cuneiform sign strokes from 2D images of cuneiform tablets. Cuneiform signs are created by different combination of a limited number of strokes: horizontals, verticals, obliques and diagonals. Marie is being trained to recognize and vectorize each one of these stroke types in a given image. At the next stage, we will train the model to also identify combinations of strokes as specific signs. For more information, see the designated website for that project with our collaborators at CULS Prague <https://cuneiform2d.wixsite.com/cuneiform>.

## Digital Cuneiform Paleography

Cuneiform palaeography is in its infancy. The last attempt at producing a comprehensive repertoire of the cuneiform signs of all periods, was almost a hundred years ago, in 1926 (Fossey’s magnum opus, *Manuel d’Assyriologie*). It is still widely cited, but largely obsolete, and clearly unsuited for today’s needs. As a result, there is no set criteria to date cuneiform tablets based on the shape of the signs alone, and leading cuneiform experts often offer widely diverging dates for one and the same document, which can differ by a margin of well over a millennium. We are working on collecting and computationally assessing thousands of signs, using machine learning among other methods. We thus hope to create a modern, online database of signs per-period and a tool for dating texts based on their palaeography.

## Machine Translation of Akkadian

Language is one of the biggest barriers between human cultures. But today, this barrier is getting smaller and smaller - no need to say more than "google translate" on that front. But what about low-resource languages, and ancient languages? We are currently developing a machine translation model for translating Akkadian into English. Most people have experienced by now that machine translation is far from perfect, even between modern languages. Nevertheless, it is still able to give a general understanding of a text at hand. Therefore, having such a tool at your fingertips will make instantly accessible millennia of cultural heritage and history. It can also speed up the process of academic publications of texts, since scholars will have a rough draft to work with, rather than an empty page.

## OCR for Cuneiform Hand-Copies

In the 19<sup>th</sup> and 20<sup>th</sup> centuries, the most efficient way to publish cuneiform tablets was creating hand-copies, drawings imitating cuneiform signs in black and white. This is still widely used to this day in assyriological publications. Therefore, there are thousands, if not tens of thousands of these hand-copies, which, because of their relative simplicity, can be an easier first step into OCR of cuneiform signs. We are currently curating a database of cuneiform signs, derived from hand-copies, for training a machine learning model that will be able to identify the positions of individual signs within a given image, and then identify the signs themselves. After achieving successful results with hand-copies, we hope to apply our model to 2D and 3D images.

## OCR for Cuneiform Text Editions

Machine learning models need as much data as we can give them. Although digital cuneiform text editions, available online, are growing fast in recent years, there are still countless more in traditional print publications. Usually, existing OCR models perform very well in extracting text from images, such as scanned pdfs - if it is written in a modern language, like English. Although cuneiform text editions are written in the Latin alphabet, they include special characters and peculiar markings that make off-the-shelf OCR models useless. For this reason, we are developing an OCR model specifically trained for cuneiform text editions. We hope that this will enable exponentially increasing the available corpus of cuneiform texts.

## Word-Sense Induction for Low-Resource Semitic Languages

Contextual understanding in the humanities is its bread and butter - and NLP applications using word-embedding for contextualization is a revolutionizing method of doing just that. It provides the ability for an emic understanding of a text at hand, in the context of its own language, often forcing us to confront the biases with which we read the text before. When attempting to apply such models to Akkadian and biblical Hebrew, however, they offer particular challenges: these models work best with large datasets, but Akkadian and biblical Hebrew are low-resource languages. We are currently developing a word-sense induction model that will nevertheless be able to provide productive, contextual results for these two languages.