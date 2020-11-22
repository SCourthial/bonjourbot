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
        <expecting>à quoi sert tu</expecting>
        <say>Je peux dire bonjour en français ou en anglais</say>
    </choice>

    <choice id="list">
    <expecting>dis bonjour</expecting>
    <say>Bien sur!</say>
    <decision>
        <ask>Dois-je dire bonjour en français ou en anglais?</ask>
        <choice>
            <expecting>en français</expecting>
            <resolve value="app.helloInFrench(response)"/>
        </choice>
        <choice>
            <expecting>en anglais</expecting>
            <resolve value="app.helloInEnglish(response)"/>
        </choice>
    </decision>
    </choice>
</app>`, {app});