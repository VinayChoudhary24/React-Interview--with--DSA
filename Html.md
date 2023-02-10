#1 - Semantic Html ?
    -- A semantic element clearly describes its meaning to both the browser and the developer.

    -- Examples of non-semantic elements: <div> and <span> - Tells nothing about its content.

    -- Examples of semantic elements: <form>, <table>, and <article> - Clearly defines its content.

<!-- ## LIST OF SEMANTIC ELEMENTS -->


<details>  -- Defines additional details that the user can view or hide

<figcaption> -- caption for the <figure>
<figure> -- used for <img />, listings, diagrams etc...
              EXAMPLE: -- <figure>
                    <img src="pic_trulli.jpg" alt="Trulli">
                    <figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>
                 </figure>

<header> -- The Main Header Part on the Page
                     EXAMPLE: --   <article>
                                      <header>
                                      <h1>What Does WWF Do?</h1>
                                      </header>
                                   </article>

<nav> -- The Part Below the Header 

<section> -- We Can Put Everything Inside a Section i.e Header, Nav Aside ....

    # We Can Nest Section and Article with Each Other

<article> -- We Can Put Everything Inside a Section i.e Header, Nav Aside ....

<aside> -- element defines some content aside from the content it is placed in (like a sidebar).

<footer> -- Defines a footer for a document or section

<main> -- Specifies the main content of a document

<mark> -- Defines marked/highlighted text

<summary> -- Defines a visible heading for a <details> element

<time>  -- 	Defines a date/time


#2 - New TAGS in Html ?
   <hgroup> tag:=> The <hgroup> tag in HTML stands for heading group and is used to group the heading elements. The <hgroup> tag in HTML is used to wrap one or more heading elements from <h1> to <h6>.

   <audio> tag:=> The <audio> tag is used to insert an audio into an HTML webpage.

   <datalist> tag:=> The <datalist> tag is used to provide autocomplete feature in the HTML files. It can be used with an input tag so that users can easily fill the data in the forms using select the data.

   <keygen> tag:=> The <keygen> tag in HTML is used to specify a key-pair generator field in a form. The purpose of the<keygen> element is to provide a secure way to authenticate users. When a form is submitted then two keys are generated, private key and public key. The private key is stored locally, and the public key is sent to the server.

   <meter> tag:=> It is used to define the scale for measurement in a well-defined range and also supports a fractional value. It is also known as a gauge. It is used in Disk use, relevance query result, etc.

   <output> tag:=> The <output> tag in HTML is used to represent the result of a calculation performed by the client-side script such as JavaScript.

   <progress> tag:=> It is used to represent the progress of a task. It is also defined how much work is done and how much is left to download a thing. It is not used to represent the disk space or relevant query.

   <video> tag:=> The <video> tag is used to embed video content in a document, such as a movie clip or other video streams. 

#3 - should we inject div inside a span TAg ? will html give Error ?
    -- No, we should not put BLOCK Element div inside a INLINE Element <span> because it might Break in PRODUCTION.

#4 - 