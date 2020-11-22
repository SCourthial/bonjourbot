const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});

// Load the Violet Module
const violet = require('violet').script();

// The Controller
var app = {
    helloInFrench: (response)=>{
        response.say("Bonjour!");
    },
    helloInEnglish: (response)=>{
        response.say("Hello!");
    }
}


violet.addFlowScript(`<app>
    <<choice id="launch">
        <expecting>A quoi sers-tu?</expecting>
        <say>Je peux dire bonjour en français ou en anglais</say>
    </choice>

    <choice id="list">
    <expecting>Dis bonjour.</expecting>
    <say>Bien sur!</say>
    <decision>
        <ask>Dois-je dire bonjour en français ou en anglais?</ask>
        <choice>
            <expecting>En français.</expecting>
            <resolve value="app.helloInFrench(response)"/>
        </choice>
        <choice>
            <expecting>En anglais.</expecting>
            <resolve value="app.helloInEnglish(response)"/>
        </choice>
    </decision>
    </choice>
</app>`, {app});