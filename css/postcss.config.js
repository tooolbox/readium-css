module.exports = (ctx) => ({
  plugins: [
    require('postcss-import')({
      root: ctx.file.dirname
    }),
    require('postcss-custom-media')({}),
    require('postcss-custom-selectors')({}),
//    require('postcss-discard-comments')({}),
    require("stylelint")({ 
      "rules": {
          "color-no-invalid-hex": true
        , "comment-no-empty": true
        , "number-max-precision": 4
        , "unit-blacklist": ["pt"]
        , "custom-property-pattern": "(RS|USER)__.+"
        , "selector-max-empty-lines": 0
        , "color-hex-length": "long"
        , "font-family-name-quotes": "always-where-recommended"
        , "function-url-quotes": "always"
        , "number-leading-zero": "always"
        , "number-no-trailing-zeros": true
        , "length-zero-no-unit": true
        , "unit-case": "lower"
        , "selector-attribute-quotes": "always"
        , "comment-whitespace-inside": "always"
        , "max-empty-lines": 1
        , "indentation": 2
        , "no-duplicate-at-import-rules": true
        , "no-extra-semicolons": true
        , "no-invalid-double-slash-comments": true
        , "max-nesting-depth": 0
        , "string-quotes": "double"
        , "declaration-bang-space-before": "always"
        , "block-closing-brace-newline-after": "always"
        , "block-opening-brace-newline-after": "always"
      }
    }),
    require('postcss-sorting')({
      'properties-order': [
          'object-fit'
        , 'position'
        , 'top'
        , 'right'
        , 'bottom'
        , 'left'
        , 'z-index'
        , 'display'
        , 'float'
        , 'columns'
        , 'column-width'
        , 'column-count'
        , 'column-gap'
        , 'column-fill'        
        , 'width'
        , 'height'
        , 'max-width'
        , 'max-height'
        , 'min-width'
        , 'min-height'
        , 'padding'
        , 'padding-top'
        , 'padding-right'
        , 'padding-bottom'
        , 'padding-left'
        , 'margin'
        , 'margin-top'
        , 'margin-right'
        , 'margin-bottom'
        , 'margin-left'
        , 'margin-collapse'
        , 'margin-top-collapse'
        , 'margin-right-collapse'
        , 'margin-bottom-collapse'
        , 'margin-left-collapse'
        , 'overflow'
        , 'overflow-x'
        , 'overflow-y'
        , 'clip'
        , 'clear'
        , 'font'
        , 'font-family'
        , 'font-size'
        , 'font-smoothing'
        , 'font-style'
        , 'font-weight'
        , 'hyphens'
        , 'widows'
        , 'orphans'
        , 'src'
        , 'line-height'
        , 'letter-spacing'
        , 'word-spacing'
        , 'color'
        , 'text-align'
        , 'text-align-last'
        , 'text-decoration'
        , 'text-indent'
        , 'text-overflow'
        , 'text-rendering'
        , 'text-size-adjust'
        , 'text-shadow'
        , 'text-transform'
        , 'word-break'
        , 'word-wrap'
        , 'white-space'
        , 'vertical-align'
        , 'list-style'
        , 'list-style-type'
        , 'list-style-position'
        , 'list-style-image'
        , 'pointer-events'
        , 'cursor'
        , 'background'
        , 'background-attachment'
        , 'background-color'
        , 'background-image'
        , 'background-position'
        , 'background-repeat'
        , 'background-size'
        , 'border'
        , 'border-collapse'
        , 'border-top'
        , 'border-right'
        , 'border-bottom'
        , 'border-left'
        , 'border-color'
        , 'border-image'
        , 'border-top-color'
        , 'border-right-color'
        , 'border-bottom-color'
        , 'border-left-color'
        , 'border-spacing'
        , 'border-style'
        , 'border-top-style'
        , 'border-right-style'
        , 'border-bottom-style'
        , 'border-left-style'
        , 'border-width'
        , 'border-top-width'
        , 'border-right-width'
        , 'border-bottom-width'
        , 'border-left-width'
        , 'border-radius'
        , 'border-top-right-radius'
        , 'border-bottom-right-radius'
        , 'border-bottom-left-radius'
        , 'border-top-left-radius'
        , 'border-radius-topright'
        , 'border-radius-bottomright'
        , 'border-radius-bottomleft'
        , 'border-radius-topleft'
        , 'content'
        , 'quotes'
        , 'outline'
        , 'outline-offset'
        , 'opacity'
        , 'filter'
        , 'visibility'
        , 'size'
        , 'zoom'
        , 'transform'
        , 'box-align'
        , 'box-flex'
        , 'box-orient'
        , 'box-pack'
        , 'box-shadow'
        , 'box-sizing'
        , 'table-layout'
        , 'animation'
        , 'animation-delay'
        , 'animation-duration'
        , 'animation-iteration-count'
        , 'animation-name'
        , 'animation-play-state'
        , 'animation-timing-function'
        , 'animation-fill-mode'
        , 'transition'
        , 'transition-delay'
        , 'transition-duration'
        , 'transition-property'
        , 'transition-timing-function'
        , 'background-clip'
        , 'backface-visibility'
        , 'resize'
        , 'appearance'
        , 'user-select'
        , 'interpolation-mode'
        , 'direction'
        , 'marks'
        , 'page'
        , 'column-break-after'
        , 'page-break-after'
        , 'break-after'
        , 'column-break-before'
        , 'page-break-before'
        , 'break-before'
        , 'column-break-inside'
        , 'page-break-inside'
        , 'break-inside'
        , 'unicode-bidi'
        , 'speak'
      ],
      'unspecified-properties-position': 'bottomAlphabetical'
    })
  ]
})