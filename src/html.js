/*eslint-disable max-len */
export default (body, state, manifest) => {
  return (`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="A schedule of classes and social dances in the greater Seattle area for dances in the swing family, including Lindy Hop, Balboa, Blues, and Shag">
        <meta name="keywords" content="swing,swing dance,swing dancing,dancing,lindy,lindy hop,charleston,balboa,blues,shag,jazz,partner dance,ballroom,vintage,seattle,washington,capitol hill,fremont,redmond,queen anne">

        <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700|Lobster" rel="stylesheet">
        <link href="${manifest["main.css"]}" rel="stylesheet">
        <title>Swing Dance Seattle</title>
      </head>
      <body>
        <div id="root">${body}</div>

        <script>window.__REDUX_STATE__ = ${JSON.stringify(state)}</script>
        <script src="${manifest["runtime.js"]}"></script>
        <script src="${manifest["vendors.js"]}"></script>
        <script src="${manifest["main.js"]}"></script>
      </body>
    </html>
  `);
};
