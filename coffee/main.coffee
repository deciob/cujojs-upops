define

  normTheme:
    module: "theme/normalize.css"
  
  # Load a basic theme. This is just a CSS file, and since a moduleLoader is
  # configured in run.js, curl knows to load this as CSS.
  theme:
    module: "theme/basic.css"


  root: 
    $ref: 'dom!upops'
  top:
    $ref: "dom!top"
  centre:
    $ref: "dom!centre"
  bottom:
    $ref: "dom!bottom"


  # Create a simple view by rendering html, replacing some i18n strings
  # and loading CSS.  Then, insert into the DOM
  title:
    render:
      template:
        module: "text!title/template.html"
      replace:
        module: "i18n!title/strings"
      #css:
      #  module: "css!title/structure.css"
    insert:
      first: 'top'

  chart:
    render:
      template:
        module: "text!chart/template.html"
      replace:
        module: "i18n!chart/strings"
    insert:
      first: 'centre'

  selector:
    render:
      template:
        module: "text!selector/template.html"
      replace:
        module: "i18n!selector/strings"
    insert:
      first: 'bottom'

  
  # Wire.js plugins
  plugins: [
    module: "wire/dom"
    classes:
      init: "loading"
  ,
    module: "wire/dom/render"
  ]
