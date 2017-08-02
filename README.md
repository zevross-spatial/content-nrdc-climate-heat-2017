# content-nrdc-climate-heat-2017 (EXTREME HEAT)


## To edit individual state pages click on the states link above (or click [here](https://github.com/zevross-spatial/content-nrdc-climate2017/tree/master/states))

**NOTE:** changes take at least a few seconds to get updated in the app, even as much as a minute. To see your changes outside the app you can use this link: [https://zevross-spatial.github.io/content-nrdc-climate2017/](https://zevross-spatial.github.io/content-nrdc-climate2017/)

1. Choose a state and click on that state's `.md` file.
2. In the top right is a little pencil, click on this to edit. You can use HTML or you can use markdown in the text.
3. Leave the items with `{{}}` these are variables (see next heading)

## To edit variables

The variables are listed in the `_config.yml` file. You can click on that file, use the little pencil and edit like the state pages. You will see, for example this code:

```
heading_two: How We Can Solve It
```

This is one of the variables for the second header. You can change the "How We Can Solve It" to anything you want and it will update.

## To edit citations

1. Follow the steps to edit individual state pages. The citations are at the bottom of each state page
1. However, unlike the markdown used for that state text, the citations are in standard html tags.
1. All citations need to remain inside the `<footer></footer>` tags
1. Each citation starts with an anchor: `<b id="f1">1.</b>` If you want a superscript link in the state text that will "jump" down to the citation section, make sure to include the `id=""` with the value of that attribute equal to the "f" + the number of the citation, and make sure superscript link in the text matches it `<sup>[1](#f1)</sup>`
1. The content of the citation is contained within a `<sup></sup>`. Make sure each citation starts and ends with those tags, otherwise they won't be styled correctly in the app. Inside the `sup` tag, insert only regular text (not markdown, it won't work) or if necessary, html tags.

## To edit action button

1. The action button is contained in the `<section class="l-1up-promo..... </section>` section, below the text and above the citations. The html is an exact copy from the primary NRDC page, and contains all the same config:
    - The link around the image
    - The img source url
    - The h2 (header) text (the primary text in the promo
    - The text content of the action button, and the button link url

1. This is just regular html, so anything is editable. By default each state page is currently configured to use a variable for the h2 text:
```
<h2>{{ site.promo_one }}</h2>
```
3. If that's not desired, remove the {{}} and replace with regular text.

## To edit state statistics and text on the state detail view

1. To edit the numbers or text that are seen here:
[details]: https://cloud.githubusercontent.com/assets/25695785/26737555/aa4b84f8-4798-11e7-855e-7b7700667768.png  "State Details"
Edit the json file located here:
https://github.com/zevross-spatial/content-nrdc-climate2017/blob/master/data/usstatestats.json

1. All of the numbers come from this file, but for states that need different text from the default, you can also add additional entries for a state to override them. For example look at "DC":
```
  "DC": {
    "p": "100%",
    "r": "N/A",
    "a": "59,000",
    "c": "10,000",
    "t1": "of residents living in DC reported to have ragweed and unhealthy smog days",
    "t2": "ranked in percentage of people living in DC with ragweed and unhealthy smog days",
    "t3": "suffer from asthma"
  },
```
In this example, the titles for row 1, 2, and 3 (t1, t2, t3 respectively) include entries that are used instead of the default text. You can override 1, 2, of all 3 of the text entries for each state. Look at "LA" for another example.

1. Json is the universally preferred exchange format for the web, but is very specific about its formatting requirements. Every entry for a state must have both values, the property name ("p", "t1", etc) and the value ("100%", "of residents...") in DOUBLE QUOTES. And every entry needs a comma after it, EXCEPT THE LAST ONE!

1. Before committing any changes to the json file, make sure to run it through a validator first. Use:

[https://jsonlint.com/](https://jsonlint.com/)

Copy the entire file, paste it into that site, and hit validate.

1. Also, this file does not accept markdown or html, it's just for raw data.




### A little bit on markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/zevross-spatial/content-nrdc-climate2017/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
