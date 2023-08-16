const addbtn  = document.querySelector(".addbtn")
const main = document.querySelector("#main")


addbtn.addEventListener("click",
function(){
     addnote()
}
)


const saveNotes = ()=>{
     const notes = document.querySelectorAll(".note textarea")
     const data  = []
     notes.forEach((note)=>{
          data.push(note.value)
          
     })
     if(data.length === 0){
          localStorage.removeItem("notes")
     }else{

          localStorage.setItem("notes", JSON.stringify(data))
     }
}




 const addnote = (text
     ="")=>{
 const note  = document.createElement("div")
 note.classList.add("note")
 note.innerHTML = `
  <div class="tool">
  <i class="save fa-solid fa-floppy-disk"></i>
            <i class="trash fa-sharp fa-solid fa-trash"></i>
            </div>
            <textarea>${text}</textarea>
 `
 note.querySelector(".trash").addEventListener("click",
 function(){
      note.remove()
     saveNotes()
})
 note.querySelector(".save").addEventListener("click", 
 function(){
     saveNotes()
}
 )
 note.querySelector("textarea").addEventListener(
     "focusout", 
 function(){
     saveNotes()
 })
 main.appendChild(note)
 saveNotes()
}

(function(){
          const lsnotes = JSON.parse(localStorage.getItem("notes"))
          if(lsnotes == null){
          addnote()

          }else{
          lsnotes.forEach((lsnote)=>{
               addnote(lsnote)
          })
     }
}
)()





