define({
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
  title: {
    render: {
      template: {
        module: "text!title/template.html"
      }
    },
    insert: {
      first: 'top'
    }
  },
  selector: {
    render: {
      template: {
        module: "text!selector/template.html"
      }
    },
    insert: {
      last: 'top'
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
  map: {
    render: {
      template: {
        module: "text!map/template.html"
      }
    },
    insert: {
      last: 'centre'
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
