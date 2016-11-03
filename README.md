Documentation taken from [Stackoverflow Answer](http://stackoverflow.com/a/26123453/1932414 "Stackoverflow Answer")


----------


The documentation for PageDown is pretty much a mess. I'm going to try to create a much more ready to go example here.

# Necessary bits

###JS

```javascript
<script src="//cdnjs.cloudflare.com/ajax/libs/pagedown/1.0/Markdown.Converter.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/pagedown/1.0/Markdown.Editor.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/pagedown/1.0/Markdown.Sanitizer.js"></script>

<script>
    var converter = Markdown.getSanitizingConverter();
    var editor = new Markdown.Editor(converter);
    editor.run();
</script>
```

You can also use the .min.js versions from CDNjs

###CSS
```CSS
<link rel="stylesheet" href="//cdn.rawgit.com/balpha/pagedown/master/demo/browser/demo.css" />
<style>
    .wmd-button > span {
        background-image: 
          url('//cdn.rawgit.com/derobins/wmd/master/images/wmd-buttons.png');
        background-repeat: no-repeat;
        background-position: 0px 0px;
        width: 20px;
        height: 20px;
        display: inline-block;
    }
</style>
```
You probably don't want to rely directly on the source control files for production usage but it works in a pinch.

###HTML

The PageDown editor makes several expectations about html existing on your page.
```HTML
<div id="wmd-button-bar"></div>
<textarea id="wmd-input" class="wmd-input"></textarea>
<div id="wmd-preview" class="wmd-panel wmd-preview"></div>
```
This should get you up and running. For more advanced information on how to manipulate the image insertion, multiple editors, or adding your own custom plugins see the [original documentation](https://code.google.com/archive/p/pagedown/wikis/PageDown.wiki).


