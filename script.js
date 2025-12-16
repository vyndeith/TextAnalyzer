function analyze() {
    const text = document.getElementById("user-input").value
    
    const words = text.trim().split(" ").length
    const spaces = text.split(" ").length - 1
    const characters = text.length
    const noSpaces = text.replace(/ /g, "").length
    
    document.getElementById("count-words").innerText = words
    document.getElementById("count-space").innerText = spaces
    document.getElementById("count-character").innerText = characters
    document.getElementById("count-character-no-spaces").innerText = noSpaces
}