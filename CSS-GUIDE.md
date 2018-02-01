First check out: https://github.com/rstacruz/rscss
Then check out: https://www.evoluted.net/thinktank/web-development/inuit-css-v5-0-the-object-oriented-css-framework


RSCSS is a simple idea to build a maintainable CSS

# Let's make it simple
- Classes over everything else to avoid confusing css prioritisation.
- Abbreviate words, but do not create a new language.

# Writing DRY stylesheets
- Separate Structure and Skin

> We want to separate layout styling (the structure) from the design styling (the skin) and define these as reusable objects.  These objects can then be mixed-and-matched to produce the desired visuals.

- Separate Container and Content

> Avoid using type selectors - Type selectors should be reserved for defining the basics. The styling of an unclassed element should not be dependent on where it is placed in the page.

## On layout
  - Layout will be determined by high level classes. These will determine how content sits on a page
  - There will be a small number of css based layouts that cover >90% of pages served by the application.
  - These styles will be imported as a starting point for any new feature.

## On components
  - Rather than using `-` on css class names to separate words. Use pascal case instead.
  ```css
  .list-group { ... } // Good
  .ListGroup { ... } // Better. Fewer characters
  ```

## On component elements
  - Use `camelCase`
  ```css
  .ProfileBox {
    > .avatar { ... } // Good
    > .firstName { ... } // Better. Elements with two words can be concatenated
  }
  ```
  - Prefer to use the > child selector whenever possible. This prevents styles bleeding through nested components, and performs better than descendant selectors.[See more](https://github.com/rstacruz/rscss/blob/master/docs/elements.md#element-selectors)
  ```css
    .ArticleCard {
      .title     { /* okay */ }
      > .author  { /* ✓ better */ }
    }
  ```

## Component modifiers
  - Use `camelCase`
  ```css
  .Btn {
    &.primary { ... }
    &.secondary { ... }
    &.extraLg { ... }
  }
  ```
  - To differentiate elements from modifiers. Declare your class value as `[element class from parent Component] Component modifier`
  ```css
  .Btn {
    &.primary { ... }
  }

  .SearchForm {
    > .submit { ... }
  }
  ```

  In templates
  ```html
    <form class="SearchForm">
      ...
      <input class="submit Btn primary" type="text" />
    </form>
  ```

## On utility
  - Use camel case for utility with prefix of `u`.
  - Seeing `uWiden` is a bit ugly. As a side effect: Using too many utilities should be discouraged.
```css
  .uWiden { width: 100% !important; }
```
