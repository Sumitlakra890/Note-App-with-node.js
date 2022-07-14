const validator=require("validator")
const yargs=require('yargs')
const notes=require('./task4.js')
//costmise the yard version

yargs.version('1.2.0')

//creating the add command
yargs.command(
    {
       command:'add',
       describe:'body of node',
       builder:{
        title:{
            describe:'title of note',
            demandoption:true,
            type:'string'
        },

        body:{
            describe:'body of note',
            demandoption:true,
            type:'string'
        }
       } ,
       handler(argv){
         notes.addNotes(argv.title,argv.body)
       }
        
    }
)
//creating to remove command
yargs.command({
    command:"remove",
    describe:"removing the notes",
    builder:{
        title:{
            describe:"remove the note",
            demandoption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})
//list command
yargs.command({
    command:"list",
    describe:"list the notes",
    handler:function(){
        notes.ListNotes()
        
    }
})

//read comand
yargs.command({
    command:"read",
    describe:"read the notes ",
    builder:{
        title:{
        describe:'title of notes',
        demandoption:true,
        type:'string'
    }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

//console.log(yargs.argv)
//same as previose method
yargs.parse()