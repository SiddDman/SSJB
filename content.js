console.log("Working")





chrome.runtime.onMessage.addListener(gotMessage); //this message will appear in console log not in background page//

function gotMessage ( message,sender,sendResponse){
    console.log(message.txt);
    if (message.txt="hello"){
        let paragraphs=document.getElementsByTagName('p');

for (elt of paragraphs){

elt.style['background-color']='#00FFFF';

}

    }
}
