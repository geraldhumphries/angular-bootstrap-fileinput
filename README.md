# angular-bootstrap-fileinput
A simple wrapper for [bootstrap-fileinput](https://github.com/kartik-v/bootstrap-fileinput) by @kartik-v. 

## What this does

This package adds a very simple directive to your Angular application that allows you to use and pass options to `bootstrap-fileinput` the Angular way. It can also set a watcher on the options object so any changes will immediately be reflected in the element.

## What this does NOT do

Aside from initialization and a watcher on the options object, this does not provide any functionality for interacting with `bootstrap-fileinput`. You will still need to follow [the documentation](http://plugins.krajee.com/file-input) for `bootstrap-fileinput` to properly configure it.

## Installation

- Install this package using bower: `bower install --save angular-bootstrap-fileinput`

- Install this package manually by including `angular-bootstrap-fileinput.js`. You also need to have `bootstrap-fileinput` and its dependencies installed.

Refer to the [official documentation](http://plugins.krajee.com/file-input#installation) for a complete guide on installing `bootstrap-fileinput` itself.

## Usage

Because this is just a wrapper for `bootstrap-fileinput`, you need to have it and all of its dependencies installed as a prerequisite. If you use bower it will be installed automatically.

1\. After installation, add `angular-bootstrap-fileinput` as a dependency to your application:

```
angular.module('app', ['angularBootstrapFileinput'])
```

2\. Initialize a `file` input field with `bootstrap-fileinput` by using the new `angular-bfi` directive:

```
<input id="input-id" type="file" class="file" angular-bfi />
```

3\. You can configure `bootstrap-fileinput` by passing in an options object to the `angular-bootstrap-fileinput` directive:
```
$scope.bfiConfig = {
    showUpload: false,
    previewFileType: 'any'
}
<input id="input-id" type="file" class="file" angular-bfi="bfiConfig" />
```

If you wish to make the element refresh any time the options are changed, you can set `watch-options="true"`. This will immediately call `refresh` on the element's `bootstrap-fileinput` instance, applying the new options. This behaviour is disabled by default.

```
<input id="input-id" type="file" class="file" angular-bfi="bfiConfig" watch-options="true" />
```

An options object can be passed directly to the directive:
```
<input id="input-id" type="file" class="file" angular-bfi="{'showUpload':false, 'previewFileType':'any'}" />
```

Options can also be passed in using data attributes:

```
<input id="input-id" type="file" class="file" data-preview-file-type="text" >
```

The full list of configuration options can be found in the `bootstrap-fileinput` [documentation](http://plugins.krajee.com/file-input#options)

