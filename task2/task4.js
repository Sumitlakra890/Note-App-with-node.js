
const fs=require('fs')
const chalk=require('chalk')

const getNotes=()=>{
    return "fuck u ,fuck ,evry one  that i know"
}

const addNotes=(title,body)=>{
    const loadData=loadnotes()
 
    const duplicates=loadData.find((note)=> note.title===title)

    if(!duplicates){

    loadData.push({
        title:title,
        body:body
    })

    saveNotes(loadData)
    console.log("note is added ")
    }
else{
    console.log("note title is taken")
}
}



const saveNotes =(loadData)=>{
    const saveJson=JSON.stringify(loadData)
    fs.writeFileSync('notes.json',saveJson)
}
    

const loadnotes=()=>{
    try{
        const databuffer=fs.readFileSync('notes.json')
        const dataBufferString=databuffer.toString();
        return JSON.parse(dataBufferString)
    }catch(e)
    {
        return []
    }
}

//remove Notes
const removeNotes=(title)=>{
    const Rnotes=loadnotes()
    const a=Rnotes
    const renotes=Rnotes.filter((note)=>
         note.title!=title
    )

    
    if(Rnotes.length>renotes.length){
      return console.log(chalk.green.bold('remove the note!'))
      saveNotes(renotes)
}
      else
      return console.log(chalk.red.bold('No note is removed'))
}
//list notes
 const ListNotes=()=>{
    console.log(chalk.red.bold('yours Notes'))
    const Lnotes =loadnotes()
    Lnotes.forEach((note)=>{
        console.log(note.title)
    }
    )

 }
 //read notes
 const readNotes=(title)=>{
    const rnotes=loadnotes()
    const rnote=rnotes.find((note)=>note.title===title)
    if(note){
        console.log(chalk.inverse(rnote.title))
        console.log(rnote.body)
    }
    else{
        console.log(chalk.red.inverse('notes not found'))
    }

 }

module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    ListNotes:ListNotes,
    readNotes:readNotes

}