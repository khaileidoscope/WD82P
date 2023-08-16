* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* MEDIA QUERIES */

/* media query rules:
at(@)-rule -@media
media type rule -only screen and
media feature - (max/min-width
*/

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  body {
    background-color: #f09a9d;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  body {
    background-color: #f5cf8e;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  body {
    background-color: #b2d6ff;
  }
}
