 let data=document.getElementById("read-button")
 data.addEventListener("click", () => {
    const text = document.getElementById("text-input").value;
    const alert = document.getElementById("text-input").placeholder;

    if (text.trim() !== "") {

      
      const speech = new SpeechSynthesisUtterance(text);

      speechSynthesis.speak(speech);
      speechSynthesis.speak(speech);
      
    } 
    else{
      const speech = new SpeechSynthesisUtterance(alert);

      speechSynthesis.speak(speech);
    }
  });