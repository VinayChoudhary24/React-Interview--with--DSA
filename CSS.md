#1 - CSS Selectors -- CSS selectors are used to "find" (or select) the HTML elements you want to style.
    # The universal selector (*) selects all HTML elements on the page.

    --We can Divide CSS Selectors in FIVE Categories:

      #1- Simple selectors (select elements based on name, id, class).

      #2- Combinator selectors (select elements based on a specific relationship between them).
            Example: div span --will match all <span> elements that are inside a <div> element.
            Example: ul > li --will match all <li> elements that are nested directly inside a <ul> element.
            Example: p ~ span will match all <span> elements that follow a <p>, immediately or not.
            Example: h2 + p will match the first <p> element that immediately follows an <h2> element.
            EXAMPLE: ol || td will match all <td> elements that belong to the scope of the <col>.


      #3- Pseudo-class selectors (select elements based on a certain state).
            Example: a:visited will match all <a> elements that have been visited by the user.

      #4- Pseudo-elements selectors (select and style a part of an element).
            Example: p::first-line will match the first line of all <p> elements.

      #5- Attribute selectors (select elements based on an attribute or attribute value).
           Example: [autoplay] --will match all elements that have the autoplay attribute set (to any value).

#2 - CSS Pre-Processors --A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax.
          
          --To use a CSS preprocessor, you must install a CSS compiler on your web server; Or use the CSS preprocessor to compile on the development environment, and then upload compiled CSS file to the web server.
          
          # CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on. These features make the CSS structure more readable and easier to maintain.

        # Most Popular CSS PreProcessors:
         
         #1- Sass - Sass stands for Syntactically Awesome Stylesheet
                  ---Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.

         #2- Less - Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS.

         #3- Stylus - An expressive, robust, feature-rich CSS language built for nodejs.

         #4-  PostCSS- A tool for transforming CSS with JavaScript.

#3 - CSS Specificity -- IF there are two or more CSS rules that point to the same element, the selector with the highest specificity  value will "win", and its style declaration will be applied to that HTML element.
           EXAMPLE-- <p id="demo" class="test" style="color: pink;">Hello World!</p>

           #Specificity Hierarchy / Order :
                  FIRST PRIORITY -- Inline styles - Example: style="color: pink; --HIGHEST PRIORITY

                  SECOND PRIORITY -- IDs - Example: #navbar

                  THIRD PRIORITy -- Classes, pseudo-classes, attribute selectors - Example: .test, :hover, [href]

                  FOURTH PRIORITy -- Elements and pseudo-elements - Example: h1, ::before -- LOWEST PRIORITy


         # Resetting CSS: A CSS reset is a set of styles that you load before your other styles to remove built-in browser styles.

         # Normalizing CSS: Normalizing CSS improves cross-browser consistency in HTML element default styling of the browser’s user agent. It’s an HTML5-friendly replacement for the standard CSS Reset.
                -- The purposes of normalizing are: 
                                         # Preserve default useful browsers instead of erasing them.
                                         # Standardize styles for a wide variety of HTML elements.
                                         # Correct bugs and incoherence of common browsers.
                                         # Enhance usability through subtle improvements.
                                         # Use comments and detailed documentation to explain the code.

#4 - CSS Architecture -- A good CSS architecture is well extensible. Scalability is a challenge in any project development.
                       # 4 popular ways for writing modular CSS:
                                       1- Object-oriented CSS (OOCSS)

                                       2- Scalable Modular Architecture for CSS (SMACSS)

                                       3- Don’t Repeat Yourself CSS (DRY CSS)

                                       4- Block, Element, Modifier (BEM)

#5 - CSS Flot Property -- The float property specifies whether an element should float to the left, right, or not at all.
                         --- img  {
                                    float: right;
                                  }

#6 - Put the element in the Center of Div?
     -- Flex, Grid, Margin-Auto, Table CSS, CSS Position

#7 - FlexBox and Grid

#8 - SVGs -- SVG stands for Scalable Vector Graphics.
          -- SVG defines vector-based graphics in XML format.

#9 - Media Queries -- Media query is a CSS technique introduced in CSS3.
             -- /* Extra small devices (phones, 600px and down) */
                   @media only screen and (max-width: 600px) {...}

             -- /* Small devices (portrait tablets and large phones, 600px and up) */
                   @media only screen and (min-width: 600px) {...}

             -- /* Medium devices (landscape tablets, 768px and up) */
                   @media only screen and (min-width: 768px) {...}

             -- /* Large devices (laptops/desktops, 992px and up) */
                   @media only screen and (min-width: 992px) {...}

             -- /* Extra large devices (large laptops and desktops, 1200px and up) */
                   @media only screen and (min-width: 1200px) {...}

#10 - CSS Display Property -- The display property is the most important CSS property for controlling LAYOUT.

         #CSS Visibility Property: -- The visibility property specifies whether or not an element is visible.

                         EXAMPLE: .className {
                            display: none;
                            visibility: hidden;
                         }

#11 - CSS Position Properties

#12 - Difference Between PX and Rem

#13 - CSS Frameworks, Animations

#14 - Make a Website Responsive ?
   -- we use rem, width should be in Percentage, Media Queries, Framework Classes.

#15 - what to use PX, REM and EM?
    - rem , relative to BASE Font Size

#16 - 