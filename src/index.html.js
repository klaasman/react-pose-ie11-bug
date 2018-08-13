import stylesheet from '@kaliber/build/lib/stylesheet'
import javascript from '@kaliber/build/lib/javascript'
import App from '/App?universal'

export default (
  <html>
    <head>
      {stylesheet}
      <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,es2015,es2016,es2017,IntersectionObserver" />
      {javascript}
    </head>
    <body>
      <App />
    </body>
  </html>
)
