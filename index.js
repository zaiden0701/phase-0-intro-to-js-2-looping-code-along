function writeCards(name,event){
    const messages = []
    for (let i = 0; i < name.length; i++){
        const message = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
        messages.push(message)
    }
    return messages
}

function countDown(int){
    let countdown = int
    while (countdown >=0)
        console.log(countdown--)
    }

countDown(int)
