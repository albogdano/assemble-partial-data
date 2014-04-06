# assemble-partial-data [![NPM version](https://badge.fury.io/js/assemble-partial-data.png)](http://badge.fury.io/js/assemble-partial-data) 

> Plugin for [Assemble](https://github.com/assemble/assemble) which collects data from partials and groups it by key.
> Each value in the data hash has a list of associated partials.

This plugin was created to be used along with [albogdano/handlebars-helper-mdpartial](https://github.com/albogdano/handlebars-helper-mdpartial).
When used together, these allow you to treat partials as mini pages and provide flexibility when working with partial data.

## Installation
Use [npm](npmjs.org) to install the package in your project's directory: 

```
$ cd your-project
$ npm install assemble-partial-data --save-dev
```

### Register the plugin
assemble-partial-data
The easiest way to register the plugin with [Assemble](https://github.com/assemble/assemble) 
is to add the module to `devDependencies` and `keywords` in your project's package.json:

```
{
  "devDependencies": {
    "assemble-partial-data": "*"
  },
  "keywords": [
    "assemble-partial-data"
  ]
}
```

Alternatively, to register the plugin explicitly in the Gruntfile:

```
grunt.initConfig({
  assemble: {
    options: {
      // the "assemble-partial-data" npm module must also be listed in
      // devDependencies for assemble to automatically resolve the plugin
      plugins: ["assemble-partial-data", "foo/*.js"]
    },
    files: {
      "dist/": ["src/templates/*.html"]
    }
  }
});
```

## Usage

In your partials and pages use `{{partialData}}` to access the partial data object 
which contains the grouped data from all partials. 

The YAML data is collected from each partial and grouped by key in a similar way to how Assemble groups `categories` and `tags` for pages.

**Example data returned by `{{partialData}}`:**

```
"somedata": [
    {
      "value": "foo",
      "partials": [
        "part1",
        "part2"
      ]
    },
    {
      "value": "bar",
      "partials": [
        "part2",
        "part3",
        "part4"
      ]
    }
  ]
```
- The `value` field contains the value of a `somedata`.
- The `partials` field contains a list of partials where this same piece of data was found.

## License
[MIT License](LICENSE)
