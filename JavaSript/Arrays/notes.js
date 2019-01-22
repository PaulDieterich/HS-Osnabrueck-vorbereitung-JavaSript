const notes = [

    {
        titel: " Office modificatio",
        body: "I would like to go to spain"
    },
    {
        titel: " ASasdasdasd",
        body: "go to gym"
    },
    {
        titel:   "P eter asd off",
        body: " hear musik "
    }];

    

    const sortNotes =  function(notes){
    
        notes.sort(function(a, b){
            if(a.titel.toLowerCase() < b.titel.toLocaleLowerCase()){
               return -1 
            }else if(b.titel.toLocaleLowerCase() < a.titel.toLowerCase()){
                return 1 
            }else{
                return 0
            }
        })
    }
    sortNotes(notes);
    console.log(notes);

    const findNote = function(notes,  noteTitel){
        
        return notes.find(function(note){
            return note.titel.toLowerCase() === noteTitel.toLowerCase()
        })
      
    }
    const findNotes = function(notes, searchText){
        return filteredNotes = notes.filter(function(note,index){
            const isTitleMatch = note.titel.toLocaleLowerCase().includes(searchText)
            const isBodyMatch = note.body.toLocaleLowerCase().includes(searchText)
            return isTitleMatch || isBodyMatch
        })
       
    }
    
   // console.log(findNotes(notes, "spain"))
  /*   const findNote = function(notes,  noteTitel){
        const index = notes.findIndex(function(note){
            return note.titel.toLowerCase() === noteTitel.toLowerCase()
        })
        return notes[index]
    } */
    /* const note = findNote(notes, "Note 1")
    console.log(note) */


/* console.log(notes.length);
console.log(notes);

const index = notes.findIndex(function(note, index){
    console.log(note)
    return note.titel === "note 1"
})

console.log(index) */