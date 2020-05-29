# How Browsers Work [1](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)

This text is mostly a copypaste from [the one article](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/).

To slightly cover the topic, watch this YouTube [video](https://www.youtube.com/watch?v=WjDrMKZWCt0)

## The browser's high level structure

1. The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
2. The browser engine: marshals actions between the UI and the rendering engine.
3. The rendering engine : responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
4. Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
5. UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
6. JavaScript interpreter. Used to parse and execute JavaScript code.
7. Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

![Figure : Browser components](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/layers.png "Figure : Browser components")

_Figure : Browser components_

## The main flow

![Browser's flow. Simply](https://drive.google.com/uc?id=1Xrd7R_WqDNZFQdYuI6-8y6jxje61NKdO "Browser's flow. Simply")

_Browser's flow. Simply._

The rendering engine will start getting the contents of the requested document from the networking layer. This will usually be done in 8kB chunks.

The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree.

The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.

After the construction of the render tree it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. The next stage is painting–the render tree will be traversed and each node will be painted using the UI backend layer.

It's important to understand that this is a gradual process. For better user experience, the rendering engine will try to display contents on the screen as soon as possible. It will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the contents that keeps coming from the network.

![WebKit Main flow example](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/webkitflow.png "WebKit Main flow example")

_WebKit Main Flow example_
