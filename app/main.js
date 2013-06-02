define({
  normTheme: {
    module: "theme/normalize.css"
  },
  theme: {
    module: "theme/basic.css"
  },
  root: {
    $ref: 'dom!upops'
  },
  top: {
    $ref: "dom!top"
  },
  centre: {
    $ref: "dom!centre"
  },
  bottom: {
    $ref: "dom!bottom"
  },
  title: {
    render: {
      template: {
        module: "text!title/template.html"
      },
      replace: {
        module: "i18n!title/strings"
      }
    },
    insert: {
      first: 'top'
    }
  },
  chart: {
    render: {
      template: {
        module: "text!chart/template.html"
      },
      replace: {
        module: "i18n!chart/strings"
      }
    },
    insert: {
      first: 'centre'
    }
  },
  selector: {
    render: {
      template: {
        module: "text!selector/template.html"
      },
      replace: {
        module: "i18n!selector/strings"
      }
    },
    insert: {
      first: 'bottom'
    }
  },
  plugins: [
    {
      module: "wire/dom",
      classes: {
        init: "loading"
      }
    }, {
      module: "wire/dom/render"
    }
  ]
});
